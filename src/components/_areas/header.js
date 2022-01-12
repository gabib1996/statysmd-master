import React from "react"
import Shelf from "components/_boxes/shelf"
import Menu from "components/_units/menu"
import Logo from "components/_items/logo"
import Toggle from "components/_items/toggle"
import { useSetBreakpoint } from "hooks/use-breakpoint"
import useScrollObserver from "hooks/use-scrollobserver"
import { join } from "hooks/use-array"
import styles from "./header.module.less"

export default function Header() {
  const { y } = useScrollObserver()
  const breakpoint = useSetBreakpoint("lg")

  const [navState, setNavState] = React.useState(false)
  function navHandler() {
    setNavState(i => !i)
  }

  const classes = {
    root: join(styles.root, y ? styles.lite : styles.dark),
    shelf: styles.shelf,
  }

  const settings = {
    size: y ? "sm" : "lg",
    theme: y ? "onlite" : "ondark",
  }

  return (
    <header className={classes.root}>
      <Shelf className={classes.shelf}>
        <Logo settings={settings} />
        {!breakpoint && (
          <Toggle
            name={navState ? "close" : "menu"}
            settings={settings}
            handler={navHandler}
          />
        )}
        {((!breakpoint && navState) || breakpoint) && (
          <Menu settings={settings} handler={navHandler} />
        )}
      </Shelf>
    </header>
  )
}
