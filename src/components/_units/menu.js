import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import { join } from "hooks/use-array"
import styles from "./menu.module.less"

export default function Menu({ settings, handler, className }) {
  const { theme } = { ...defaults, ...settings }

  const data = useStaticQuery(query).allMenuJson.nodes

  const classes = {
    root: join(styles.root, styles[theme], className),
  }

  return (
    <nav className={classes.root}>
      {React.Children.toArray(
        data.map(i => <MenuItem link={i.link} text={i.text} handler={handler} />)
      )}
    </nav>
  )
}

function MenuItem({ link, text, handler }) {
  const classes = {
    item: styles.item,
    link: styles.link,
    active: styles.active,
  }
  return (
    <div className={styles.item}>
      <Link className={classes.link} activeClassName={classes.active} to={link} onClick={handler}>
        {text}
      </Link>
    </div>
  )
}

const defaults = {
  theme: "onlite",
}

const query = graphql`
  query {
    allMenuJson {
      nodes {
        text
        link
      }
    }
  }
`

Menu.propTypes = {
  settings: PropTypes.shape({
    theme: PropTypes.oneOf(["ondark", "onlite"]),
  }),
}

MenuItem.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
}
