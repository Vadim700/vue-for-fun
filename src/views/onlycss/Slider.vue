<template>
  <div>
    <div class="banner">
      <div class="banner__slider" style="--quantity: 10">
        <div class="banner__item" style="--position: 1"><img src="../../assets/bird-1.jpg" alt="Image" /></div>
        <div class="banner__item" style="--position: 2"><img src="../../assets/bird-2.jpg" alt="Image" /></div>
        <div class="banner__item" style="--position: 3"><img src="../../assets/bird-3.jpg" alt="Image" /></div>
        <div class="banner__item" style="--position: 4"><img src="../../assets/bird-4.jpg" alt="Image" /></div>
        <div class="banner__item" style="--position: 5"><img src="../../assets/bird-5.jpg" alt="Image" /></div>
        <div class="banner__item" style="--position: 6"><img src="../../assets/bird-6.jpg" alt="Image" /></div>
        <div class="banner__item" style="--position: 7"><img src="../../assets/bird-7.jpg" alt="Image" /></div>
        <div class="banner__item" style="--position: 8"><img src="../../assets/bird-8.jpg" alt="Image" /></div>
        <div class="banner__item" style="--position: 9"><img src="../../assets/bird-9.jpg" alt="Image" /></div>
        <div class="banner__item" style="--position: 10"><img src="../../assets/bird-10.jpg" alt="Image" /></div>
      </div>
    </div>
    <div class="content" data-content="CSS ONLY">
      <div class="content__model"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 80vh;
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
    transform: perspective(800px);
    animation: autoRun 20s linear infinite;
    z-index: 2;
    transition: all 3s;
  }

  @keyframes autoRun {
    from {
      transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
    } to {
      transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
    }
  }


  &__item {
    position: absolute;
    border-radius: 6px;
    overflow: hidden;
    inset: 0 0 0 0;
    transform:
      rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
      translateZ(28vw);

      cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.2s;

      &:hover{
        scale: 1.2;
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
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  &__model{
    background-image: url('../../assets/tree.png');
    width: 100%;
    height: 66vh;
    position: absolute;
    bottom: -32px;
    left: 5%;
    background-size: auto 130%;
    background-repeat: no-repeat;
    background-position: top center;
    z-index: 1;
  }
}
</style>
