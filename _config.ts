import lume from 'lume/mod.ts'
import remark from 'lume/plugins/remark.ts'
import jsx from 'lume/plugins/jsx.ts'
import inline from 'lume/plugins/inline.ts'
import date from 'lume/plugins/date.ts'
import remarkWikiLink from 'npm:remark-wiki-link-plus'
import remarkA11YEmoji from 'npm:@fec/remark-a11y-emoji'
import type { Page } from 'lume/core.ts'
// import minifyHTML from 'lume/plugins/minify_html.ts';

function transformToInline(page: Page) {
  const document = page.document
  if (!document) return
  // ? Make imgs inline
  const imgs = document.getElementsByTagName('img')
  for (const img of imgs) {
    img.setAttribute('inline', '')
  }
  page.document = document
}

// Apply the plugin config
const site = lume()

site
  .ignore('README.md')

site
  .remoteFile(
    'scripts/medium-zoom.min.js',
    'https://cdn.jsdelivr.net/npm/medium-zoom/dist/medium-zoom.min.js',
  )

site
  .process(['.html'], transformToInline)

// .process(['.html'], (page: Page) => console.debug(page.data))

site
  .use(date())
  .use(jsx())
  .use(remark({
    remarkPlugins: [remarkWikiLink, remarkA11YEmoji],
  }))
  .use(inline({ attribute: 'inline' }))

// site.use(minifyHTML({ extensions: ['.css', '.html', '.js'] }));

export default site
