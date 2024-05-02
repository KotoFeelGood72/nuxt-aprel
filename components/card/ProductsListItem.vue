<template>
  <div
    v-if="data && data.id"
    class="products-list-item"
    @click="openModalProduct(data.id)"
  >
    <div class="products_item__img">
      <NuxtImg :src="imageUrl" />
    </div>
    <div class="products_item__content">
      <div class="products_item__title">
        <h3>{{ data.nombre }}</h3>
        <p>{{ data.descripcion }}</p>
      </div>
      <div class="products_item__info">
        <div class="products_item__price">Price: {{ data.precio }}</div>
        <div class="products_item__tasaiva">Balans: {{ data.tasaIva }}</div>
      </div>
      <div class="products_item__created">{{ formatDate(data.created_at) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ItemTypes } from "~/types/ItemTypes";
import { defineProps, computed } from "vue";
import { useDateFormat } from "~/composables/useDateFormat";
import { useModalStore } from "~/store/useModalStore";
import { useAlFoodStore } from "~/store/useAlFoodStore";
import { useRouter } from "vue-router";
const props = defineProps<{
  data: ItemTypes;
}>();

const router = useRouter();
const { openModal } = useModalStore();
const { formatDate } = useDateFormat();
const { setCurrentProduct } = useAlFoodStore();

const imageUrl = computed(() => {
  return props.data.linkImagen || "/empty.jpg";
});

function openModalProduct(id: number) {
  setCurrentProduct(id).then(() => {
    openModal("product");
    router.push({
      path: router.currentRoute.value.path,
      query: { productId: id.toString() },
    });
  });
}
</script>

<style scoped lang="scss">
.products-list-item {
  color: #424242;
  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: #fafafa;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  gap: 30px;

  &:hover {
    background-color: #eeebeb;
  }
}

.products_item__img {
  max-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.products_item__content {
  padding: 20px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.products_item__title {
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    color: #919191;
  }
}

.products_item__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.products_item__price {
  font-size: 22px;
  font-weight: 600;
  color: #e4002b;
  margin-right: 20px;
}

.products_item__created {
  font-size: 12px;
  color: #919191;
}
</style>
