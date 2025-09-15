<script setup lang="ts">
  import AppBtn from '@/components/UI/AppBtn.vue'

  import eventBus from '@/constants/eventBus'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  function handleButtonClick() {
    eventBus.emit('scroll-to-auth')
  }
  const dataInfoIelts = computed(() => [
    {
      text: t('infoIelts.infoList.item1'),
      strong: t('infoIelts.infoList.item1Strong'),
      iconClass: 'fa-solid fa-circle-dot',
    },
    {
      text: t('infoIelts.infoList.item2'),
      strong: t('infoIelts.infoList.item2Strong'),
      iconClass: 'fa-solid fa-star',
    },
    {
      text: t('infoIelts.infoList.item3'),
      strong: t('infoIelts.infoList.item3Strong'),
      iconClass: 'fa-solid fa-circle-dot',
    },
  ])
</script>

<template>
  <div class="section container">
    <div class="section__content">
      <div class="section__content__header">
        <p class="section__content__header__title">
          {{ t('infoIelts.section.title1') }}<br />{{
            t('infoIelts.section.title2')
          }}<br />{{ t('infoIelts.section.title3') }}
        </p>
        <img
          src="/public/images/8+.webp"
          class="section__content__header__title__icon img-fluid"
          loading="lazy"
        />
        <p class="section__content__header__title">
          {{ t('infoIelts.section.title4') }} <br />
          {{ t('infoIelts.section.title5') }}
        </p>
      </div>
      <div class="section__content__infos">
        <div class="section__content__infos__image">
          <a
            href="https://www.instagram.com/reel/C_0igayNPx8/?igsh=eHI5emF2cmVubW9t"
            target="_blank"
          >
            <img
              class="section__content__infos__image__front"
              src="/public/images/m5.webp"
              loading="lazy"
            />
            <p class="section__content__infos__image__text">
              {{ t('infoIelts.section.infosText') }}
            </p>
          </a>
          <div class="section__content__infos__image__back" />
        </div>
        <div class="section__content__infos__text">
          <ul class="info-list">
            <li
              class="info-list__item"
              v-for="(items, index) in dataInfoIelts"
              :key="index"
            >
              <i :class="items.iconClass"></i>
              <div class="info-list__item__text">
                <p class="info-list__text">
                  {{ items.text }}
                  <span class="info-list__highlight"
                    ><strong>{{ items.strong }}</strong></span
                  >
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <app-btn
      @click="handleButtonClick"
      class="section__header-btn"
    />
  </div>
</template>
