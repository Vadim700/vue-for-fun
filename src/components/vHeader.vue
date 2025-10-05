<template>
  <header class="header flex justify-between items-center py-4 px-16 bg-amber-900 text-white">
    <RouterLink to="/">
      <div class="header__logo text-2xl"></div>
    </RouterLink>
    <nav class="header__menu menu">
      <ul class="menu__list flex gap-12 text-2xl">
        <li class="menu__item hover:underline">
          <RouterLink
            to="/posts"
            class="menu__link hover:text-yellow-500"
            activeClass="text-yellow-500 underline"
            >Posts</RouterLink
          >
        </li>
        <li class="menu__item hover:underline">
          <RouterLink
            to="/todos"
            class="menu__link hover:text-yellow-500"
            activeClass="text-yellow-500 underline"
            >Todos</RouterLink
          >
        </li>
        <li class="menu__item hover:underline">
          <RouterLink
            to="/onlycss"
            class="menu__link hover:text-yellow-500"
            activeClass="text-yellow-500 underline"
            >OnlyCSS</RouterLink
          >
        </li>
        <li class="menu__item hover:underline">
          <RouterLink
            to="/ui"
            class="menu__link hover:text-yellow-500"
            activeClass="text-yellow-500 underline"
            >UI</RouterLink
          >
        </li>
        <li class="menu__item hover:underline">
          <RouterLink
            to="/funjs"
            class="menu__link hover:text-yellow-500"
            activeClass="text-yellow-500 underline"
            >FunJS</RouterLink
          >
        </li>
        <li class="menu__item hover:underline">
          <RouterLink
            to="/gallery"
            class="menu__link hover:text-yellow-500"
            activeClass="text-yellow-500 underline"
            >Gallery</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  .router-link-active .header__logo {
    border-bottom-color: #f0b100;
  }

  &__logo {
    width: 30px;
    height: 60px;
    border: 15px solid transparent;
    border-bottom: 30px solid #fff;
    transform: translateY(-20%);
    transition: all 0.2s ease 0s;

    &:hover {
      border-bottom-color: #f0b100;
    }
  }
}

.menu {
  &__item {
    text-underline-offset: 9px;
  }
}
</style>
