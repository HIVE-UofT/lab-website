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
      layout: 'raw'
    }
  },
  // pages config
  "index": {
    title: "Home",
    // type: "page"
    display: 'hidden'
  },
  "team": {
    title: "Team",
    // type: "page"
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