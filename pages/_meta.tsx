export default {
  // default config for all pages
  "*": {
    type: "page",
    theme: {
      sidebar: false,
      toc: false,
      breadcrumb: false,
      timestamp: false,
      pagination: false,
      layout: 'default'
    }
  },
  // pages config
  "index": {
    title: "Home",
    // type: "page"
    display: 'hidden',
    theme: {
      layout: 'raw'
    }
  },
  // "member": {
  //   title: "member",
  //   // type: "page"
  //   display: 'hidden',
  //   theme: {
  //     // breadcrumb: true,
  //     layout: 'default'
  //   }
  // },
  "team": {
    title: "Team",
    type: "page",
    theme: {
      layout: 'full'
    }
  },
  "position": {
    title: "Open Positions",
    // type: "page"
  },
  "research": {
    title: "Researchs",
    // type: "page"
  },
  "publication": {
    title: "Publications",
    // type: "page"
  },
  "contact": {
    title: "Contact",
    // type: "page"
  },
}