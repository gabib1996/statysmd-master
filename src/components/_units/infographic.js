import React from "react"
import styles from "./infographic.module.less"

import info1 from "../../assets/images/info-quality.png"
import info2 from "../../assets/images/info-efficiency.png"
import info3 from "../../assets/images/info-security.png"

export default function Infographic() {
  return (
    <div className={styles.root}>
      <div className={styles.item}><img src={info1} alt="" /></div>
      <div className={styles.item}><img src={info2} alt="" /></div>
      <div className={styles.item}><img src={info3} alt="" /></div>
    </div>
  )
}
