import React from "react"
import PropTypes from "prop-types"
import { join } from "hooks/use-array"
import styles from "./shelf.module.less"

export default function Shelf({ className, children }) {
  const classes = {
    shelf: join(styles.shelf, className),
  }

  return <div className={classes.shelf}>{children}</div>
}

Shelf.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
