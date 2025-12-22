<template>
  <img :src="getImageSrc(imageName)" alt="Dynamic image" />
</template>

<script>
export default {
  props: ['imageName'],
  methods: {
    getImageSrc(name) {
      // Возвращает путь к изображению из assets
      return require(`@/assets/products/${name}.jpg`)
    },
  },
}
</script>
