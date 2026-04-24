<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
    <!-- Header -->
    <div class="mb-10">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-1.5 text-ink-500 hover:text-brand-700 text-sm font-semibold font-display mb-5 transition-colors duration-150 cursor-pointer"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to the atlas
      </NuxtLink>
      <span class="eyebrow mb-4">
        <svg class="w-3.5 h-3.5 text-sunset-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        Full catalog
      </span>
      <h1 class="section-title mt-3 text-4xl sm:text-5xl">All learning tracks</h1>
      <p class="section-subtitle mt-3">
        <strong class="text-ink-900">{{ categoryStats.length }}</strong> tracks ·
        <strong class="text-ink-900">{{ meta.totalResources.toLocaleString() }}</strong> total lessons
      </p>
    </div>

    <!-- Search within categories -->
    <div class="max-w-md mb-10">
      <div class="relative">
        <svg
          class="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          v-model="catFilter"
          type="search"
          placeholder="Filter tracks…"
          class="input-search pl-14"
        />
      </div>
    </div>

    <!-- Categories grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <CategoryCard
        v-for="cat in filteredCategories"
        :key="cat.slug"
        :category="cat"
      />
    </div>

    <div v-if="filteredCategories.length === 0" class="clay-card-flat mt-6 text-center py-16">
      <p class="font-display font-bold text-lg text-ink-950">No tracks match &ldquo;{{ catFilter }}&rdquo;</p>
      <p class="text-ink-500 mt-1">Try a different keyword, or browse everything.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'All Learning Tracks — DevAtlas Academy',
  description: 'Browse every learning track in the DevAtlas Academy catalog.',
})

const { getCategoryStats, meta } = useResources()

const categoryStats = getCategoryStats()
const catFilter = ref('')

const filteredCategories = computed(() =>
  catFilter.value
    ? categoryStats.filter((c) => c.name.toLowerCase().includes(catFilter.value.toLowerCase()))
    : categoryStats
)
</script>
