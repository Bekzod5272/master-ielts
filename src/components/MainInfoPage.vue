<script setup lang="ts">
  import AppBtn from '@/components/UI/AppBtn.vue'

  import eventBus from '@/constants/eventBus'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const { locale } = useI18n()
  function handleButtonClick() {
    console.log('csc')
    eventBus.emit('scroll-to-auth')
  }
</script>
<template>
  <div class="master-ielts container">
    <div class="master-ielts__image">
      <img
        src="/public/images/im2.webp"
        alt="Person's image"
        loading="lazy"
      />
    </div>
    <p class="master-ielts__hide-name">{{ t('main.hideName') }}</p>
    <h1 class="master-ielts__title">{{ t('main.title') }}</h1>
    <div class="master-ielts__content">
      <div class="master-ielts__content__text">
        <span class="master-ielts__subtitle">{{ t('main.hideName') }}</span>
        <p class="master-ielts__description">
          {{ t('main.content.subtitle') }} <strong>{{ t('ielts') }}</strong>
          {{ t('main.content.subtitle2') }}
        </p>
      </div>
    </div>
    <div class="master-ielts__content__call">
      <app-btn
        @click="handleButtonClick"
        class="master-ielts__content__call__btn"
      />
      <p class="master-ielts__extra-text">
        {{ t('main.contentCall.text1') }}<br />
        {{ t('main.contentCall.text2') }}<br />
        {{ t('main.contentCall.text3') }}
      </p>
      <img
        src="/public/images/fon4.webp"
        class="master-ielts__content__call__img"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style src="../assets/main.scss" lang="scss" />
