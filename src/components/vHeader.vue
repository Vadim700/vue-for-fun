<template>
  <header class="header flex justify-between items-center py-4 px-16 bg-amber-900 text-white">
    <RouterLink to="/">
      <div class="header__logo text-2xl"></div>
    </RouterLink>
    <nav ref="menuList" class="header__menu menu relative">
      <ul class="menu__list flex gap-12 text-2xl">
        <li v-for="item of menu" :key="item.link" class="menu__item">
          <RouterLink
            @click="onClickMenuItem"
            :to="item.link"
            class="menu__link hover:text-yellow-500"
            activeClass="text-yellow-500 active-link"
            >{{ item.label }}</RouterLink
          >
        </li>
      </ul>
      <span
        ref="underline"
        class="inline-block h-0.5 bg-yellow-500 absolute transition-all duration-200 ease-in-out"
        :class="{ 'opacity-0': !showUnderline }"
        :style="{
          width: boundingClientRect.width + 'px',
          left: boundingClientRect.left + 'px',
          top: boundingClientRect.top + 'px',
        }"
      ></span>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const boundingClientRect = ref({ width: 0, left: 0, top: 0 })
const showUnderline = ref(false)
const menuList = ref(null)

const menu = [
  {
    label: 'Posts',
    link: '/posts',
  },
  {
    label: 'Todos',
    link: '/todos',
  },
  {
    label: 'OnlyCSS',
    link: '/onlycss',
  },
  {
    label: 'UI',
    link: '/ui',
  },
  {
    label: 'FunJS',
    link: '/funjs',
  },
  {
    label: 'Gallery',
    link: '/gallery',
  },
]
const updateUnderlinePosition = () => {
  const activeLink = menuList.value?.querySelector('.active-link')

  if (activeLink) {
    const { width, left, top, height } = activeLink.getBoundingClientRect()
    const navRect = menuList.value.getBoundingClientRect()

    boundingClientRect.value = {
      width: width,
      left: left - navRect.left,
      top: top + height + 4 - navRect.top,
    }
    showUnderline.value = true
  } else {
    showUnderline.value = false
  }
}

const onClickMenuItem = (e) => {
  nextTick(() => {
    updateUnderlinePosition()
  })
}

watch(
  () => route.path,
  () => {
    nextTick(() => {
      updateUnderlinePosition() // сделать это, когда изменится url
    })
  },
)

onMounted(() => {
  nextTick(() => {
    updateUnderlinePosition()
  })

  window.addEventListener('resize', updateUnderlinePosition)
})
</script>

<style scoped lang="scss">
.header {
  &__logo {
    width: 30px;
    height: 60px;
    border: 15px solid transparent;

    border-bottom: 30px solid #fff;
    transform: translateY(-20%);
    transition: all 0.2s ease 0s;
  }
}

.menu {
  position: relative;

  &__list {
    position: relative;
    z-index: 1;
  }

  span {
    position: absolute;
    z-index: 0;
  }
}

.router-link-exact-active .header__logo {
  border-bottom: 30px solid #f0b100;
}
</style>
