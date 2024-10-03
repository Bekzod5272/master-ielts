<script setup lang="ts">
import MainInfoPage from '@/components/MainInfoPage.vue'
import InfoForIelts from "@/components/InfoForIelts.vue";
import AboutMentors from "@/components/AboutMentors.vue";
import AboutCourse from "@/components/AboutCourse.vue";
import AboutEducation from "@/components/AboutEducation.vue";
import AuthPage from "@/components/AuthPage.vue";
import AppFooter from "@/components/AppFooter.vue";
import LocationMap from "@/components/LocationMap.vue";
import {nextTick, onMounted, ref} from 'vue';
import eventBus from '@/constants/eventBus';
import AuthForm from "@/workspace/ContactUsForm.vue";

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
    <about-education ref="authFormContainerRef">
      <auth-form/>
    </about-education>
<!--    <div class="container" ref="authFormContainerRef">-->
<!--      <auth-form/>-->
<!--    </div>-->
    <location-map/>
    <app-footer/>
  </div>
</template>
<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  background-image: url('public/images/bg2.png');
  background-size: cover;
  background-position:top;
  position: relative;
}

.infos-for-ielts {
  position: relative;
  top: -10%;
  transform: translateY(-10%);
  margin: 0 auto;
  z-index: 15;
}

</style>
