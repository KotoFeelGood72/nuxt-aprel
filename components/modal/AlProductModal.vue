<template>
  <div class="productModal">
    <div class="productModal__bg" @click="closeModalProduct()"></div>
    <div class="productModal__main">
      <div class="productModal__close" @click="closeModalProduct()">
        <svg-icon name="close" />
      </div>
      <div class="productModal__img">
        <NuxtImg :src="product.linkImagen" />
      </div>
      <div class="productModal__content">
        <div class="productModal__title">
          <h3>{{ product.nombre }}</h3>
          <p>{{ product.descripcion }}</p>
        </div>
        <div class="productModal__info">
          <ul>
            <li>
              <p>Price:</p>
              <span>{{ product.precio }}</span>
            </li>
            <li>
              <p>Balanc:</p>
              <span>{{ product.tasaIva }}</span>
            </li>
            <li>
              <p>Created at:</p>
              <span>{{ formatDate(product.created_at) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDateFormat } from "~/composables/useDateFormat";
import { useAlFoodStoreRefs, useAlFoodStore } from "~/store/useAlFoodStore";
import { useModalStore } from "~/store/useModalStore";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const { product } = useAlFoodStoreRefs();
const { clearProductModal } = useAlFoodStore();
const { formatDate } = useDateFormat();
const { closeModal } = useModalStore();

function closeModalProduct() {
  closeModal("product");
  clearProductModal();

  const updatedQuery = { ...route.query };
  delete updatedQuery.productId;

  router.push({ path: route.path, query: updatedQuery });
}
</script>

<style scoped lang="scss">
.productModal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.productModal__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000006c;
}

.productModal__main {
  position: relative;
  background-color: #fff;
  max-width: 800px;
  width: 100%;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
}

.productModal__img {
  max-width: 50%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.productModal__content {
  max-width: 50%;
  padding: 30px;
}

.productModal__title {
  margin-bottom: 40px;
  h3 {
    font-size: 35px;
    font-weight: 600;
    color: #424242;
    margin-bottom: 20px;
  }
}

.productModal__info {
  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      color: #7c7c7c;
      font-size: 14px;
      &:not(:last-child) {
        margin-bottom: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid #e9e9e9;
      }
    }
  }
}

.productModal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  .icons {
    height: 25px;
  }
}
</style>
