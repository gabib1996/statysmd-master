import React from "react"
import PropTypes from "prop-types"
import { join } from "hooks/use-array"
import styles from "./block.module.less"

const defaults = {
  inset: "major",
  bleed: true,
  space: true,
  split: false,
}

export default function Block({ settings, className, children }) {
  const { paint, bleed, inset, space, split } = { ...defaults, ...settings }

  const classes = {
    outer: join(
      styles.outer,
      paint && bleed && styles[paint],
      paint && bleed && styles[inset],
      space && styles.space,
      className
    ),
    inner: join(
      styles.inner,
      paint && !bleed && styles[paint],
      paint && !bleed && styles[inset],
      split && styles.split
    ),
  }

  return (
    <div className={classes.outer}>
      <div className={classes.inner}>{children}</div>
    </div>
  )
}

Block.propTypes = {
  settings: PropTypes.shape({
    paint: PropTypes.oneOf(["surface", "primary", "secondary"]),
    inset: PropTypes.oneOf(["major", "minor"]),
    bleed: PropTypes.bool,
    space: PropTypes.bool,
    split: PropTypes.bool,
  }),
}
