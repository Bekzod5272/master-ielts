<script setup lang="ts">
  import MainInfoPage from '@/components/MainInfoPage.vue'
  import InfoForIelts from '@/components/InfoForIelts.vue'
  import AboutMentors from '@/components/AboutMentors.vue'
  import AboutCourse from '@/components/AboutCourse.vue'
  import AboutEducation from '@/components/AboutEducation.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import LocationMap from '@/components/LocationMap.vue'
  import { nextTick, onMounted, ref } from 'vue'
  import eventBus from '@/constants/eventBus'
  import ContactUsForm from '@/components/UI/ContactUsForm.vue'
  import { dataVideoLinksFirst } from '@/constants/video-links'
  import { updateLang } from './plugins/i18n'

  const mainInfoPageRef: any = ref(null)
  const infoForIeltsRef: any = ref(null)
  const aboutMentorsRef: any = ref(null)
  const aboutCourseRef: any = ref(null)
  const aboutEducationRef: any = ref(null)
  const authFormContainerRef: any = ref(null)
  const toggleMenu = ref(false)

  const currentLang = ref(localStorage.getItem('lang') || 'uz')

  function changeLang(lang: string) {
    currentLang.value = lang
    updateLang(lang as 'uz' | 'ru')
  }

  function scrollToAuthPage() {
    nextTick(() => {
      authFormContainerRef.value.scrollIntoView({ behavior: 'smooth' })
    })
  }

  function scrollToAboutCourses() {
    nextTick(() => {
      aboutCourseRef.value.scrollIntoView({ behavior: 'smooth' })
    })
  }
  function scrollToResult() {
    nextTick(() => {
      if (aboutEducationRef.value) {
        const element: any = aboutEducationRef.value
        const top = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: top + 360,
          behavior: 'smooth',
        })
      }
    })
  }

  function scrollToMainInfoPage() {
    toggleMenu.value = false
    nextTick(() => {
      if (mainInfoPageRef.value) {
        mainInfoPageRef.value.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  function scrollToInfoForIeltsIn() {
    toggleMenu.value = false
    nextTick(() => {
      if (infoForIeltsRef.value) {
        infoForIeltsRef.value.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  function scrollToAboutMentors() {
    toggleMenu.value = false
    nextTick(() => {
      if (aboutMentorsRef.value) {
        aboutMentorsRef.value.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  function scrollToAboutCourse() {
    toggleMenu.value = false
    nextTick(() => {
      if (aboutCourseRef.value) {
        aboutCourseRef.value.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  function scrollToAboutEducation() {
    toggleMenu.value = false
    nextTick(() => {
      if (aboutEducationRef.value) {
        aboutEducationRef.value.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  function toggleModal() {
    toggleMenu.value = !toggleMenu.value
  }

  const img = dataVideoLinksFirst.map((url) => url.path)
  onMounted(() => {
    eventBus.on('scroll-to-about-course', scrollToAboutCourses)
    eventBus.on('scroll-to-auth', scrollToAuthPage)
    eventBus.on('scroll-to-about-education', scrollToAboutEducation)
    eventBus.on('scroll-to-about-result', scrollToResult)
    eventBus.on('scroll-to-about-mentors', scrollToAboutMentors)
  })
</script>

<template>
  <div class="main main-container">
    <div class="lang-switcher">
      <button
        :class="{ active: currentLang === 'uz' }"
        @click="changeLang('uz')"
      >
        UZ
      </button>
      <button
        :class="{ active: currentLang === 'ru' }"
        @click="changeLang('ru')"
      >
        RU
      </button>
    </div>
    <div class="main__header-menu">
      <div class="main__header-menu__icon">
        <i
          class="fa-solid fa-bars"
          @click="toggleModal"
        />
      </div>
      <ul
        v-show="toggleMenu"
        :class="{ 'enter-active': toggleMenu }"
      >
        <li @click="scrollToMainInfoPage()">
          Main menu
          <hr />
        </li>
        <li @click="scrollToInfoForIeltsIn()">
          Speakingdan 8 olish uchun...
          <hr />
        </li>
        <li @click="scrollToAboutMentors()">
          IELTS 7+ olish uchun ...
          <hr />
        </li>
        <li @click="scrollToAboutCourse()">
          Bizning kurslar
          <hr />
        </li>
        <li @click="scrollToAboutEducation()">
          Galereya
          <hr />
        </li>
        <li @click="scrollToAuthPage()">
          Ro'yxatdan o'tish
          <hr />
        </li>
      </ul>
    </div>
    <main-info-page ref="mainInfoPage" />
    <div class="infos-for-ielts">
      <div ref="infoForIeltsRef">
        <info-for-ielts />
      </div>
      <div ref="aboutMentorsRef">
        <about-mentors />
      </div>
      <div ref="aboutCourseRef">
        <about-course />
      </div>
    </div>
    <div
      class="main-info-education"
      ref="aboutEducationRef"
    >
      <div class="main-info-education__contents">
        <about-education />
        <div ref="authFormContainerRef">
          <contact-us-form />
        </div>
      </div>
      <location-map />
      <app-footer />
    </div>
  </div>
</template>
<style lang="scss">
  .main {
    width: 100%;
    height: 100%;
    background-image: url('/images/bg2.webp');
    background-size: cover;
    background-position: top;
    position: relative;

    &__header-menu {
      display: none;
      transition: display 2s;
      @media (max-width: 768px) {
        display: block;
        width: fit-content;
        padding-top: 10px;
        margin-left: auto;
        margin-right: 20px;
        position: absolute;
        z-index: 111;
        right: 0;

        &__icon {
          width: 100%;
          display: flex;
          justify-content: end;
        }
        i {
          font-size: 40px;
          color: #fff;
        }
        ul {
          width: 100%;
          background: #af34ee;
          padding: 20px;
          color: white;
          font-size: 17px;

          li {
            cursor: pointer;
            pointer-events: auto;
          }
        }
      }
    }
  }

  .infos-for-ielts {
    position: relative;
    margin: 0 auto;
    z-index: 15;
    top: -8%;
    transform: translateY(-8%);
    @media (max-width: 991px) {
      top: -2%;
      transform: translateY(-2%);
    }
    @media (max-width: 576px) {
      padding: 0 10px;
    }
    @media (max-width: 430px) {
      top: -5%;
      transform: translateY(-5%);
    }
  }

  .main-info-education {
    position: relative;
    bottom: 50px;

    &__contents {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.8) 10%,
        rgba(0, 0, 0, 0.9) 20%,
        rgba(0, 0, 0, 0.7) 80%,
        rgba(0, 0, 0, 0) 100%
      );
      @media (max-width: 991px) {
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.9) 20%,
          rgba(0, 0, 0, 0.4) 80%,
          rgba(0, 0, 0, 0) 100%
        );
      }
    }
  }
  .lang-switcher {
    display: flex;
    gap: 10px;
    position: absolute;
    z-index: 1111;
    top: 20px;
    right: 20px;
    font-size: 14px;
  }
  button {
    padding: 4px;
    border: none;
    background: #eee;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
  .active {
    background: #af34ee;
    color: white;
  }
</style>
