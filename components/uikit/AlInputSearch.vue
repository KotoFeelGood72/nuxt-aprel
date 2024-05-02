<template>
  <div class="input-search">
    <input
      type="search"
      name="search for products"
      placeholder="Search..."
      v-model="searchQuery"
    />
  </div>
</template>

<script setup lang="ts">
import { useSearchQuery } from "~/composables/useSearchQuery";

const { searchQuery } = useSearchQuery();
</script>

<style scoped lang="scss">
.input-search {
  background-color: #f5f5f5;
  border-radius: 50px;

  input {
    appearance: none;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    color: #424242;
    font-size: 16px;
    padding: 10px 15px;
  }
}
</style>
