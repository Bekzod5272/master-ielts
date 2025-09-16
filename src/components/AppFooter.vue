<script setup lang="ts">
  import eventBus from '@/constants/eventBus'
  import { useI18n } from 'vue-i18n'
  function handleCoursesClick(type) {
    eventBus.emit(type)
  }
  const { t } = useI18n()
</script>
<template>
  <div class="footer container">
    <div class="footer__container">
      <div class="footer__logo">
        <img
          src="/public/images/master-ielts-word2.png"
          alt="master-ielts-word2"
          loading="lazy"
        />
      </div>
      <div class="footer__nav">
        <div>
          <p class="footer__nav__title">{{ t('footer.infos') }}</p>
          <ul class="footer__nav__list">
            <li>
              <a @click="handleCoursesClick('scroll-to-about-education')">
                {{ t('footer.aboutUs') }}
              </a>
            </li>
            <li>
              <a @click="handleCoursesClick('scroll-to-about-result')">
                {{ t('footer.results') }}
              </a>
            </li>
            <li>
              <a @click="handleCoursesClick('scroll-to-about-course')">
                {{ t('footer.courses') }}
              </a>
            </li>
            <li>
              <a @click="handleCoursesClick('scroll-to-about-mentors')">
                {{ t('footer.teachers') }}
              </a>
            </li>
            <li>
              <a @click="handleCoursesClick('scroll-to-auth')">
                {{ t('footer.contacts') }}
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__hours">
          <p class="footer__nav__title">{{ t('footer.timeWork') }}</p>
          <ul>
            <li>{{ t('footer.mondaySaturday') }}</li>
            <li>10:00 - 20:00</li>
            <li>13:00 - 14:00</li>
          </ul>
        </div>
        <div class="footer__address">
          <p class="footer__address__title">{{ t('footer.address') }}</p>
          <p class="footer__address__region">{{ t('footer.region') }}</p>
          <div class="footer__social">
            <a
              href="https://t.me/ielts_masterielts"
              target="_blank"
              ><i class="fa-brands fa-telegram"></i
            ></a>
            <a
              href="https://www.facebook.com/masterielts.uz/"
              target="_blank"
              ><i class="fa-brands fa-facebook"></i
            ></a>
            <a
              href="https://www.instagram.com/ielts_masterielts"
              target="_blank"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a
              href="https://www.youtube.com/channel/UCFSHwAgBxpZ6-g9bxrD5sjQ"
              target="_blank"
              ><i class="fa-brands fa-youtube"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
