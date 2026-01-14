<template>
  <div>


    <div class="banner">
      <div class="banner__slider" style="--quantity: 10">
        <div class="banner__item" style="--position: 1"><img src="../../assets/Post 1.png" alt="Image" /></div>
        <div class="banner__item" style="--position: 2"><img src="../../assets/Post 2.png" alt="Image" /></div>
        <div class="banner__item" style="--position: 3"><img src="../../assets/Post 3.png" alt="Image" /></div>
        <div class="banner__item" style="--position: 4"><img src="../../assets/Post 4.png" alt="Image" /></div>
        <div class="banner__item" style="--position: 5"><img src="../../assets/Post 5.png" alt="Image" /></div>
        <div class="banner__item" style="--position: 6"><img src="../../assets/Post 6.png" alt="Image" /></div>
        <div class="banner__item" style="--position: 7"><img src="../../assets/Post 7.png" alt="Image" /></div>
        <div class="banner__item" style="--position: 8"><img src="../../assets/Post 8.png" alt="Image" /></div>
        <div class="banner__item" style="--position: 9"><img src="../../assets/Post 9.png" alt="Image" /></div>
        <div class="banner__item" style="--position: 10"><img src="../../assets/Post 5.png" alt="Image" /></div>
      </div>
    </div>
    <div class="content" data-content="CSS ONLY">
      <h1 class=" text-4xl my-6 text-center text-red-800 uppercase font-bold">
        ONLY CSS
      </h1>
      <div class="content__author">
        <h2 class="uppercase">CSS only</h2>
        <b>Web Design</b>
      </div>
      <div class="content__model"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  position: relative;

  &__slider {
    position: absolute;
    width: 200px;
    height: 250px;
    top: 10%;
    left: calc(50% - 100px);
    transform-style: preserve-3d;
    transform: perspective(1000px);
    animation: autoRun 20s linear infinite;
    z-index: 2;
  }

  &__item {
    position: absolute;
    inset: 0 0 0 0;
    transform:
      rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
      translateZ(550px);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@keyframes autoRun {
  from {
    transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
  } to {
    transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
  }
}

.content {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(1400px, 100vw);
  height: max-content;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  h1 {
    font-size: 10em;
    line-height: 1em;
    position: relative;

    &::after {
      position: absolute;
      inset: 0 0 0 0;
      content: attr(data-content);
      z-index: 2;
      -webkit-text-stroke: 2px #d2d2d2;
      color: transparent;
    }
  }

  &__author {
    text-align: right;
    max-width: 200px;
    font-size: 2em;
  }

  &__model{
    background-image: url('../../assets/carrot.png');
    width: 100%;
    height: 85vh;
    position: absolute;
    bottom: 0;
    left: 0;
    background-size: auto 130%;
    background-repeat: no-repeat;
    background-position: top center;
    z-index: 1;
  }
}
</style>
