import React from "react"

/**
 *  Get window scroll position
 *
 *  @return {object} { x, y }
 */
export default function useScrollObserver() {
  const [state, setState] = React.useState({ x: 0, y: 0 })
  React.useEffect(() => {
    if (typeof window === "object") {
      handler()

      window.addEventListener("resize", handler)
      window.addEventListener("scroll", handler)
    }

    return () => {
      if (typeof window === "object") {
        window.removeEventListener("resize", handler)
        window.removeEventListener("scroll", handler)
      }
    }

    function handler() {
      setState({
        x: window.scrollX,
        y: window.scrollY,
      })
    }
  }, [])

  return state
}
