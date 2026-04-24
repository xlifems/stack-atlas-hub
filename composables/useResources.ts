import type { Resource, ResourceStore, SearchFilters } from '~/types/resource'
import resourceData from '~/server/data/resources.json'

const store = resourceData as ResourceStore

export function useResources() {
  const resources = computed(() => store.resources)
  const categories = computed(() => store.categories)
  const tags = computed(() => store.tags)
  const meta = computed(() => store.meta)

  function getByCategory(categorySlug: string): Resource[] {
    return store.resources.filter((r) => r.categorySlug === categorySlug)
  }

  function getById(id: string): Resource | undefined {
    return store.resources.find((r) => r.id === id)
  }

  function getByTechnology(tech: string): Resource[] {
    return store.resources.filter((r) => r.technology?.toLowerCase() === tech.toLowerCase())
  }

  function getCategorySlugs(): string[] {
    return [...new Set(store.resources.map((r) => r.categorySlug))]
  }

  function getCategoryName(slug: string): string {
    return store.resources.find((r) => r.categorySlug === slug)?.category ?? slug
  }

  function getTechnologies(): string[] {
    return [...new Set(store.resources.map((r) => r.technology).filter(Boolean))] as string[]
  }

  function getCategoryStats(): Array<{ name: string; slug: string; count: number }> {
    const map = new Map<string, { name: string; count: number }>()
    for (const r of store.resources) {
      const existing = map.get(r.categorySlug)
      if (existing) {
        existing.count++
      } else {
        map.set(r.categorySlug, { name: r.category, count: 1 })
      }
    }
    return Array.from(map.entries())
      .map(([slug, { name, count }]) => ({ slug, name, count }))
      .sort((a, b) => b.count - a.count)
  }

  function search(filters: Partial<SearchFilters>): Resource[] {
    const { query = '', category = '', tag = '', technology = '' } = filters
    const q = query.toLowerCase().trim()

    return store.resources.filter((r) => {
      if (category && r.categorySlug !== category) return false
      if (tag && !r.tags.includes(tag)) return false
      if (technology && r.technology?.toLowerCase() !== technology.toLowerCase()) return false
      if (!q) return true

      return (
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.tags.some((t) => t.includes(q))
      )
    })
  }

  return {
    resources,
    categories,
    tags,
    meta,
    getByCategory,
    getById,
    getByTechnology,
    getCategorySlugs,
    getCategoryName,
    getTechnologies,
    getCategoryStats,
    search,
  }
}
