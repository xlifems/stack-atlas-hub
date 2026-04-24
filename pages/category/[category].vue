<template>
  <div v-if="categoryResources.length > 0" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-sm text-ink-500 font-semibold mb-8">
      <NuxtLink to="/" class="hover:text-brand-700 transition-colors duration-150 cursor-pointer">Home</NuxtLink>
      <svg class="w-3.5 h-3.5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <NuxtLink to="/categories" class="hover:text-brand-700 transition-colors duration-150 cursor-pointer">Catalog</NuxtLink>
      <svg class="w-3.5 h-3.5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-ink-900 truncate">{{ categoryName }}</span>
    </nav>

    <!-- Header -->
    <div class="clay-card !p-8 sm:!p-10 mb-10 flex flex-col sm:flex-row sm:items-center gap-6">
      <div class="w-20 h-20 rounded-[2rem] bg-brand-600 text-white shadow-clay flex items-center justify-center shrink-0 animate-bounce-soft">
        <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4V4zM20 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8V4z" />
        </svg>
      </div>
      <div class="min-w-0">
        <span class="eyebrow mb-3">
          <svg class="w-3.5 h-3.5 text-bubblegum-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Learning track
        </span>
        <h1 class="section-title mt-2 text-4xl">{{ categoryName }}</h1>
        <p class="text-ink-600 mt-2 leading-relaxed">
          <strong class="text-ink-950">{{ categoryResources.length }}</strong> free
          {{ categoryResources.length === 1 ? 'lesson' : 'lessons' }} waiting for you in this track.
        </p>
      </div>
    </div>

    <!-- Filters & search -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8">
      <div class="flex-1">
        <SearchBar v-model="filters" placeholder="Search within this track…" />
      </div>

      <!-- Tag filter -->
      <div v-if="availableTags.length > 0" class="flex flex-wrap gap-2 sm:items-center">
        <button
          v-for="tag in availableTags.slice(0, 6)"
          :key="tag"
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-semibold
                 transition-all duration-150 cursor-pointer shadow-clay-sm"
          :class="
            filters.tag === tag
              ? 'bg-brand-600 text-white'
              : 'bg-white text-brand-700 hover:-translate-y-0.5'
          "
          @click="toggleTag(tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- Resources -->
    <ResourceGrid :resources="filteredResources" :total-count="categoryResources.length">
      <template #empty-action>
        <button class="btn-ghost text-sm" @click="clearFilters">Clear filters</button>
      </template>
    </ResourceGrid>

    <!-- Related categories -->
    <div v-if="relatedCategories.length > 0" class="mt-16 pt-10 border-t-2 border-dashed border-brand-200">
      <h2 class="section-title mb-6">Keep exploring</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CategoryCard v-for="cat in relatedCategories" :key="cat.slug" :category="cat" />
      </div>
    </div>
  </div>

  <!-- 404 -->
  <div v-else class="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
    <div class="w-24 h-24 rounded-[2.5rem] bg-white shadow-clay flex items-center justify-center text-brand-600 animate-wiggle">
      <svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="7" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.3-4.3" />
      </svg>
    </div>
    <div>
      <h1 class="section-title text-3xl">Track not found</h1>
      <p class="text-ink-600 mt-2">We couldn't find a track for &ldquo;{{ $route.params.category }}&rdquo;.</p>
    </div>
    <NuxtLink to="/categories" class="btn-primary">Browse all tracks</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { SearchFilters } from '~/types/resource'

const route = useRoute()
const { getByCategory, getCategoryName, getCategoryStats, search } = useResources()

const categorySlug = computed(() => route.params.category as string)
const categoryName = computed(() => getCategoryName(categorySlug.value))
const categoryResources = computed(() => getByCategory(categorySlug.value))

const filters = ref<Partial<SearchFilters>>({ query: '', category: categorySlug.value, tag: '', technology: '' })

watch(categorySlug, (slug) => {
  filters.value = { ...filters.value, category: slug, query: '', tag: '' }
})

const availableTags = computed(() => {
  const tagSet = new Set<string>()
  categoryResources.value.forEach((r) => r.tags.forEach((t) => tagSet.add(t)))
  return Array.from(tagSet).slice(0, 8)
})

const filteredResources = computed(() =>
  search({ ...filters.value, category: categorySlug.value })
)

const relatedCategories = computed(() =>
  getCategoryStats()
    .filter((c) => c.slug !== categorySlug.value)
    .slice(0, 6)
)

function toggleTag(tag: string) {
  filters.value = { ...filters.value, tag: filters.value.tag === tag ? '' : tag }
}

function clearFilters() {
  filters.value = { query: '', category: categorySlug.value, tag: '', technology: '' }
}

useSeoMeta({
  title: computed(() => `${categoryName.value} — DevAtlas Academy`),
  description: computed(
    () =>
      `Browse ${categoryResources.value.length} free ${categoryName.value} lessons and tools in the DevAtlas Academy.`
  ),
  ogTitle: computed(() => `${categoryName.value} — DevAtlas Academy`),
})

definePageMeta({ name: 'category' })
</script>
