<template>
  <div v-if="resource" class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-sm text-ink-500 font-semibold mb-8">
      <NuxtLink to="/" class="hover:text-brand-700 transition-colors duration-150 cursor-pointer">Home</NuxtLink>
      <svg class="w-3.5 h-3.5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <NuxtLink :to="`/category/${resource.categorySlug}`" class="hover:text-brand-700 transition-colors duration-150 cursor-pointer">
        {{ resource.category }}
      </NuxtLink>
      <svg class="w-3.5 h-3.5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-ink-900 truncate max-w-[200px]">{{ resource.title }}</span>
    </nav>

    <!-- Resource card -->
    <div class="clay-card !p-8 sm:!p-10 mb-8">
      <div class="flex items-start gap-5 mb-6">
        <div class="w-16 h-16 rounded-2xl bg-brand-50 shadow-clay-sm flex items-center justify-center overflow-hidden shrink-0">
          <img
            v-if="faviconUrl"
            :src="faviconUrl"
            :alt="`${resource.title} logo`"
            class="w-9 h-9 object-contain"
            @error="faviconUrl = null"
          />
          <svg v-else class="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <div class="min-w-0 flex-1">
          <h1 class="text-3xl font-display font-bold text-ink-950 mb-2 leading-tight">{{ resource.title }}</h1>
          <a
            :href="resource.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand-600 text-sm hover:text-bubblegum-500 transition-colors duration-150 break-all font-semibold cursor-pointer"
          >
            {{ resource.url }}
          </a>
        </div>
      </div>

      <p v-if="resource.description" class="text-ink-700 leading-relaxed text-lg mb-8">
        {{ resource.description }}
      </p>

      <a
        :href="resource.url"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary"
      >
        Start this lesson
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>

    <!-- Metadata -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <div class="clay-card-flat">
        <p class="text-[0.65rem] text-ink-500 uppercase tracking-[0.2em] font-display font-bold mb-2">Track</p>
        <NuxtLink
          :to="`/category/${resource.categorySlug}`"
          class="text-ink-950 font-display font-bold hover:text-brand-700 transition-colors duration-150 cursor-pointer"
        >
          {{ resource.category }}
        </NuxtLink>
      </div>

      <div v-if="resource.technology" class="clay-card-flat">
        <p class="text-[0.65rem] text-ink-500 uppercase tracking-[0.2em] font-display font-bold mb-2">Stack</p>
        <span class="text-ink-950 font-display font-bold">{{ resource.technology }}</span>
      </div>

      <div v-if="resource.subcategory" class="clay-card-flat">
        <p class="text-[0.65rem] text-ink-500 uppercase tracking-[0.2em] font-display font-bold mb-2">Topic</p>
        <span class="text-ink-950 font-display font-bold">{{ resource.subcategory }}</span>
      </div>
    </div>

    <!-- Tags -->
    <div v-if="resource.tags.length > 0" class="mb-12">
      <p class="text-[0.65rem] text-ink-500 uppercase tracking-[0.2em] font-display font-bold mb-3">Skills</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in resource.tags" :key="tag" class="badge">{{ tag }}</span>
      </div>
    </div>

    <!-- More from same category -->
    <div v-if="moreResources.length > 0">
      <h2 class="section-title mb-6">More in {{ resource.category }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <ResourceCard v-for="r in moreResources" :key="r.id" :resource="r" />
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
    <h1 class="section-title text-3xl">Lesson not found</h1>
    <NuxtLink to="/" class="btn-primary">Back to the atlas</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getById, getByCategory } = useResources()

const id = computed(() => route.params.id as string)
const resource = computed(() => getById(id.value))
const faviconUrl = ref<string | null>(null)

watch(
  resource,
  (r) => {
    if (!r) return
    try {
      const { hostname } = new URL(r.url)
      faviconUrl.value = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`
    } catch {
      faviconUrl.value = null
    }
  },
  { immediate: true }
)

const moreResources = computed(() => {
  if (!resource.value) return []
  return getByCategory(resource.value.categorySlug)
    .filter((r) => r.id !== resource.value!.id)
    .slice(0, 4)
})

useSeoMeta({
  title: computed(() => (resource.value ? `${resource.value.title} — DevAtlas Academy` : 'Lesson not found')),
  description: computed(() => resource.value?.description ?? ''),
  ogTitle: computed(() => resource.value?.title ?? ''),
  ogDescription: computed(() => resource.value?.description ?? ''),
})

definePageMeta({ name: 'resource' })
</script>
