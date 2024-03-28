// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: '计算复杂度学习笔记',
    description: '分享计算复杂度课程的相关笔记',
    github: {
      branch: 'main',
      repo: 'computational-complexity-notes',
      owner: 'gxmzuai',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
