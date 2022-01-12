import React from "react"
import Img from "gatsby-image"
import styles from "./hero.module.less"

export default function Hero({ src }) {
  return (
    <div className={styles.hero}>
      <Img className={styles.img} fluid={src} alt="" />
    </div>
  )
}

