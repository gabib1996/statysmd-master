import React from "react"
import { graphql } from "gatsby"
// import DOMPurify from "dompurify"
import Block from "components/_boxes/block"
import ContactForm from "components/_units/contact-form"
import Hero from "components/_units/hero"

export default function Page({ data }) {
  const { frontmatter, html } = data.markdownRemark

  return (
    <>
      <Hero src={frontmatter.hero.childImageSharp.fluid} />
      <Block>
        <h1>{frontmatter.name}</h1>
      </Block>
      <Block settings={{ split: true }}>
        <div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div>
          <h2>Connect with us</h2>
          <p>
            Schedule a meeting or send us your questions or comments. We will
            respond within one business day.
          </p>
          <ContactForm />
        </div>
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
            fluid(maxWidth: 2560, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
