import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {

  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  
  chat: {
    link: 'https://discord.gg/2ev96gcCCS',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: <span>Gaur Money Documents</span>,
  },
}
export default {
  docsRepositoryBase: 'https://gaur-docs.vercel.app/',
  banner: {
    key: '2.0-release',
    text: <a href="https://nextra.site" target="_blank">
      🎉 Gaur Vaults are almost Live!
    </a>,
  },
  head: (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="title" content="Gaur Money" />
    <meta property="description" content="The future of DeFi" />
  </>
  ),
}


