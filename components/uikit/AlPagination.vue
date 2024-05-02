<template>
  <div class="pagination_nav__w">
    <button
      @click="setPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="pagination__btn"
    >
      <svg-icon name="prev" />
    </button>
    <div class="pagination__nav">
      <ul>
        <li
          v-for="n in pageCount"
          :key="n"
          @click="setPage(n)"
          :class="{ active: n === currentPage }"
        >
          {{ n }}
        </li>
      </ul>
    </div>
    <button
      @click="setPage(currentPage + 1)"
      :disabled="currentPage === pageCount"
      class="pagination__btn"
    >
      <svg-icon name="next" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from "vue";

const emit = defineEmits(["update:page"]);

const props = withDefaults(
  defineProps<{
    currentPage: number;
    pageCount: number;
  }>(),
  {
    currentPage: 1,
    pageCount: 0,
  }
);

function setPage(pageNumber: number) {
  if (pageNumber < 1 || pageNumber > props.pageCount) return;
  emit("update:page", pageNumber);
}
</script>

<style scoped lang="scss">
.pagination_nav__w,
.pagination__btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination_nav__w {
  background-color: #e7e6e6;
  border-radius: 50px;
  display: inline-flex;
  overflow: hidden;
}

.pagination__btn {
  width: 35px;
  height: 35px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f1f1f1;
  }
  .icons {
    width: 15px;
    height: 15px;
  }
}

.pagination__nav {
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px;
    li {
      cursor: pointer;
      width: 35px;
      height: 35px;
      font-size: 16px;

      color: #424242;
      display: flex;
      align-items: center;
      justify-content: center;

      &.active {
        background-color: #e4002b;
        color: #ffffff;
      }
    }
  }
}
</style>
