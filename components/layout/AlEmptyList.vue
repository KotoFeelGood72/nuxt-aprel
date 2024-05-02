<template>
  <div class="empty">
    <div class="container">
      <div class="empty_main">
        <div class="empty__img">
          <NuxtImg src="/empty-products.png" />
        </div>
        <div class="empty__content">
          <h2>Продуктов не найдено</h2>
          <p>Попробуйте изменить наименование нужного товара, или попробуйте позже</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.empty_main {
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 30px;
  border-radius: 20px;
}

.empty__content {
  h2 {
    margin: 30px 0 20px 0;
    font-size: 40px;
    font-weight: 700;
    color: #424242;
  }

  p {
    font-size: 16px;
    color: #979797;
    font-weight: 300;
  }
}
</style>
