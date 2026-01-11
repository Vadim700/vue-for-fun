export const formatObjectToCSS = (obj) => {
  return Object.entries(obj)
    .filter(([_, value]) => value && value !== 'undefined' && value !== 'null')
    .map(([key, value]) => {
      const cssProperty = key.replace(/[A-Z]/g, match => '-' + match.toLowerCase())
      return `${cssProperty}: ${value};`
    })
    .join('\n')
    .trim()
}
