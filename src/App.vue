<script setup lang="ts">
import MainInfoPage from '@/components/MainInfoPage.vue'
import InfoForIelts from "@/components/InfoForIelts.vue";
import AboutMentors from "@/components/AboutMentors.vue";
import AboutCourse from "@/components/AboutCourse.vue";
import AboutEducation from "@/components/AboutEducation.vue";
import AppFooter from "@/components/AppFooter.vue";
import LocationMap from "@/components/LocationMap.vue";
import {nextTick, onMounted, ref} from 'vue';
import eventBus from '@/constants/eventBus';
import Vue3Marquee from "vue3-marquee";
import ContactUsForm from "@/components/UI/ContactUsForm.vue";
import {dataVideoLinksFirst} from "@/constants/video-links";
import * as url from "node:url";

const authFormContainerRef = ref(null);

function scrollToAuthPage() {
  nextTick(() => {
    if (authFormContainerRef.value) {
      authFormContainerRef.value.scrollIntoView({behavior: 'smooth'});
    } else {
      console.log("authPageRef.value is null");
    }
  });
}

const img = dataVideoLinksFirst.map(url => url.path)
onMounted(() => {
  eventBus.on('scroll-to-auth', scrollToAuthPage);
});
</script>

<template>
  <div class="main main-container">
    <main-info-page/>
    <div class="infos-for-ielts">
      <info-for-ielts/>
      <about-mentors/>
      <about-course/>
    </div>
    <div class="main-info-education">
      <div class="main-info-education__contents">
        <about-education/>
        <div ref="authFormContainerRef">
          <contact-us-form/>
        </div>
      </div>
      <location-map/>
      <app-footer/>
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
    padding: 0 30px;
  }
  @media (max-width: 430px) {
    top: -5%;
    transform: translateY(-5%);
  }
}

.main-info-education {
  position: relative;
  bottom: 0;

  &__contents {
    background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.0) 0%,
            rgba(0, 0, 0, 0.9) 20%,
            rgba(0, 0, 0, 0.7) 80%,
            rgba(0, 0, 0, 0.0) 100%
    );
    @media (max-width: 991px) {
      background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.0) 0%,
              rgba(0, 0, 0, 0.9) 20%,
              rgba(0, 0, 0, 0.4) 80%,
              rgba(0, 0, 0, 0.0) 100%
      );
    }
  }
}

</style>
