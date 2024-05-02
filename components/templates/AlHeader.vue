<template>
  <header class="header" :class="{ active: isScroll }">
    <div class="container">
      <div class="header_main">
        <div class="header__logo">
          <NuxtLink>
            <NuxtImg
              src="https://www.clipartmax.com/png/full/118-1188618_1649-%C3%97-728200-fast-food-store-logo.png"
            />
          </NuxtLink>
        </div>
        <div class="header_main__action">
          <div class="search-bar">
            <AlInputSearch />
          </div>
          <div class="header__btn">
            <button type="button">Посмотреть меню</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AlInputSearch from "../uikit/AlInputSearch.vue";

const isScroll = ref<boolean>(false);

function scrollHeader() {
  isScroll.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener("scroll", scrollHeader);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHeader);
});
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff5d;
  backdrop-filter: blur(20px);
}

.header_main,
.header_main__action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header_main {
  padding: 10px 20px;
}

.header_main__action {
  gap: 20px;
  max-width: 600px;
  width: 100%;

  .search-bar {
    flex-grow: 1;
  }
}

.header__logo {
  max-width: 150px;
}

.header__btn {
  button {
    background-color: #e4002b;
    padding: 10px 25px;
    border-radius: 50px;
    color: #fff;
  }
}
</style>
