<script setup lang="ts">
  import AppBtn from '@/components/UI/AppBtn.vue'
  import 'swiper/swiper-bundle.min.css'
  import AppSwiper from '@/components/UI/AppSwiper.vue'
  import eventBus from '@/constants/eventBus'
  import { useI18n } from 'vue-i18n'
  import { computed } from 'vue'

  function handleButtonClick() {
    eventBus.emit('scroll-to-auth')
  }
  const { t } = useI18n()
  const dataInfoCourseFirstPage = computed(() => [
    {
      id: 1,
      btnText: t('aboutCourse.dataText.text1.btnText'),
      text: t('aboutCourse.dataText.text1.text'),
      path: '/images/bk1.webp',
    },
    {
      id: 2,
      btnText: t('aboutCourse.dataText.text2.btnText'),
      text: t('aboutCourse.dataText.text2.text'),
      path: '/images/bk2.webp',
    },
    {
      id: 3,
      btnText: t('aboutCourse.dataText.text3.btnText'),
      text: t('aboutCourse.dataText.text3.text'),
      path: '/images/ielts-pro.webp',
    },
  ])
  const dataInfoCourseSecondPage = computed(() => [
    {
      id: 4,
      btnText: t('aboutCourse.dataText.text4.btnText'),
      text: t('aboutCourse.dataText.text4.text'),
      path: '/images/cefr1.webp',
    },
    {
      id: 5,
      btnText: t('aboutCourse.dataText.text5.btnText'),
      text: t('aboutCourse.dataText.text5.text'),
      path: '/images/ielts.speaking.webp',
    },
  ])
  const combinedArray = dataInfoCourseFirstPage.value.concat(
    dataInfoCourseSecondPage.value
  )
</script>
<template>
  <div class="about-ielts container">
    <div class="about-ielts__content">
      <app-swiper :data="combinedArray" />
    </div>

    <div class="about-ielts__courses">
      <div class="course-list">
        <div class="about-ielts__header">
          <h2 class="about-ielts__title">
            {{ t('aboutCourse.our') }}
            <br /><span>
              {{ t('aboutCourse.course') }}
            </span>
          </h2>
        </div>
        <div
          class="course-list-left"
          v-for="(items, index) in dataInfoCourseFirstPage"
          :key="index"
        >
          <div class="course-list__item">
            <div class="course-list__item__content">
              <div class="course-list__item__content__info">
                <button class="course-list__item-title">
                  {{ items.btnText }}
                </button>
                <p class="course-list__item-description">
                  {{ items.text }}
                </p>
              </div>
              <div class="course-list__item-image">
                <img
                  :src="items.path"
                  :alt="items.path"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course-list-right">
        <div
          class="course-list-right__items"
          v-for="(items, index) in dataInfoCourseSecondPage"
          :key="index"
        >
          <div class="course-list__item">
            <div class="course-list__item__content">
              <div class="course-list__item__content__info">
                <button class="course-list__item-title">
                  {{ items.btnText }}
                </button>
                <p class="course-list__item-description">
                  {{ items.text }}
                </p>
              </div>
              <div class="course-list__item-image">
                <img
                  :src="items.path"
                  :alt="items.path"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="course-list-right__footer">
          <img
            src="/public/images/about-ielts-back.webp"
            class="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <app-btn
      class="about-ielts__footer-btn"
      @click="handleButtonClick()"
    />
  </div>
</template>
