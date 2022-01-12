import React from "react"
import { graphql } from "gatsby"
import Block from "components/_boxes/block"
import ContactForm from "components/_units/contact-form"
import Hero from "components/_units/hero"
import Member from "components/_units/member"
import SEO from "components/seo"

export default ({ data }) => (
  <>
    <SEO title="Our team" />
    <Hero src={data.file.childImageSharp.fluid} />
    <Block>
      <h1>Our team</h1>
    </Block>
    <Block>
      <div>
        <div>
          <h2>We‘re dedicated to you</h2>
          <p>
            Our group of professionals have many years of experience in the
            healthcare industry as a whole and specializing in medical billing.
          </p>
          <p>Some of our highly experienced team members:</p>
        </div>
      </div>
    </Block>
    <Block settings={{ split: true }}>
      <Member name="hazem" />
      <Member name="kerri" />
      <Member name="vanessa" />
      <Member name="hanaa" />
    </Block>
  </>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "images/hero-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
