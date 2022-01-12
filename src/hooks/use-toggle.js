import React from "react"

/**
 *  Toggle the state of a component
 * 
 *  @example
 *  const [toggleState, toggleHandler, toggleTrigger] = useToggle()
 *
 *  @return {array} [state, handler, trigger]
 */
export default function useToggle() {
  //
  //  State {boolean} Target element "on" / "off"
  //
  const [state, setState] = React.useState(false)

  //
  //  State {node} Trigger element
  //
  const [trigger, setTrigger] = React.useState(null)

  //
  //  Handler
  //
  function handler(e) {
    setState(prev => !prev)
    setTrigger(e.currentTarget)
  }

  return [state, handler, trigger]
}