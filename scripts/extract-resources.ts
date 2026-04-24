/**
 * Build-time HTML → JSON extraction pipeline.
 * Reads *.html files from ../data-source, parses with cheerio,
 * normalises into the Resource schema, writes server/data/resources.json.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as cheerio from 'cheerio'
import type { AnyNode } from 'domhandler'

// ─── Schema ──────────────────────────────────────────────────────────────────

interface Resource {
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

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function uniqueId(title: string, url: string): string {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, '')
    return slugify(`${hostname}-${title}`.substring(0, 80))
  } catch {
    return slugify(title.substring(0, 80))
  }
}

function inferTags(category: string, subcategory: string | undefined, title: string, description: string): string[] {
  const corpus = [category, subcategory ?? '', title, description].join(' ').toLowerCase()
  const tagMap: Record<string, string[]> = {
    cloud: ['cloud', 'aws', 'gcp', 'azure', 'serverless', 'hosting', 'iaas', 'paas'],
    database: ['database', 'db', 'sql', 'nosql', 'postgres', 'mysql', 'mongo', 'redis', 'storage'],
    devtools: ['ci', 'cd', 'pipeline', 'build', 'deploy', 'devops', 'testing', 'monitor'],
    api: ['api', 'rest', 'graphql', 'webhook', 'sdk'],
    security: ['security', 'auth', 'ssl', 'tls', 'certificate', 'oauth', 'sso'],
    ai: ['ai', 'ml', 'machine learning', 'llm', 'openai', 'nlp'],
    frontend: ['frontend', 'css', 'design', 'ui', 'ux', 'component'],
    backend: ['backend', 'server', 'node', 'python', 'go', 'java', 'php'],
    mobile: ['mobile', 'ios', 'android', 'react native', 'flutter'],
    saas: ['saas', 'service', 'platform', 'tool'],
    free: ['free', 'open source', 'oss', 'community'],
  }

  const matched = new Set<string>()
  for (const [tag, keywords] of Object.entries(tagMap)) {
    if (keywords.some((kw) => corpus.includes(kw))) matched.add(tag)
  }
  return Array.from(matched)
}

function inferTechnology(title: string, url: string, category: string): string | undefined {
  const corpus = [title, url, category].join(' ').toLowerCase()
  const techMap: Record<string, string[]> = {
    AWS: ['aws', 'amazon web services'],
    GCP: ['google cloud', 'gcp', 'firebase'],
    Azure: ['azure', 'microsoft'],
    GitHub: ['github'],
    GitLab: ['gitlab'],
    Vercel: ['vercel'],
    Netlify: ['netlify'],
    Heroku: ['heroku'],
    Cloudflare: ['cloudflare'],
    Docker: ['docker', 'container'],
    Kubernetes: ['kubernetes', 'k8s'],
    PostgreSQL: ['postgres', 'postgresql'],
    MongoDB: ['mongodb', 'mongo'],
    Redis: ['redis'],
    Stripe: ['stripe'],
    Twilio: ['twilio'],
    SendGrid: ['sendgrid'],
    Supabase: ['supabase'],
    PlanetScale: ['planetscale'],
    Render: ['render.com'],
    Railway: ['railway'],
    Fly: ['fly.io', 'fly io'],
  }

  for (const [tech, keywords] of Object.entries(techMap)) {
    if (keywords.some((kw) => corpus.includes(kw))) return tech
  }
  return undefined
}

// ─── Core Parser ─────────────────────────────────────────────────────────────

function parseHtmlFile(filePath: string, sourceName: string): Resource[] {
  const html = fs.readFileSync(filePath, 'utf-8')
  const $ = cheerio.load(html)
  const resources: Resource[] = []
  const seenIds = new Set<string>()

  const mainContent = $('#main, .markdown-section, article').first()

  // Use body as fallback — $.root() returns Document type which mismatches find() typings
  const scope = mainContent.length ? '#main, .markdown-section, article' : 'body'

  let currentCategory = 'General'
  let currentCategorySlug = 'general'
  let currentSubcategory: string | undefined

  $(`${scope}`).find('h2, h3, ul').each((_i, el) => {
    const tagName = (el as AnyNode & { tagName?: string }).tagName?.toLowerCase()

    if (tagName === 'h2') {
      currentCategory = $(el).text().replace(/\s*#\s*$/, '').trim()
      currentCategorySlug = slugify(currentCategory)
      currentSubcategory = undefined
      return
    }

    if (tagName === 'h3') {
      currentSubcategory = $(el).text().replace(/\s*#\s*$/, '').trim()
      return
    }

    if (tagName === 'ul') {
      $(el)
        .children('li')
        .each((_j, li) => {
          const liEl = $(li)
          const mainLink = liEl.children('p, a').first().find('a').first()
          const fallbackLink = liEl.find('a').first()

          const linkEl = mainLink.length ? mainLink : fallbackLink
          if (!linkEl.length) return

          const url = linkEl.attr('href')?.trim()
          if (!url || url.startsWith('#') || url.startsWith('mailto:')) return
          // Skip internal anchor links (e.g. same-site ToC entries like https://free-for.dev/#/?id=...)
          if (url.includes('#/?id=') || url.includes('/#/')) return

          const title = linkEl.text().trim()
          if (!title || title.length < 2) return

          const descParts: string[] = []
          liEl.children('ul').children('li').each((_k, descLi) => {
            const text = $(descLi).text().trim()
            if (text) descParts.push(text)
          })
          // Also grab any text nodes / p elements that aren't just the title link
          liEl.children('p').each((_k, p) => {
            const pText = $(p).text().trim()
            if (pText && pText !== title) descParts.push(pText)
          })

          const description = descParts.slice(0, 3).join(' | ').substring(0, 280)

          const id = uniqueId(title, url)
          const dedupKey = `${id}`

          if (seenIds.has(dedupKey)) return
          seenIds.add(dedupKey)

          const tags = inferTags(currentCategory, currentSubcategory, title, description)
          const technology = inferTechnology(title, url, currentCategory)

          resources.push({
            id,
            title,
            description,
            url,
            category: currentCategory,
            categorySlug: currentCategorySlug,
            subcategory: currentSubcategory,
            tags,
            technology,
            source: sourceName,
          })
        })
    }
  })

  return resources
}

// ─── Entry Point ─────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const dataSourceDir = path.resolve(projectRoot, '../data-source')
const outputPath = path.resolve(projectRoot, 'server/data/resources.json')

console.log('\n[DevAtlas] Starting resource extraction pipeline...')
console.log(`  Source : ${dataSourceDir}`)
console.log(`  Output : ${outputPath}\n`)

if (!fs.existsSync(dataSourceDir)) {
  console.error(`[DevAtlas] ERROR: data-source directory not found at ${dataSourceDir}`)
  process.exit(1)
}

const htmlFiles = fs.readdirSync(dataSourceDir).filter((f) => f.endsWith('.html'))

if (htmlFiles.length === 0) {
  console.warn('[DevAtlas] WARNING: No .html files found in data-source directory.')
}

let allResources: Resource[] = []

for (const file of htmlFiles) {
  const filePath = path.join(dataSourceDir, file)
  const sourceName = path.basename(file, '.html')
  console.log(`  Parsing: ${file}`)
  try {
    const resources = parseHtmlFile(filePath, sourceName)
    console.log(`    Extracted ${resources.length} resources`)
    allResources = allResources.concat(resources)
  } catch (err) {
    console.error(`  ERROR parsing ${file}:`, err)
  }
}

// Derive summary data
const categories = [...new Set(allResources.map((r) => r.category))].sort()
const allTags = [...new Set(allResources.flatMap((r) => r.tags))].sort()

const output = {
  meta: {
    generated: new Date().toISOString(),
    totalResources: allResources.length,
    totalCategories: categories.length,
    sources: htmlFiles.map((f) => path.basename(f, '.html')),
  },
  categories,
  tags: allTags,
  resources: allResources,
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2))

console.log(`\n[DevAtlas] Done!`)
console.log(`  Total resources : ${allResources.length}`)
console.log(`  Total categories: ${categories.length}`)
console.log(`  Output written  : ${outputPath}\n`)
