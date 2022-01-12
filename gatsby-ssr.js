import React from "react"
import Layout from "components/layout"

export const wrapPageElement = ({ element, props }) => {
  return <Layout location={props.location}>{element}</Layout>
}

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />,
  ])
}
