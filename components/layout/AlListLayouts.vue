<template>
  <ul class="products-list">
    <li v-for="(product, i) in products" :key="'products-item-' + i">
      <ProductsListItem :data="product" class="list-item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import ProductsListItem from "../card/ProductsListItem.vue";
import type { ItemTypes } from "~/types/ItemTypes";
defineProps<{
  products: ItemTypes[];
}>();
</script>

<style scoped lang="scss">
.products-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
