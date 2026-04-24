<template>
  <NuxtLink
    :to="`/category/${category.slug}`"
    class="group clay-tile flex items-center justify-between cursor-pointer"
  >
    <div class="flex items-center gap-3 min-w-0">
      <div
        class="blob-icon w-12 h-12 text-white group-hover:rotate-[-6deg] transition-transform duration-200"
        :class="variant.iconBg"
      >
        <component :is="variant.icon" class="w-6 h-6" />
      </div>
      <div class="min-w-0">
        <p class="text-sm font-display font-bold text-ink-950 truncate group-hover:text-brand-700 transition-colors duration-200">
          {{ category.name }}
        </p>
        <p class="text-xs text-ink-500 font-semibold">
          {{ category.count }} {{ category.count === 1 ? 'lesson' : 'lessons' }}
        </p>
      </div>
    </div>
    <div
      class="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-500
             group-hover:bg-brand-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 shrink-0"
    >
      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { h } from 'vue'

const props = defineProps<{
  category: { name: string; slug: string; count: number }
}>()

// SVG icon components (Heroicons-inspired, 24x24 viewBox)
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2.2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
} as const

const IconCloud = () => h('svg', iconProps, [h('path', { d: 'M3 15a4 4 0 014-4 5 5 0 019.584-1.548A4.5 4.5 0 0118.5 18H7a4 4 0 01-4-3z' })])
const IconCode = () => h('svg', iconProps, [h('path', { d: 'M8 18l-5-6 5-6M16 6l5 6-5 6M14 4l-4 16' })])
const IconPlug = () => h('svg', iconProps, [h('path', { d: 'M13 10V3L4 14h7v7l9-11h-7z' })])
const IconTool = () => h('svg', iconProps, [h('path', { d: 'M14.7 6.3a3 3 0 104.2 4.2l-8.5 8.5-4.2-4.2 8.5-8.5z' }), h('path', { d: 'M3 21l4.5-1.5' })])
const IconBeaker = () => h('svg', iconProps, [h('path', { d: 'M9 3v6l-5 9a3 3 0 002.6 4.5h10.8A3 3 0 0020 18l-5-9V3M8 3h8M8 13h8' })])
const IconShield = () => h('svg', iconProps, [h('path', { d: 'M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z' }), h('path', { d: 'M9 12l2 2 4-4' })])
const IconDb = () => h('svg', iconProps, [h('ellipse', { cx: 12, cy: 5, rx: 8, ry: 3 }), h('path', { d: 'M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6' })])
const IconRocket = () => h('svg', iconProps, [h('path', { d: 'M4.5 16.5l3 3m6-14l4.5 4.5M14 10l-4 4M9 15l-3 3m-.5-7.5l6-6a8 8 0 018 8l-6 6-8-8z' })])
const IconChart = () => h('svg', iconProps, [h('path', { d: 'M3 3v18h18M7 15l4-4 4 3 5-7' })])
const IconMail = () => h('svg', iconProps, [h('rect', { x: 3, y: 5, width: 18, height: 14, rx: 2 }), h('path', { d: 'M3 7l9 6 9-6' })])
const IconBolt = () => h('svg', iconProps, [h('path', { d: 'M13 3L4 14h7l-1 7 9-11h-7l1-7z' })])
const IconCard = () => h('svg', iconProps, [h('rect', { x: 2, y: 5, width: 20, height: 14, rx: 3 }), h('path', { d: 'M2 10h20M6 15h4' })])
const IconChat = () => h('svg', iconProps, [h('path', { d: 'M21 12a8 8 0 01-11.3 7.3L3 21l1.7-6.7A8 8 0 1121 12z' })])
const IconPhone = () => h('svg', iconProps, [h('rect', { x: 7, y: 2, width: 10, height: 20, rx: 2 }), h('path', { d: 'M11 18h2' })])
const IconCog = () => h('svg', iconProps, [h('circle', { cx: 12, cy: 12, r: 3 }), h('path', { d: 'M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.6 1.6 0 00-1-1.5 1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H3a2 2 0 010-4h.1a1.6 1.6 0 001.5-1 1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H9a1.6 1.6 0 001-1.5V3a2 2 0 014 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V9a1.6 1.6 0 001.5 1H21a2 2 0 010 4h-.1a1.6 1.6 0 00-1.5 1z' })])
const IconGlobe = () => h('svg', iconProps, [h('circle', { cx: 12, cy: 12, r: 9 }), h('path', { d: 'M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18' })])
const IconSave = () => h('svg', iconProps, [h('path', { d: 'M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z' }), h('path', { d: 'M17 21v-8H7v8M7 3v5h8' })])
const IconSpark = () => h('svg', iconProps, [h('path', { d: 'M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8' })])
const IconActivity = () => h('svg', iconProps, [h('path', { d: 'M3 12h4l3-9 4 18 3-9h4' })])
const IconPalette = () => h('svg', iconProps, [h('path', { d: 'M12 3a9 9 0 100 18c1.7 0 2-1.6 1.3-2.7-.8-1.3.1-3.3 1.7-3.3H18a3 3 0 003-3A9 9 0 0012 3z' }), h('circle', { cx: 7.5, cy: 10.5, r: 1 }), h('circle', { cx: 12, cy: 7.5, r: 1 }), h('circle', { cx: 16.5, cy: 10.5, r: 1 })])
const IconBook = () => h('svg', iconProps, [h('path', { d: 'M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4V4zM20 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8V4z' })])
const IconTerminal = () => h('svg', iconProps, [h('rect', { x: 3, y: 4, width: 18, height: 16, rx: 2 }), h('path', { d: 'M7 9l3 3-3 3M13 15h4' })])
const IconSearch = () => h('svg', iconProps, [h('circle', { cx: 11, cy: 11, r: 7 }), h('path', { d: 'M21 21l-4.3-4.3' })])
const IconSparkles = () => h('svg', iconProps, [h('path', { d: 'M5 3l1.5 3.5L10 8l-3.5 1.5L5 13l-1.5-3.5L0 8l3.5-1.5L5 3zM17 11l1 2.5L20.5 15l-2.5 1L17 18l-1-2-2.5-1L16 13.5 17 11zM14 3l.8 2 2 .8-2 .8L14 8.5l-.8-2-2-.8 2-.8L14 3z' })])

