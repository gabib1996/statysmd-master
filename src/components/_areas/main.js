import React from "react"
import styles from "./main.module.less"

export default function Main({ children }) {
  return <main className={styles.main}>{children}</main>
}
