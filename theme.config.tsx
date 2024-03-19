import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  darkMode: true,
  logo: () => {
    return (
     <img src='/img/hive-logo-header.svg'  alt='hive-logo'/>
    )
  },

  sidebar: {
    defaultMenuCollapseLevel: 0,
    autoCollapse: true,
    toggleButton: true
  },
  toc: {
    backToTop: true,
  },

  footer: {

    content: () => {
      return (
        <>
          <span style={{ fontFamily: 'ZCOOL KuaiLe', color: '#8A6FDF' }}>HiveMind © 2023- {new Date().getFullYear()}</span>
        </>

      )
    }
  },
  color: {
    hue: {
      light: 254.5,
      dark: 47
    },
    saturation: {
      light:63.6,
      dark: 95
    }
  },
}

export default config
