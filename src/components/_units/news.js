import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./news.module.less"

export default function News({ data }) {
  return (
    <div className={styles.news}>
      <Link className={styles.show} to={data.path}>
        <Img fluid={data.hero.childImageSharp.fluid} />
      </Link>
      <div className={styles.tell}>
        <div className={styles.date}>{data.date}</div>
        <h2>
          <Link to={data.path}>{data.name}</Link>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: data.part }} />
      </div>
    </div>
  )
}
