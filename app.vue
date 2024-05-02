<script setup lang="ts">
import { useAlFoodStore } from "./store/useAlFoodStore";

const { fetchFood } = useAlFoodStore();
await useAsyncData("food", () => fetchFood());
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
