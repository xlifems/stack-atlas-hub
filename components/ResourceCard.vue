<template>
  <article class="clay-tile group flex flex-col gap-3 h-full cursor-pointer">
    <!-- Header -->
    <div class="flex items-start justify-between gap-3">
      <div class="flex items-center gap-3 min-w-0">
        <div
          class="w-10 h-10 shrink-0 rounded-2xl bg-brand-50 flex items-center justify-center shadow-clay-sm overflow-hidden"
        >
          <img
            v-if="faviconUrl"
            :src="faviconUrl"
            :alt="`${resource.title} logo`"
            class="w-5 h-5 object-contain"
            @error="faviconUrl = null"
          />
          <svg v-else class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <h3 class="font-display font-bold text-ink-950 text-base leading-tight truncate group-hover:text-brand-700 transition-colors duration-200">
          {{ resource.title }}
        </h3>
      </div>
      <a
        :href="resource.url"
        target="_blank"
        rel="noopener noreferrer"
        class="shrink-0 w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 cursor-pointer
               hover:bg-sunset-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200 shadow-clay-sm"
        :aria-label="`Visit ${resource.title}`"
        @click.stop
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>

    <!-- Description -->
    <p v-if="resource.description" class="text-ink-600 text-sm leading-relaxed line-clamp-2 flex-1">
      {{ resource.description }}
    </p>
    <div v-else class="flex-1" />

    <!-- Footer -->
    <div class="flex items-center justify-between gap-2 pt-3 border-t border-brand-100">
      <NuxtLink
        :to="`/category/${resource.categorySlug}`"
        class="badge truncate max-w-[160px] cursor-pointer hover:bg-brand-200 transition-colors duration-200"
        @click.stop
      >
        {{ resource.category }}
      </NuxtLink>

      <div v-if="resource.technology" class="badge-sunset shrink-0">
        {{ resource.technology }}
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Resource } from '~/types/resource'

const props = defineProps<{ resource: Resource }>()

const faviconUrl = ref<string | null>(null)

onMounted(() => {
  try {
    const { hostname } = new URL(props.resource.url)
    faviconUrl.value = `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`
  } catch {
    faviconUrl.value = null
  }
})
</script>
