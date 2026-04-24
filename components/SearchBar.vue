<template>
  <div class="relative">
    <div class="relative flex items-center">
      <svg
        class="absolute left-5 w-5 h-5 text-brand-500 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        ref="inputRef"
        v-model="localQuery"
        type="search"
        :placeholder="placeholder"
        class="input-search pl-14 pr-12 text-base"
        @input="onInput"
        @keydown.escape="clearSearch"
      />
      <button
        v-if="localQuery"
        class="absolute right-4 w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center
               hover:bg-sunset-500 hover:text-white cursor-pointer transition-all duration-150"
        aria-label="Clear search"
        @click="clearSearch"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Active filters -->
    <div v-if="activeFilters.length" class="flex flex-wrap gap-2 mt-3">
      <button
        v-for="filter in activeFilters"
        :key="filter.key"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-semibold
               bg-brand-600 text-white shadow-clay-sm hover:-translate-y-0.5 cursor-pointer transition-all duration-150"
        @click="removeFilter(filter.key)"
      >
        <span>{{ filter.label }}</span>
        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button
        class="text-xs text-ink-500 hover:text-brand-700 font-display font-semibold transition-colors duration-150 px-2 cursor-pointer"
        @click="clearAllFilters"
      >
        Clear all
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SearchFilters } from '~/types/resource'

const props = withDefaults(
  defineProps<{
    modelValue: Partial<SearchFilters>
    placeholder?: string
  }>(),
  { placeholder: 'Search lessons, tools, services…' }
)

const emit = defineEmits<{
  'update:modelValue': [value: Partial<SearchFilters>]
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const localQuery = ref(props.modelValue.query ?? '')

const activeFilters = computed(() => {
  const filters: Array<{ key: string; label: string }> = []
  if (props.modelValue.category)
    filters.push({ key: 'category', label: `Track: ${props.modelValue.category}` })
  if (props.modelValue.tag) filters.push({ key: 'tag', label: `Skill: ${props.modelValue.tag}` })
  if (props.modelValue.technology)
    filters.push({ key: 'technology', label: `Stack: ${props.modelValue.technology}` })
  return filters
})

watch(
  () => props.modelValue.query,
  (v) => {
    localQuery.value = v ?? ''
  }
)

function onInput() {
  emit('update:modelValue', { ...props.modelValue, query: localQuery.value })
}

function clearSearch() {
  localQuery.value = ''
  emit('update:modelValue', { ...props.modelValue, query: '' })
}

function removeFilter(key: string) {
  emit('update:modelValue', { ...props.modelValue, [key]: '' })
}

function clearAllFilters() {
  localQuery.value = ''
  emit('update:modelValue', { query: '', category: '', tag: '', technology: '' })
}

function focus() {
  inputRef.value?.focus()
}

defineExpose({ focus })
</script>
