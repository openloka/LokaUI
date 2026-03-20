import { writeFileSync } from 'fs'

const COMPONENTS = [
  { name: 'Button', category: 'foundations', slug: 'button' },
  { name: 'Input', category: 'foundations', slug: 'input' },
  { name: 'Badge', category: 'foundations', slug: 'badge' },
  { name: 'Toggle', category: 'foundations', slug: 'toggle' },
  { name: 'Dialog', category: 'overlays', slug: 'dialog' },
  { name: 'Drawer', category: 'overlays', slug: 'drawer' },
  { name: 'Tooltip', category: 'overlays', slug: 'tooltip' },
  { name: 'Popover', category: 'overlays', slug: 'popover' },
  { name: 'Table', category: 'data-display', slug: 'table' },
  { name: 'Card', category: 'data-display', slug: 'card' },
  { name: 'Avatar', category: 'data-display', slug: 'avatar' },
  { name: 'Progress', category: 'data-display', slug: 'progress' },
  { name: 'Tabs', category: 'navigation', slug: 'tabs' },
  { name: 'Breadcrumb', category: 'navigation', slug: 'breadcrumb' },
  { name: 'Sidebar', category: 'navigation', slug: 'sidebar' },
  { name: 'Pagination', category: 'navigation', slug: 'pagination' },
  { name: 'Select', category: 'forms', slug: 'select' },
  { name: 'Checkbox', category: 'forms', slug: 'checkbox' },
  { name: 'Radio', category: 'forms', slug: 'radio' },
  { name: 'Textarea', category: 'forms', slug: 'textarea' },
  { name: 'Toast', category: 'feedback', slug: 'toast' },
  { name: 'Alert', category: 'feedback', slug: 'alert' },
  { name: 'Skeleton', category: 'feedback', slug: 'skeleton' },
  { name: 'Spinner', category: 'feedback', slug: 'spinner' },
]

const text = `# LokaUI
> An open source collection of high quality, accessible, and fully customizable UI components.

## Installation
npx shadcn@latest add @lokaui/<component-name>

## Available Components (${COMPONENTS.length})
${COMPONENTS.map(c => `- ${c.name}: https://lokaui.dev/${c.category}/${c.slug}`).join('\n')}

## Variants
Each component supports multiple variants:
- React: JS-CSS, JS-TW, TS-CSS, TS-TW
- Laravel: HTML-TW (Button only, more coming)
- React Native: RN-TW, RN-StyleSheet (Button only, more coming)

## Links
- Website: https://lokaui.dev
- GitHub: https://github.com/lokaui/lokaui
- Documentation: https://lokaui.dev/docs/getting-started
`

writeFileSync('public/llms.txt', text)
console.log('llms.txt generated')
