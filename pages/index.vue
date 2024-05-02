<template>
  <div class="home-page">
    <section class="hero">
      <div class="container">
        <div class="hero_main">
          <div class="hero__banner">
            <NuxtImg
              src="https://s82079.cdn.ngenix.net/625x480/68a0ndamibrq4h02a6ep4ozl7rdp"
            />
          </div>
          <div class="hero__banner">
            <NuxtImg
              src="https://s82079.cdn.ngenix.net/625x480/hsewv4resnnfpbe5tph95n6e14nu"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="products">
      <div class="container">
        <div class="products_main">
          <div class="products_main__head">
            <h2>Пицца</h2>
            <div class="products_change__layout">
              <button
                type="button"
                @click="setCurrentLayout('grid')"
                :class="{ active: currentLayout === 'grid' }"
              >
                <svg-icon name="grid" />
              </button>
              <button
                type="button"
                @click="setCurrentLayout('list')"
                :class="{ active: currentLayout === 'list' }"
              >
                <svg-icon name="list" />
              </button>
            </div>
          </div>
          <component :is="currentLayoutComponent" :products="paginatedItems" />
          <AlEmptyList v-if="paginatedItems.length === 0" />
        </div>
        <AlPagination
          v-if="paginatedItems.length !== 0"
          :currentPage="currentPage"
          :pageCount="pageCount"
          @update:page="pagePaginate"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { ItemTypes } from "~/types/ItemTypes";
import { useAlFoodStoreRefs } from "~/store/useAlFoodStore";
import { useRoute } from "vue-router";
import { usePagination } from "~/composables/usePagination";
import AlGridLayouts from "~/components/layout/AlGridLayouts.vue";
import AlListLayouts from "~/components/layout/AlListLayouts.vue";
import AlEmptyList from "~/components/layout/AlEmptyList.vue";
import AlPagination from "~/components/uikit/AlPagination.vue";

const { food } = useAlFoodStoreRefs();
const route = useRoute();

const currentLayout = ref<"grid" | "list">("grid");
const pageSize = ref<number>(6);

const currentLayoutComponent = computed(() => {
  return currentLayout.value === "grid" ? AlGridLayouts : AlListLayouts;
});

const query = computed(() => {
  const searchQuery = route.query.search;
  if (!searchQuery) {
    return "";
  }
  const queryValue = Array.isArray(searchQuery) ? searchQuery[0] : searchQuery;
  return queryValue ? queryValue.toString().toLowerCase() : "";
});

const filteredProducts = computed(() => {
  return food.value.filter((product: ItemTypes) => {
    return (
      !query.value ||
      product.nombre.toLowerCase().includes(query.value) ||
      product.descripcion.toLowerCase().includes(query.value) ||
      product.precio?.toString().includes(query.value)
    );
  });
});

const { currentPage, pageCount, paginatedItems, setPage } = usePagination(
  filteredProducts,
  pageSize.value
);

function pagePaginate(newPage: number) {
  setPage(newPage);
}

function setCurrentLayout(layout: "grid" | "list") {
  currentLayout.value = layout;
}

watch(filteredProducts, () => {
  setPage(1);
});
</script>

<style scoped lang="scss">
.home-page {
  padding: 126px 0 80px 0;
}

.hero_main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.hero__banner {
  flex-grow: 1;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.products_main {
  padding: 50px 0 30px 0;
}

.products_main__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  h2 {
    font-size: 40px;
    font-weight: 700;
    color: #424242;
  }
}

.products_change__layout {
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  gap: 20px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(100% - 10px);
    border-right: 1px solid #b6b6b6;
    z-index: 3;
  }
  button {
    stroke: #9c9c9c;
    stroke-width: 1.5;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      stroke: #e4002b;
    }
  }
}
</style>
