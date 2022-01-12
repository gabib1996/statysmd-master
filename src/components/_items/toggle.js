import React from "react"
import { join } from "hooks/use-array"
import styles from "./toggle.module.less"

export default function Toggle({ name, settings, handler }) {
  const { theme } = { ...defaults, ...settings }

  const classes = {
    root: join(styles.root, styles[theme]),
  }

  return (
    <button className={classes.root} onClick={handler && handler}>
      <span className="material-icons">{name}</span>
    </button>
  )
}

const defaults = {
  theme: "onlite",
}
