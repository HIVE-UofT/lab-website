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
  "team": {
    title: "Team",
    type: "page",
    theme: {
      layout: 'default'
    }
  },
  "position": {
    title: "Open Positions",
    // type: "page"
  },
  "projects": {
    title: "Projects",
    theme: {
      layout: 'raw'
    }
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