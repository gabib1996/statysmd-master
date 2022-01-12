import React from "react"
import Block from "components/_boxes/block"
import News from "components/_units/news"
import SEO from "components/seo"

export default ({ data }) => (
  <>
    <SEO title="News and views" />
    <div
      style={{
        backgroundImage: "linear-gradient(to top, #4f758b, #396075)",
        height: "10rem",
      }}
    />
    <Block>
      <h1>News and views</h1>
    </Block>
    <Block>
      {React.Children.toArray(
        data.allMarkdownRemark.nodes.map(i =>
          i.frontmatter.type === "post" ? <News data={i.frontmatter} /> : null
        )
      )}
    </Block>
  </>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMM DD, YYYY")
          name
          path
          type
          part
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
  }
`
