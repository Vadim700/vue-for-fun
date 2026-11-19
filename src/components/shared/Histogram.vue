<template>
  <div class="histogram">
    <div class="histogram__header">
      <div class="histogram__orders">
        <div class="histogram__title">Total orders</div>
        <b class="histogram__numbers">50254</b>
      </div>
      <a href="#" class="histogram__link">View all</a>
    </div>
    <div class="histogram__body">
      <div class="histogram__element" style="height: 100%"></div>
      <div class="histogram__element" style="height: 70%"></div>
      <div class="histogram__element" style="height: 44%"></div>
      <div class="histogram__element" style="height: 78%"></div>
      <div class="histogram__element" style="height: 44%"></div>
      <div class="histogram__element" style="height: 60%"></div>
      <div class="histogram__element" style="height: 78%"></div>
      <div class="histogram__element" style="height: 100%"></div>
      <div class="histogram__element" style="height: 22%"></div>
      <div class="histogram__element" style="height: 44%"></div>
      <div class="histogram__element" style="height: 60%"></div>
      <div class="histogram__element" style="height: 70%"></div>
      <div class="histogram__element" style="height: 22%"></div>
      <div class="histogram__element" style="height: 100%"></div>
      <div class="histogram__element" style="height: 22%"></div>
      <div class="histogram__element" style="height: 78%"></div>
      <div class="histogram__element" style="height: 60%"></div>
      <div class="histogram__element" style="height: 44%"></div>
      <div class="histogram__element" style="height: 70%"></div>
      <div class="histogram__element" style="height: 60%"></div>
      <div class="histogram__element" style="height: 22%"></div>
      <div class="histogram__element" style="height: 78%"></div>
      <div class="histogram__element" style="height: 70%"></div>
      <div class="histogram__element" style="height: 90%"></div>
      <div class="histogram__element" style="height: 60%"></div>
      <div class="histogram__element" style="height: 22%"></div>
      <div class="histogram__element" style="height: 60%"></div>
      <div class="histogram__element" style="height: 22%"></div>
      <div class="histogram__element" style="height: 70%"></div>
      <div class="histogram__element" style="height: 34%"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.histogram {
  width: 100%;
  padding: 16px 24px 24px 24px;
  border-radius: 8px;
  background: var(--white);
  border: 1px solid var(--grey-3);
  box-sizing: border-box;

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  font-style: normal;
  color: var(--black);
}

.histogram_preview {
  width: 100%;
}

.histogram__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 39px;
}

.histogram__orders {
  text-align: left;
}

.histogram__title {
  margin-bottom: 6px;
}

.header__numbers {
  font-size: 20px;
  line-height: 1.3;
}

.histogram__link {
  color: var(--blue);
  padding-top: 3px;
  text-decoration: none;
  height: auto;
}

.histogram__body {
  display: flex;
  align-items: flex-end;
  height: 50px;
  column-gap: 1px;
}

.histogram__element {
  background-color: var(--blue);
  flex: auto;
}
</style>
