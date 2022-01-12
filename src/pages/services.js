import React from "react"
import { graphql } from "gatsby"
import Block from "components/_boxes/block"
import Hero from "components/_units/hero"
import Tags from "components/_units/tags"
import SEO from "components/seo"

export default ({ data }) => (
  <>
    <SEO title="Our services" />
    <Hero src={data.file.childImageSharp.fluid} />
    <Block>
      <h1>Our services</h1>
      <h2>Full-service medical billing, auditing and bookeeping</h2>
      <p>
        In addition to our full-service medical billing, Statys Medical
        Development offers several services to healthcare institutions and
        medical practitioners. Auditing, bookkeeping and business operations
        consulting. Our holistic approach is a solutions-based strategy to
        maximize your billings along with reducing internal headcount and
        overhead costs.
      </p>
      <h2>The Statys MD advantage</h2>
      <p>
        Statys MD has a broad range of experience in medical billing, from solo
        physician accounts to group-based practices and interdisciplinary teams.
      </p>
      <p>
        There are many variables that would make a physician submit their claims
        fee-for-service, join an alternative payment plan, or even take a
        salaried position.
      </p>
      <p>
        At Statys Medical Development, we work and understand all the nuances of
        each billing model:
      </p>
      <ul>
        <li>Alternative Funding Plan (AFP)/Alternative Payment Plan (APP)</li>
        <li>Shadow Billing</li>
        <li>Uninsured/Third Party (i.e.: WSIB, UHIP, IFH)</li>
        <li>Primary Care Funding</li>
        <li>Fee-For-Service</li>
      </ul>
      <h2>Some of our specialties</h2>
      <Tags />
    </Block>
  </>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "images/hero-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
