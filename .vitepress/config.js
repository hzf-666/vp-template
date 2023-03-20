import { defineConfig } from 'vitepress';

export default defineConfig({ // https://vitepress.dev/reference/site-config
  base: '/docs/',
  lang: 'zh-CN',
  title: 'My Awesome Project',
  titleTemplate: 'Custom Suffix',
  description: 'A VitePress Site',
  srcDir: './pages',
  srcExclude: ['**/README.md'],
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'vite.svg' }],
  ],

  themeConfig: { // https://vitepress.dev/reference/default-theme-config
    logo: '/vite.svg',
    siteTitle: 'My Awesome Project',
    outline: 2,
    outlineTitle: 'On this page',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    footer: {
      message: 'Released under the <a href="https://opensource.org/licenses/MIT" target="_blank" style="color: var(--vp-c-brand); text-decoration: underline;">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/hzf-666" target="_blank" style="color: var(--vp-c-brand); text-decoration: underline;">hzf-666</a>',
    },
  },
});
