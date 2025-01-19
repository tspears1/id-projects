/* eslint-disable no-useless-escape */
/**
 * @function get
 *
 * Dynamically get a nested value from an array or
 * object with a string.
 *
 * @param {Object} value - Object to get value from.
 * @param {String} path - Path to value.
 * @param {*} [defaultValue=null] - Default value to return if path is not found.
 *
 * @example get(person, 'friends[0].name')
 */
export const get = ( value, path, defaultValue = null) => {
   const segments = path.split(/[\.\[\]]/g)
   let current = value
   for (const key of segments) {
      if (current === null) return defaultValue
      if (current === undefined) return defaultValue
      const dequoted = key.replace(/['"]/g, '')
      if (dequoted.trim() === '') continue
      current = current[dequoted]
   }
   if (current === undefined) return defaultValue
   return current
}