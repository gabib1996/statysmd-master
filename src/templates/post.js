import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Block from "components/_boxes/block"

export default function Post({ data }) {
  const { frontmatter, html } = data.markdownRemark

  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(to top, #4f758b, #396075)",
          height: "10rem",
        }}
      />
      <Block settings={{ split: true }}>
        <div>
          <Img fluid={frontmatter.hero.childImageSharp.fluid} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Block>
    </>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        name
        path
        hero {
          childImageSharp {
            fluid(maxWidth: 1152, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
