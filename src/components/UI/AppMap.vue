<template>
  <div class="map">
    <a
      href="https://yandex.uz/maps/org/master_ielts/88085157502/?utm_medium=mapframe&utm_source=maps"
      class="map-title"
      >Master Ielts</a
    ><a
      href="https://yandex.uz/maps/10335/tashkent/category/further_education/184106162/?utm_medium=mapframe&utm_source=maps"
      class="map-description"
      >Дополнительное образование в Ташкенте</a
    >
    <iframe
      src="https://yandex.uz/map-widget/v1/org/master_ielts/88085157502/?ll=69.287408%2C41.355526&z=16.78"
      width="100%"
      height="400"
      frameborder="1"
      allowfullscreen="true"
      style="position: relative"
    ></iframe>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
  .map {
    position: relative;
    overflow: hidden;
  }

  .map-title {
    color: #eee;
    font-size: 12px;
    position: absolute;
    top: 0;
  }

  .map-description {
    color: #eee;
    font-size: 12px;
    position: absolute;
    top: 14px;
  }
</style>
