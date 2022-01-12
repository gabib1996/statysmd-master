import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// import DOMPurify from "dompurify"
import { find } from "hooks/use-array"
import styles from "./member.module.less"

export default function Member({ name }) {
  const data = useStaticQuery(query).allTeamJson.nodes

  const node = find(data, name)

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Img fluid={node.show.childImageSharp.fluid} alt="" />
      </div>
      <div className={styles.details}>
        <h3>{node.head}</h3>
        <p
          dangerouslySetInnerHTML={{ __html: node.body }}
        />
      </div>
    </div>
  )
}

const query = graphql`
  query {
    allTeamJson {
      nodes {
        name
        head
        body
        show {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
