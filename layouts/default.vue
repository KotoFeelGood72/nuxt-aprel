<template>
  <div class="main">
    <AlHeader />
    <slot />
    <transition name="fade-in">
      <AlProductModal v-if="modals.product" />
    </transition>
    <AlFooter />
  </div>
</template>

<script setup lang="ts">
import AlHeader from "~/components/templates/AlHeader.vue";
import AlFooter from "~/components/templates/AlFooter.vue";
import AlProductModal from "~/components/modal/AlProductModal.vue";
import { useModalStoreRefs } from "~/store/useModalStore";

const { modals } = useModalStoreRefs();
</script>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.3s;
}
.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
.fade-in-enter-to,
.fade-in-leave-from {
  opacity: 1;
}
</style>
