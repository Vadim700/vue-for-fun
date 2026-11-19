<template>
  <div class="avatar">
    <img class="avatar__img" src="../../assets/avatar.jpg" alt="Avatar" />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.avatar {
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  width: 102px;
  height: 102px;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
