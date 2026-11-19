<template>
  <section
    class="relative flex min-h-[70vh] items-center justify-center overflow-hidden rounded-3xl bg-[#0b0c10] px-6 py-16 text-center"
  >
    <canvas
      ref="canvas"
      class="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    ></canvas>

    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_18%,rgb(0_0_0/0.85)_100%)]"
      aria-hidden="true"
    ></div>

    <div
      class="relative z-10 max-w-lg rounded-2xl border border-white/10 bg-black/45 px-6 py-8 backdrop-blur-[2px] sm:px-8"
    >
      <p class="text-accent text-xs font-extrabold tracking-[0.25em] uppercase">Error 404</p>
      <h1 class="mt-3 text-7xl leading-none font-black text-white/90 sm:text-9xl">404</h1>
      <p class="mt-4 text-lg font-bold text-white/90">This page does not exist</p>
      <p class="mt-2 text-sm text-white/70">
        The link may be outdated or the address may contain a typo.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <RouterLink to="/" class="btn btn-primary">Back home</RouterLink>
        <button
          type="button"
          class="btn border border-white/20 bg-white/5 text-white/85 hover:border-white/40 hover:bg-white/10 hover:text-white"
          @click="goBack"
        >
          Go back
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const canvas = ref(null)

// Previously every canvas pixel was recalculated at full resolution every 30 ms.
// Now it uses 4× fewer pixels and runs at 8 frames per second.
const PIXEL_SCALE = 4
const FRAME_MS = 125

let context = null
let imageData = null
let pixels = null
let frameTimer = null
let resizeObserver = null
let prefersReducedMotion = false

const paintNoise = () => {
  if (!context || !imageData) return

  for (let i = 0; i < pixels.length; i += 4) {
    const value = 40 + Math.random() * 180
    pixels[i] = value
    pixels[i + 1] = value
    pixels[i + 2] = value
    pixels[i + 3] = 255
  }

  context.putImageData(imageData, 0, 0)
}

const resize = () => {
  const element = canvas.value
  if (!element || !context) return

  const rect = element.getBoundingClientRect()
  const width = Math.max(1, Math.round(rect.width / PIXEL_SCALE))
  const height = Math.max(1, Math.round(rect.height / PIXEL_SCALE))

  if (element.width === width && element.height === height && imageData) return

  element.width = width
  element.height = height
  imageData = context.createImageData(width, height)
  pixels = imageData.data

  paintNoise()
}

const stop = () => {
  clearInterval(frameTimer)
  frameTimer = null
}

const start = () => {
  if (frameTimer || prefersReducedMotion) return
  frameTimer = setInterval(paintNoise, FRAME_MS)
}

const handleVisibility = () => {
  if (document.hidden) stop()
  else start()
}

const goBack = () => {
  if (window.history.length > 1) router.back()
  else router.push('/')
}

onMounted(() => {
  if (!canvas.value) return

  context = canvas.value.getContext('2d', { alpha: false })
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  resize()
  start()

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas.value)

  document.addEventListener('visibilitychange', handleVisibility)
})

onBeforeUnmount(() => {
  stop()
  resizeObserver?.disconnect()
  document.removeEventListener('visibilitychange', handleVisibility)
})
</script>

<style scoped>
canvas {
  image-rendering: pixelated;
}
</style>
