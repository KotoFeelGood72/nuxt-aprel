<template>
  <ul class="products-grid">
    <li v-for="(product, i) in products" :key="'products-item-' + i">
      <ProductsItem :data="product" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { ItemTypes } from "~/types/ItemTypes";
import ProductsItem from "../card/ProductsItem.vue";
defineProps<{
  products: ItemTypes[];
}>();
</script>

<style scoped lang="scss">
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 20px;
}
</style>
