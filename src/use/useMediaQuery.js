import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Reactive media query built on top of matchMedia.
 * Cheaper than listening to resize and recalculating dimensions by hand.
 */
export function useMediaQuery(query) {
  const matches = ref(typeof window !== 'undefined' ? window.matchMedia(query).matches : false)

  let mediaQuery = null

  const update = (event) => {
    matches.value = event.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(query)
    matches.value = mediaQuery.matches
    mediaQuery.addEventListener('change', update)
  })

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', update)
  })

  return matches
}
