import React from "react"
import PropTypes from "prop-types"
import { FormspreeProvider } from "@formspree/react"
import Footer from "components/_areas/footer"
import Header from "components/_areas/header"
import Main from "components/_areas/main"
import "./layout.less"

export default function Layout({ children }) {
  return (
    <FormspreeProvider project="1554191229997022509">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </FormspreeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
