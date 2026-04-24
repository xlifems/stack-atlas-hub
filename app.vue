<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <footer class="mt-24 pb-10 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto clay-card-flat flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-brand-600 shadow-clay flex items-center justify-center text-white">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 14l6.16-3.422A12.02 12.02 0 0112 21.5a12.02 12.02 0 01-6.16-10.922L12 14z" />
            </svg>
          </div>
          <div>
            <p class="font-display font-bold text-ink-950">
              Dev<span class="text-gradient-playful">Atlas</span>
              <span class="text-ink-400 font-normal">Academy</span>
            </p>
            <p class="text-ink-500 text-xs">
              {{ meta.totalResources.toLocaleString() }} playful lessons & tools for curious devs
            </p>
          </div>
        </div>
        <p class="text-ink-500 text-xs text-center sm:text-right">
          Data sourced from
          <a href="https://free-for.dev" target="_blank" rel="noopener noreferrer"
            class="text-brand-600 hover:text-bubblegum-500 font-semibold transition-colors duration-150">
            free-for.dev
          </a>
          · Built with Nuxt 3 &amp; a sprinkle of clay
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { meta } = useResources()
</script>
