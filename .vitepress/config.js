import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  lang: 'zh-CN',
  title: "文档说明",
  titleTemplate: '后台管理系统',
  description: "A VitePress Site",
  srcDir: './pages',
  srcExclude: ['**/README.md'],
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'vite.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/vite.svg',
    siteTitle: '模板使用文档',
    outline: 2,
    outlineTitle: '大纲',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { 
            text: '文档',
            collapsed: true,
            items: [
              {text: 'Markdown 示例', link: '/markdown-examples'},
            ],
          },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: 'Released under the <a href="https://github.com/hzf-666" target="_blank" style="color: var(--vp-c-brand); text-decoration: underline;">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://opensource.org/licenses/MIT" target="_blank" style="color: var(--vp-c-brand); text-decoration: underline;">Evan You</a>',
    },
  },
})
