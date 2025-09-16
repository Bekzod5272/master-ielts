<script setup>
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n()
</script>
<template>
  <div class="custom-button">
    <img
      :src="locale === 'uz' ? '/images/knopka.webp' : '/images/button_2.webp'"
      loading="lazy"
    />
  </div>
</template>

<style lang="scss">
  .custom-button {
    cursor: pointer;
    position: relative;
    z-index: 5555;
    img {
      width: 220px;
      object-fit: cover;
      object-position: center;
      @media (max-width: 768px) {
        width: 180px;
      }
      @media (max-width: 576px) {
        width: 150px;
      }
    }
  }
</style>
