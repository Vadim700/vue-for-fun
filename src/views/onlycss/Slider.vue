<template>
  <section>
    <header class="mb-6">
      <p class="eyebrow">Only CSS</p>
      <h1 class="page-title mt-2">3D carousel</h1>
      <p class="page-subtitle">
        Ten frames spin in 3D with pure CSS: perspective, rotateY and translateZ.
      </p>
    </header>

    <div class="relative overflow-hidden rounded-2xl bg-slate-900">
      <div class="banner">
        <div class="banner__slider" style="--quantity: 10">
          <div v-for="n in 10" :key="n" class="banner__item" :style="{ '--position': n }">
            <img :src="birds[n - 1]" :alt="`Bird frame ${n}`" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
      <div class="content" data-content="CSS ONLY">
        <div class="content__model"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bird1 from '@/assets/bird-1.jpg'
import bird2 from '@/assets/bird-2.jpg'
import bird3 from '@/assets/bird-3.jpg'
import bird4 from '@/assets/bird-4.jpg'
import bird5 from '@/assets/bird-5.jpg'
import bird6 from '@/assets/bird-6.jpg'
import bird7 from '@/assets/bird-7.jpg'
import bird8 from '@/assets/bird-8.jpg'
import bird9 from '@/assets/bird-9.jpg'
import bird10 from '@/assets/bird-10.jpg'

const birds = [bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10]
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 72vh;
  min-height: 420px;
  text-align: center;
  overflow: hidden;
  position: relative;

  &__slider {
    position: absolute;
    width: 200px;
    height: 250px;
    top: 15%;
    left: calc(50% - 100px);
    transform-style: preserve-3d;
    animation: autoRun 20s linear infinite;
    z-index: 2;
  }

  @keyframes autoRun {
    from {
      transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
    }
    to {
      transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
    }
  }

  &__item {
    position: absolute;
    border-radius: 8px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
      translateZ(24vw);
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: scale 0.25s ease;

      &:hover {
        scale: 1.15;
      }
    }
  }
}

.content {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(1400px, 100vw);
  height: max-content;
  pointer-events: none;
  z-index: 1;

  &__model {
    background-image: url('../../assets/optimized/tree.png');
    width: 100%;
    height: 60vh;
    position: absolute;
    bottom: -32px;
    left: 5%;
    background-size: auto 130%;
    background-repeat: no-repeat;
    background-position: top center;
  }
}
</style>
