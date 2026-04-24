export interface Resource {
  id: string
  title: string
  description: string
  url: string
  category: string
  categorySlug: string
  subcategory?: string
  tags: string[]
  technology?: string
  source: string
}

export interface ResourceStore {
  meta: {
    generated: string
    totalResources: number
    totalCategories: number
    sources: string[]
  }
  categories: string[]
  tags: string[]
  resources: Resource[]
}

export interface SearchFilters {
  query: string
  category: string
  tag: string
  technology: string
}
