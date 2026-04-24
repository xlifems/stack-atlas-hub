<template>
  <div>
    <!-- ===================== HERO ===================== -->
    <section class="relative overflow-hidden pt-14 pb-20 px-4 sm:px-6 lg:px-8">
      <!-- Floating decorative blobs -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          class="absolute top-16 left-[8%] w-24 h-24 rounded-[2rem] bg-bubblegum-300 shadow-clay-pink animate-float" />
        <div
          class="absolute top-40 right-[10%] w-20 h-20 rounded-full bg-sunshine-300 shadow-clay-sunshine animate-float-delayed" />
        <div
          class="absolute bottom-10 left-[18%] w-16 h-16 rounded-3xl bg-mint-300 shadow-clay-mint animate-float-delayed" />
        <div class="absolute bottom-24 right-[22%] w-14 h-14 rounded-2xl bg-sky-300 shadow-clay-sky animate-float" />
      </div>

      <div class="relative max-w-5xl mx-auto text-center">
        <!-- Eyebrow -->
        <div class="inline-flex items-center gap-2 mb-6 animate-slide-up">
          <span class="eyebrow">
            <span class="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
            {{ meta.totalResources.toLocaleString() }} free lessons · Always $0
          </span>
        </div>

        <h1
          class="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6 animate-slide-up">
          Learn to build <span class="text-gradient-playful">anything</span><br />
          with playful dev tools
        </h1>

        <p class="text-ink-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-slide-up">
          A friendly catalog of free tools, APIs and services across
          <strong class="text-ink-950">{{ meta.totalCategories }}</strong> learning tracks —
          curated for curious developers and eager students.
        </p>

        <!-- Search -->
        <div id="search" class="max-w-2xl mx-auto animate-slide-up">
          <SearchBar ref="searchBarRef" v-model="filters" placeholder="What do you want to learn today?"
            class="text-left" />
        </div>

        <!-- CTA row -->
        <div class="flex flex-wrap items-center justify-center gap-3 mt-8">
          <NuxtLink to="/categories" class="btn-primary">
            Start learning free
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
          <a href="#enroll" class="btn-ghost">Watch the demo</a>
        </div>

        <!-- Trust strip -->
        <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-sm text-ink-500">
          <span class="flex items-center gap-2 font-semibold">
            <span class="w-8 h-8 rounded-xl bg-white shadow-clay-sm flex items-center justify-center text-sunshine-500">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
              </svg>
            </span>
            4.9/5 from {{ (meta.totalResources / 7).toFixed(0) }}+ learners
          </span>
          <span class="flex items-center gap-2 font-semibold">
            <span class="w-8 h-8 rounded-xl bg-white shadow-clay-sm flex items-center justify-center text-mint-500">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            100% free tier forever
          </span>
          <span class="flex items-center gap-2 font-semibold">
            <span class="w-8 h-8 rounded-xl bg-white shadow-clay-sm flex items-center justify-center text-brand-600">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            No credit card required
          </span>
        </div>
      </div>
    </section>

    <!-- ===================== SEARCH RESULTS ===================== -->
    <section v-if="isSearching" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div class="flex items-center justify-between mb-6">
        <h2 class="section-title">Search results</h2>
        <button class="btn-ghost text-xs" @click="clearSearch">Clear search</button>
      </div>
      <ResourceGrid :resources="searchResults" :total-count="meta.totalResources" />
    </section>

    <!-- ===================== NORMAL FLOW ===================== -->
    <template v-else>
      <!-- ========== COURSE CATALOG PREVIEW ========== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span class="eyebrow mb-3">
              <svg class="w-3.5 h-3.5 text-sunset-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
              </svg>
              Course Catalog
            </span>
            <h2 class="section-title mt-3">Pick a learning track</h2>
            <p class="section-subtitle mt-2">
              {{ meta.totalCategories }} playful tracks, from cloud hosting to machine learning.
            </p>
          </div>
          <NuxtLink to="/categories" class="btn-ghost self-start sm:self-auto">
            View all {{ meta.totalCategories }}
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <CategoryCard v-for="cat in topCategories" :key="cat.slug" :category="cat" />
        </div>
      </section>

      <!-- ========== PROGRESS TRACKING DEMO ========== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="clay-card !p-0 overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-0">
            <!-- Left: copy -->
            <div class="lg:col-span-2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <span class="eyebrow self-start mb-4">
                <svg class="w-3.5 h-3.5 text-mint-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Track your growth
              </span>
              <h2 class="section-title mb-4">Stay curious. <br />Watch your skills bloom.</h2>
              <p class="text-ink-600 leading-relaxed mb-6">
                Every lesson you open, every tool you try, every tag you explore — your progress
                lights up. No pressure, just a friendly nudge forward.
              </p>
              <ul class="space-y-3 text-sm text-ink-700 mb-8">
                <li class="flex items-start gap-3">
                  <span
                    class="w-6 h-6 rounded-lg bg-mint-100 text-mint-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Streaks &amp; milestones that celebrate small wins</span>
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="w-6 h-6 rounded-lg bg-mint-100 text-mint-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Personalized next steps across every track</span>
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="w-6 h-6 rounded-lg bg-mint-100 text-mint-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Badges you can actually brag about</span>
                </li>
              </ul>
              <NuxtLink to="/categories" class="btn-secondary self-start">
                Explore all tracks
              </NuxtLink>
            </div>

            <!-- Right: progress dashboard mock -->
            <div
              class="lg:col-span-3 bg-gradient-to-br from-brand-50 via-bubblegum-50 to-sunshine-50 dotted p-8 sm:p-10 lg:p-12">
              <div class="clay-card-flat !p-6 max-w-md mx-auto">
                <!-- Header -->
                <div class="flex items-center justify-between mb-5">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 rounded-2xl bg-brand-600 text-white shadow-clay flex items-center justify-center font-display font-bold">
                      AK
                    </div>
                    <div>
                      <p class="font-display font-bold text-ink-950 text-sm">Aki's atlas</p>
                      <p class="text-xs text-ink-500">Level 7 · 12-day streak</p>
                    </div>
                  </div>
                  <span class="badge-mint">+320 XP</span>
                </div>

                <!-- Progress bars -->
                <div class="space-y-4">
                  <div v-for="(track, i) in progressDemo" :key="i" class="flex flex-col gap-1.5">
                    <div class="flex items-center justify-between text-xs">
                      <span class="flex items-center gap-2 font-display font-semibold text-ink-900">
                        <span class="w-6 h-6 rounded-lg flex items-center justify-center text-white shadow-clay-sm"
                          :class="track.bg">
                          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" :d="track.path" />
                          </svg>
                        </span>
                        {{ track.name }}
                      </span>
                      <span class="text-ink-500 font-semibold">{{ track.value }}%</span>
                    </div>
                    <div class="h-3 w-full rounded-full bg-brand-100 overflow-hidden shadow-clay-inset">
                      <div class="h-full rounded-full animate-progress-fill" :class="track.bg"
                        :style="{ ['--progress' as string]: track.value + '%', width: track.value + '%' }" />
                    </div>
                  </div>
                </div>

                <!-- Stats -->
                <div class="mt-6 grid grid-cols-3 gap-2">
                  <div class="rounded-2xl bg-brand-50 p-3 text-center shadow-clay-inset">
                    <p class="font-display font-bold text-xl text-brand-700">24</p>
                    <p class="text-[0.65rem] text-ink-500 font-semibold uppercase tracking-wider">Lessons</p>
                  </div>
                  <div class="rounded-2xl bg-bubblegum-50 p-3 text-center shadow-clay-inset">
                    <p class="font-display font-bold text-xl text-bubblegum-600">8</p>
                    <p class="text-[0.65rem] text-ink-500 font-semibold uppercase tracking-wider">Badges</p>
                  </div>
                  <div class="rounded-2xl bg-sunset-50 p-3 text-center shadow-clay-inset">
                    <p class="font-display font-bold text-xl text-sunset-600">3</p>
                    <p class="text-[0.65rem] text-ink-500 font-semibold uppercase tracking-wider">Tracks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== FEATURED RESOURCES ========== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span class="eyebrow mb-3">
              <svg class="w-3.5 h-3.5 text-bubblegum-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              This week's picks
            </span>
            <h2 class="section-title mt-3">Featured lessons</h2>
            <p class="section-subtitle mt-2">Hand-picked tools worth exploring right now.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <ResourceCard v-for="resource in featuredResources" :key="resource.id" :resource="resource" />
        </div>
      </section>

      <!-- ========== TESTIMONIALS ========== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center mb-12">
          <span class="eyebrow">
            <svg class="w-3.5 h-3.5 text-sunshine-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
            </svg>
            Loved by learners
          </span>
          <h2 class="section-title mt-4">Join a happy crew of builders</h2>
          <p class="section-subtitle mt-3 max-w-xl mx-auto">
            From first-time coders to senior engineers, here's what students are saying about
            the DevAtlas Academy vibe.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <article v-for="(t, i) in testimonials" :key="i" class="clay-card flex flex-col gap-4"
            :class="i === 1 ? 'md:-translate-y-4' : ''">
            <!-- Stars -->
            <div class="flex gap-1 text-sunshine-400">
              <svg v-for="s in 5" :key="s" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
              </svg>
            </div>
            <p class="text-ink-800 leading-relaxed font-medium">
              &ldquo;{{ t.quote }}&rdquo;
            </p>
            <div class="flex items-center gap-3 pt-4 border-t border-brand-100">
              <div
                class="w-11 h-11 rounded-2xl flex items-center justify-center font-display font-bold text-white shadow-clay-sm"
                :class="t.bg">
                {{ t.initials }}
              </div>
              <div class="min-w-0">
                <p class="font-display font-bold text-ink-950 text-sm truncate">{{ t.name }}</p>
                <p class="text-xs text-ink-500 truncate">{{ t.role }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- ========== CATEGORY SECTIONS ========== -->
      <section v-for="cat in categorySections" :key="cat.slug" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 class="section-title">{{ cat.name }}</h2>
            <p class="section-subtitle mt-1">{{ cat.resources.length }} lessons in this track</p>
          </div>
          <NuxtLink :to="`/category/${cat.slug}`" class="btn-ghost text-xs">
            View track
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <ResourceCard v-for="resource in cat.resources.slice(0, 8)" :key="resource.id" :resource="resource" />
        </div>
      </section>

      <!-- ========== ENROLLMENT CTA ========== -->
      <section id="enroll" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-14 lg:p-20 text-center
                 bg-gradient-to-br from-brand-600 via-brand-500 to-bubblegum-500 shadow-clay-lg">
          <!-- Decorative shapes -->
          <div
            class="absolute -top-8 -left-8 w-40 h-40 rounded-[2rem] bg-sunshine-300 opacity-50 rotate-12 animate-float"
            aria-hidden="true" />
          <div
            class="absolute -bottom-10 -right-6 w-48 h-48 rounded-full bg-sunset-400 opacity-50 animate-float-delayed"
            aria-hidden="true" />
          <div class="absolute top-10 right-20 w-20 h-20 rounded-3xl bg-mint-300 opacity-60 -rotate-6 animate-wiggle"
            aria-hidden="true" />

          <div class="relative">
            <span
              class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 text-brand-700 font-display font-semibold text-xs uppercase tracking-wider shadow-clay-sm mb-6">
              <span class="w-2 h-2 rounded-full bg-sunset-500 animate-pulse" />
              Open enrollment
            </span>
            <h2
              class="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-5">
              Ready to join the fun?
            </h2>
            <p class="text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Grab your free seat, pick a track, and start building today. No fees, no fluff —
              just {{ meta.totalResources.toLocaleString() }} lessons of pure, playful learning.
            </p>

            <div class="flex flex-wrap items-center justify-center gap-3 mb-8">
              <NuxtLink to="/categories"
                class="btn-chunky bg-white text-brand-700 shadow-clay hover:-translate-y-1 focus-visible:ring-white text-base px-7 py-3.5">
                Enroll for free
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
              <a href="https://github.com/xlifems/stack-atlas-hub" target="_blank" rel="noopener noreferrer"
                class="btn-chunky bg-white/10 border-2 border-white/40 text-white shadow-clay-sm hover:bg-white/20 focus-visible:ring-white text-base px-7 py-3.5">
                Browse the syllabus
              </a>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-6 text-white/85 text-sm font-semibold">
              <span class="inline-flex items-center gap-2">
                <svg class="w-4 h-4 text-sunshine-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Free forever
              </span>
              <span class="inline-flex items-center gap-2">
                <svg class="w-4 h-4 text-sunshine-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Unlock {{ meta.totalCategories }} tracks
              </span>
              <span class="inline-flex items-center gap-2">
                <svg class="w-4 h-4 text-sunshine-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Cancel anytime (it's already free!)
              </span>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { SearchFilters } from '~/types/resource'

useSeoMeta({
  title: 'DevAtlas Academy — Playful lessons for curious developers',
  description:
    'A friendly catalog of free developer tools, APIs and services organized as playful learning tracks. Learn anything, build everything.',
  ogTitle: 'DevAtlas Academy — Playful lessons for curious developers',
  ogDescription: 'Free developer tools, APIs, and services across playful learning tracks.',
})

const { resources, meta, getCategoryStats, getByCategory, search } = useResources()

const filters = ref<Partial<SearchFilters>>({ query: '', category: '', tag: '', technology: '' })

const isSearching = computed(
  () => !!(filters.value.query || filters.value.category || filters.value.tag || filters.value.technology)
)

const searchResults = computed(() => (isSearching.value ? search(filters.value) : []))

const topCategories = computed(() => getCategoryStats().slice(0, 12))

const featuredResources = computed(() => resources.value.slice(0, 8))

const categorySections = computed(() =>
  getCategoryStats()
    .slice(0, 4)
    .map((cat) => ({
      ...cat,
      resources: getByCategory(cat.slug),
    }))
)

// Progress tracking demo data
const progressDemo = [
  {
    name: 'Cloud & Hosting',
    value: 82,
    bg: 'bg-brand-600',
    path: 'M3 15a4 4 0 014-4 5 5 0 019.584-1.548A4.5 4.5 0 0118.5 18H7a4 4 0 01-4-3z',
  },
  {
    name: 'APIs & Data',
    value: 64,
    bg: 'bg-bubblegum-500',
    path: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    name: 'DevOps & CI',
    value: 45,
    bg: 'bg-sunset-500',
    path: 'M4.5 16.5l3 3m6-14l4.5 4.5M14 10l-4 4M9 15l-3 3m-.5-7.5l6-6a8 8 0 018 8l-6 6-8-8z',
  },
  {
    name: 'AI & ML',
    value: 28,
    bg: 'bg-mint-500',
    path: 'M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8',
  },
]

// Testimonials
const testimonials = [
  {
    quote:
      "I picked up three new cloud tools in a weekend. The tracks feel like Saturday morning cartoons — in the best way.",
    name: 'Sana Patel',
    role: 'Frontend developer · Berlin',
    initials: 'SP',
    bg: 'bg-brand-600',
  },
  {
    quote:
      "Finally a resource list that doesn't feel like homework. The progress demo hooked my team instantly.",
    name: 'Diego Ramírez',
    role: 'Tech lead @ Mintly',
    initials: 'DR',
    bg: 'bg-bubblegum-500',
  },
  {
    quote:
      "I went from zero to shipping my first API in a week. The catalog is gold and it's free. Unreal.",
    name: 'Lena Okafor',
    role: 'CS student · Lagos',
    initials: 'LO',
    bg: 'bg-sunset-500',
  },
]

function clearSearch() {
  filters.value = { query: '', category: '', tag: '', technology: '' }
}

// Global keyboard shortcut: press "/" to focus search
onMounted(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === '/' && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
      e.preventDefault()
      document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })
    }
  }
  document.addEventListener('keydown', handleKey)
  onUnmounted(() => document.removeEventListener('keydown', handleKey))
})
</script>
