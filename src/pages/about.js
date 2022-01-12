import React from "react"
import { graphql, Link } from "gatsby"
import Block from "components/_boxes/block"
import Hero from "components/_units/hero"
import SEO from "components/seo"

export default ({ data }) => (
  <>
    <SEO title="About us" />
    <Hero src={data.file.childImageSharp.fluid} />
    <Block>
      <h1>About us</h1>
      <h2>Our story</h2>
      <p>
        K.C. McKee Medical Development was founded in Thunder Bay, Ontario in
        1992. Currently headquartered in Mississauga, Ontario, our mission is to
        continue the improvement of healthcare by supporting the medical
        community as it focuses on providing the best care for patients.
      </p>
      <h2>Why choose the Statys MD advantage?</h2>
      <p>
        We do not accept the status quo. We constantly endeavor towards the
        seemingly unattainable, aspiring to always improve and continuously
        innovate in the medical billing vertical.
      </p>
      <p>
        We provide the complete “Billing Cycle Management” through a customized
        client-specific approach.
      </p>
      <p>
        Our focus on submissions accuracy is unrivaled in the industry resulting
        in the elimination of errors and rejections. Thus, maximizing the return
        and reducing the timing cycle from providing the service to receiving
        payment.
      </p>
      <h2>Want to know more?</h2>
      <p>
        Learn more about <Link to="/services/">Our Services</Link> or meet{" "}
        <Link to="/team/">Our Team</Link>.
      </p>
    </Block>
  </>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "images/hero-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
