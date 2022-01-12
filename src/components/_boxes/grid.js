import React from "react"
import PropTypes from "prop-types"
import { join } from "hooks/use-array"
import styles from "./grid.module.less"

export default function Grid({ className, children }) {
  const classes = {
    grid: join(styles.grid, className),
  }

  return <div className={classes.grid}>{children}</div>
}

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