const keyToIcon: Record<string, ReturnType<typeof h>> = {
  cloud: IconCloud,
  source: IconCode,
  code: IconCode,
  apis: IconPlug,
  api: IconPlug,
  tools: IconTool,
  testing: IconBeaker,
  security: IconShield,
  database: IconDb,
  hosting: IconRocket,
  monitoring: IconChart,
  email: IconMail,
  cdn: IconBolt,
  payment: IconCard,
  messaging: IconChat,
  mobile: IconPhone,
  ci: IconCog,
  dns: IconGlobe,
  storage: IconSave,
  ai: IconSparkles,
  ml: IconSparkles,
  analytics: IconActivity,
  design: IconPalette,
  documentation: IconBook,
  docs: IconBook,
  ide: IconTerminal,
  search: IconSearch,
  crm: IconSpark,
}

function pickIcon(name: string) {
  const lower = name.toLowerCase()
  for (const [key, icon] of Object.entries(keyToIcon)) {
    if (lower.includes(key)) return icon
  }
  return IconSparkles
}

const palette = [
  { iconBg: 'bg-brand-600 shadow-clay' },
  { iconBg: 'bg-bubblegum-500 shadow-clay-pink' },
  { iconBg: 'bg-sunset-500 shadow-clay-orange' },
  { iconBg: 'bg-mint-500 shadow-clay-mint' },
  { iconBg: 'bg-sunshine-400 shadow-clay-sunshine' },
  { iconBg: 'bg-sky-500 shadow-clay-sky' },
]

function hash(str: string) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  return h
}

const variant = computed(() => {
  const idx = hash(props.category.slug) % palette.length
  return { ...palette[idx], icon: pickIcon(props.category.name) }
})
</script>
