<template>
  <header class="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 pt-4">
    <div class="max-w-7xl mx-auto bg-white/85 backdrop-blur-xl rounded-[2rem] transition-shadow duration-300"
      :class="scrolled ? 'shadow-clay' : 'shadow-clay-sm'">
      <div class="flex items-center justify-between h-16 px-4 sm:px-6">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 group">
          <div class="w-10 h-10 rounded-2xl bg-brand-600 flex items-center justify-center shadow-clay
                   group-hover:-translate-y-0.5 group-hover:rotate-[-6deg] transition-all duration-200">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 14l6.16-3.422A12.02 12.02 0 0112 21.5a12.02 12.02 0 01-6.16-10.922L12 14z" />
            </svg>
          </div>
          <div class="leading-tight">
            <span class="block font-display font-bold text-ink-950 text-lg tracking-tight">
              Dev<span class="text-gradient-playful">Atlas</span>
            </span>
            <span class="block text-ink-400 text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
              Academy
            </span>
          </div>
        </NuxtLink>

        <!-- Center search (desktop) -->
        <div class="hidden md:flex flex-1 max-w-md mx-8">
          <NuxtLink to="/#search" class="w-full flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-brand-50
                   text-ink-500 text-sm hover:-translate-y-0.5 shadow-clay-inset
                   transition-all duration-200 cursor-text font-sans">
            <svg class="w-4 h-4 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search lessons &amp; tools…</span>
            <kbd
              class="ml-auto text-[0.65rem] px-1.5 py-0.5 rounded-md bg-white text-brand-700 font-mono font-semibold shadow-clay-sm">/</kbd>
          </NuxtLink>
        </div>

        <!-- Nav links -->
        <nav class="flex items-center gap-2">
          <NuxtLink to="/categories" class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-display font-semibold
                   text-ink-700 hover:text-brand-700 hover:bg-brand-50 transition-colors duration-200 cursor-pointer">
            Catalog
          </NuxtLink>
          <a href="https://github.com/xlifems/stack-atlas-hub" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl text-sm font-display font-semibold
                   text-ink-700 hover:text-brand-700 hover:bg-brand-50 transition-colors duration-200 cursor-pointer"
            aria-label="View source on GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <NuxtLink to="/#enroll"
            class="btn-chunky bg-sunset-500 text-white shadow-clay-orange focus-visible:ring-sunset-300">
            Enroll free
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 10
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
