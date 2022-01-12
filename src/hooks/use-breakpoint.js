import React from "react"

/**
 *  Return true if keyword matches `min-width` media query feature
 *
 *  @param {string} keyword Breakpoint keyword
 */
export function useSetBreakpoint(keyword) {
  const [state, setState] = React.useState(null)
  React.useEffect(() => {
    const width = getBreakpoint(keyword)
    const query = window.matchMedia(`(min-width: ${width}px)`)

    handler()
    // query.addEventListener("change", handler)
    query.addListener(handler)

    return () => {
      // window.removeEventListener("load", handler)
      // query.removeEventListener("change", handler)
      query.removeListener(handler)
    }

    function handler() {
      setState(query.matches)
    }

    function getBreakpoint(string) {
      switch (string) {
        case `xs`:
          return "0"
        case `sm`:
          return "640"
        case `md`:
          return "960"
        case `lg`:
          return "1280"
        case `xl`:
          return "1600"
        default:
          throw new Error(`Unhandled type: ${string}`)
      }
    }
  }, [keyword])

  React.useEffect(() => {
    console.log("SetBreakpoint:", state)
  }, [state])

  return state
}

/**
 *  Return `min-width` media query feature keyword
 */
export function useGetBreakpoint() {
  const [state, setState] = React.useState(null)
  React.useEffect(() => {
    const widths = Object.entries({
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1600,
    }).sort((a, b) => a[1] - b[1])

    for (const [key, value] of widths) {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) setState(key)
    }
  }, [])

  return state
}
