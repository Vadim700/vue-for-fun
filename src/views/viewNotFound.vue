<template>
  <div class="error-page">
    <h1 class="error-code">404</h1>
    <p class="error-message">Страница не найдена</p>

    <RouterLink to="/" class="home-button"> Вернуться на главную </RouterLink>

    <div class="frame">
      <div v-for="i in 3" :key="i" :style="{ animationDelay: `${(i - 1) * 4}s` }"></div>
    </div>
    <canvas ref="canvas" id="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let flickerInterval = null

onMounted(() => {
  if (canvas.value) {
    initCanvas()
  }
})

onUnmounted(() => {
  if (flickerInterval) {
    clearInterval(flickerInterval)
  }
})

const initCanvas = () => {
  const ctx = canvas.value.getContext('2d')

  const setCanvasSize = () => {
    canvas.value.width = canvas.value.clientWidth
    canvas.value.height = canvas.value.clientHeight
  }

  setCanvasSize()
  window.addEventListener('resize', setCanvasSize)

  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)

  const imgData = ctx.getImageData(0, 0, canvas.value.width, canvas.value.height)
  const pix = imgData.data

  const flickering = () => {
    for (let i = 0; i < pix.length; i += 4) {
      const color = Math.random() * 255 + 50
      pix[i] = color
      pix[i + 1] = color
      pix[i + 2] = color
    }
    ctx.putImageData(imgData, 0, 0)
  }

  flickerInterval = setInterval(flickering, 30)
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.error-page {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
}

canvas {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.error-code {
  z-index: 3;
  font-size: clamp(120px, 25vw, 200px);
  line-height: 1;
  color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  animation: text-flicker 2s linear infinite;
  margin-bottom: 20px;
}

.error-message {
  z-index: 3;
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(18px, 4vw, 24px);
  margin-bottom: 30px;
  text-align: center;
  max-width: 90%;
}

.home-button {
  z-index: 4;
  display: inline-block;
  padding: 12px 30px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.home-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.frame {
  z-index: 3;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  );
}

.frame div {
  position: absolute;
  left: 0;
  top: -20%;
  width: 100%;
  height: 20%;
  background-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: slide-down 12s linear infinite;
}

.frame div:nth-child(1) {
  animation-delay: 0s;
}

.frame div:nth-child(2) {
  animation-delay: 4s;
}

.frame div:nth-child(3) {
  animation-delay: 8s;
}

@keyframes slide-down {
  0% {
    top: -20%;
  }
  100% {
    top: 100%;
  }
}

@keyframes text-flicker {
  0% {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  }
  33% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  }
  66% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }
  100% {
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
  }
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .error-code {
    font-size: clamp(80px, 20vw, 150px);
  }

  .error-message {
    font-size: clamp(16px, 4vw, 20px);
  }

  .home-button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
