import { writeFileSync } from 'fs'

const CATEGORIES = [
  { slug: 'docs', isDoc: true, subcategories: [
    { slug: 'getting-started' }, { slug: 'installation' }, { slug: 'theming' }, { slug: 'variants' },
  ]},
  { slug: 'foundations', subcategories: [
    { slug: 'button' }, { slug: 'input' }, { slug: 'badge' }, { slug: 'toggle' },
  ]},
  { slug: 'overlays', subcategories: [
    { slug: 'dialog' }, { slug: 'drawer' }, { slug: 'tooltip' }, { slug: 'popover' },
  ]},
  { slug: 'data-display', subcategories: [
    { slug: 'table' }, { slug: 'card' }, { slug: 'avatar' }, { slug: 'progress' },
  ]},
  { slug: 'navigation', subcategories: [
    { slug: 'tabs' }, { slug: 'breadcrumb' }, { slug: 'sidebar' }, { slug: 'pagination' },
  ]},
  { slug: 'forms', subcategories: [
    { slug: 'select' }, { slug: 'checkbox' }, { slug: 'radio' }, { slug: 'textarea' },
  ]},
  { slug: 'feedback', subcategories: [
    { slug: 'toast' }, { slug: 'alert' }, { slug: 'skeleton' }, { slug: 'spinner' },
  ]},
]

const BASE_URL = 'https://lokaui.dev'
const today = new Date().toISOString().split('T')[0]

const urls = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/favorites', priority: '0.3', changefreq: 'monthly' },
]

for (const cat of CATEGORIES) {
  for (const sub of cat.subcategories) {
    urls.push({
      loc: cat.isDoc ? `/docs/${sub.slug}` : `/${cat.slug}/${sub.slug}`,
      priority: cat.isDoc ? '0.7' : '0.8',
      changefreq: 'weekly',
    })
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${BASE_URL}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync('public/sitemap.xml', xml)
console.log(`Sitemap generated with ${urls.length} URLs`)
