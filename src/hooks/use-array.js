//
//  Array utility functions
//

/**
 *  Arrange target list using reference list by name
 *
 *  @param {array} target
 *  @param {array} reference
 *  @return {array}
 */
export function arrange(target, reference) {
  return target.sort(
    (a, b) => reference.indexOf(a.name) - reference.indexOf(b.name)
  )
}

/**
 *  Filter (and arrange) target list using reference list by name
 *
 *  @param {array} target
 *  @param {array} reference
 *  @return {array}
 */
export function filter(target, reference) {
  return arrange(
    target.filter(i => reference.includes(i.name)),
    reference
  )
}

/**
 *  Find object in array by name
 *
 *  @param {array} target
 *  @param {string} name
 *  @return {object}
 */
export function find(target, name) {
  return target.find(i => i.name === name)
}

/**
 *  Confirm target list contains name
 *
 *  @param {array} reference
 *  @param {string} name
 *  @return {boolean}
 */
export function includes(target, name) {
  return target.some(i => i.name === name)
}

/**
 *  Concatenate all arguments (space delimited)
 *
 *  @param {string} ... One or more strings
 *  @return {string}
 */
export function join() {
  return [...arguments].filter(Boolean).join(" ")
}

/**
 *  Get random item from target
 * 
 *  @param {array} target
 */
export function random(target) {
  return target[Math.floor(Math.random() * Math.floor(target.length))]
}