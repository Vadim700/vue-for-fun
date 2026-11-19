import 'highlight.js/styles/github.css'

let hljsPromise = null

/**
 * highlight.js is loaded as a separate chunk, only when code actually needs highlighting.
 * It is no longer part of the initial bundle.
 */
const loadHljs = () => {
  if (!hljsPromise) {
    hljsPromise = Promise.all([
      import('highlight.js/lib/core'),
      import('highlight.js/lib/languages/xml'),
      import('highlight.js/lib/languages/css'),
      import('highlight.js/lib/languages/javascript'),
    ])
      .then(([core, xml, css, javascript]) => {
        const hljs = core.default
        hljs.registerLanguage('xml', xml.default)
        hljs.registerLanguage('css', css.default)
        hljs.registerLanguage('javascript', javascript.default)
        return hljs
      })
      .catch((error) => {
        hljsPromise = null
        throw error
      })
  }

  return hljsPromise
}

export const escapeCode = (code) =>
  String(code ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

export async function highlightToHtml(code, language = 'xml') {
  if (!code || !String(code).trim()) return ''

  try {
    const hljs = await loadHljs()
    return hljs.highlight(String(code), { language, ignoreIllegals: true }).value
  } catch (error) {
    console.warn('Failed to highlight code', error)
    return escapeCode(code)
  }
}
