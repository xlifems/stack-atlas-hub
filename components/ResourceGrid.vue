<template>
  <div>
    <!-- Empty state -->
    <div v-if="resources.length === 0" class="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <div class="w-20 h-20 rounded-[2rem] bg-white shadow-clay flex items-center justify-center text-brand-600 animate-bounce-soft">
        <svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="7" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.3-4.3" />
        </svg>
      </div>
      <div>
        <p class="font-display font-bold text-xl text-ink-950">No lessons found yet</p>
        <p class="text-ink-500 text-sm mt-1">Try tweaking your search or clearing a filter</p>
      </div>
      <slot name="empty-action" />
    </div>

    <!-- Grid -->
    <template v-else>
      <p class="text-ink-500 text-sm mb-5 font-semibold">
        Showing <span class="text-ink-950 font-bold">{{ resources.length }}</span>
        lesson{{ resources.length !== 1 ? 's' : '' }}
        <template v-if="totalCount && resources.length < totalCount"> of {{ totalCount }}</template>
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <ResourceCard
          v-for="resource in visibleResources"
          :key="resource.id"
          :resource="resource"
          class="animate-fade-in"
        />
      </div>

      <!-- Load more -->
      <div v-if="hasMore" class="flex justify-center mt-10">
        <button class="btn-ghost" @click="loadMore">
          Load more lessons
          <span class="text-ink-400 text-xs font-semibold">
            ({{ resources.length - page * pageSize }} remaining)
          </span>
        </button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Resource } from '~/types/resource'

const props = withDefaults(
  defineProps<{
    resources: Resource[]
    totalCount?: number
    pageSize?: number
  }>(),
  { pageSize: 24 }
)

const page = ref(1)

watch(
  () => props.resources,
  () => { page.value = 1 }
)

const visibleResources = computed(() => props.resources.slice(0, page.value * props.pageSize))
const hasMore = computed(() => visibleResources.value.length < props.resources.length)

function loadMore() {
  page.value++
}
</script>
