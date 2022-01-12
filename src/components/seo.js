import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
}

const defaultProps = {
  title: null,
  description: null,
}

export default function SEO({
  title = defaultProps.title,
  description = defaultProps.description,
}) {
  const { site } = useStaticQuery(query)

  const { titleTemplate, defaultTitle, defaultDescription } = site.siteMetadata

  return (
    <Helmet
      title={title}
      titleTemplate={titleTemplate}
      defaultTitle={defaultTitle}
    >
      <meta name="description" content={description || defaultDescription} />
    </Helmet>
  )
}

SEO.propTypes = propTypes

const query = graphql`
  query {
    site {
      siteMetadata {
        titleTemplate
        defaultTitle
        defaultDescription
      }
    }
  }
`
