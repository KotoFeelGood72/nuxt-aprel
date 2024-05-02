<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_main">
        <p>Подпишитесь на нас в социальных сетях:</p>
        <ul class="social-links">
          <li v-for="(item, i) in socialList" :key="'social-link-' + i">
            <a :href="item.link"><svg-icon :name="item.icon" /></a>
          </li>
        </ul>
        <ul class="info-list">
          <li v-for="(item, i) in infoList" :key="'social-link-' + i">{{ item }}</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface socialLink {
  icon: string;
  link: string;
}
const socialList = ref<socialLink[]>([
  { icon: "vk", link: "/" },
  { icon: "yandex", link: "/" },
  { icon: "youtube", link: "/" },
  { icon: "tg", link: "/" },
  { icon: "ok", link: "/" },
  { icon: "viber", link: "/" },
  { icon: "pinterest", link: "/" },
]);

const infoList = ref<string[]>([
  "О проекте",
  "Политика конфиденциальности",
  "Пользовательское соглашение",
  "Вакансии",
  "Рекомендательные технологии",
  "Перекресток",
]);
</script>

<style scoped lang="scss">
.footer {
  background-color: #f0eeee70;
}
.footer_main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 564px;
  margin: 0 auto;
  padding: 60px 0;

  p {
    margin-bottom: 20px;
  }
}

.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  li {
    width: 50px;
    .icons {
      height: 50px;
    }
  }
}

.info-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  font-size: 12px;
  color: #919191;
  li {
    border-bottom: 1px solid #919191;
    position: relative;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      top: 55%;
      left: -10px;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background-color: #919191;
    }
  }
}
</style>
