// import nextra from 'nextra'

// const withNextra = nextra({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.tsx',
//   latex: true,
//   defaultShowCopyCode: true,
// })

// export default withNextra(
//    {
//      reactStrictMode: true,
//      output: "export",
//     images: {
//       unoptimized: true,
//     },
//    }
// )

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  defaultShowCopyCode: true,
})

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
};