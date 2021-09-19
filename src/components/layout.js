import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Message } from "theme-ui"

const shortcodes = { Message }

export default function Layout({children}) {
  return (
    <MDXProvider components={shortcodes}>
      {children}
    </MDXProvider>
  )
}
