import React from "react"
import styles from "./cover.module.less"

import img from "../../assets/images/hero.jpg"

export default function Cover() {
  return (
    <div className={styles.root}>
      <img src={img} alt="" />
      <div className={styles.title}>
        Quality and dedication beyond measure
      </div>
    </div>
  )
}
