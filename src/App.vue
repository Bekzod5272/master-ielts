<script setup lang="ts">
import MainInfoPage from '@/pages/MainInfoPage.vue'
import InfoForIelts from "@/pages/InfoForIelts.vue";
import AboutMentors from "@/pages/AboutMentors.vue";
import AboutCourse from "@/pages/AboutCourse.vue";
import AboutEducation from "@/pages/AboutEducation.vue";
import AuthPage from "@/pages/AuthPage.vue";
import AppFooter from "@/pages/AppFooter.vue";
import LocationMap from "@/pages/LocationMap.vue";


</script>
<template>
  <div class="main main-container">
    <main-info-page/>
    <div class="infos-for-ielts">
      <info-for-ielts/>
      <about-mentors/>
      <about-course/>
    </div>
    <about-education/>
    <auth-page/>
<!--    <location-map/>-->
    <app-footer/>
  </div>
</template>
<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  background-image: url('public/images/bg2.png');
  background-size: cover;
  background-position: top center;
  position: relative;
}

.infos-for-ielts {
  position: relative;
  top: -100px;
  margin: 0 auto;
  z-index: 15;
  @media (max-width: 991px) {
    top: -220px;
  }
  @media (max-width: 768px) {
    width: 85%;
    border-radius: 20px;
    top: -160px;
    position: relative;
    bottom: 400px;
    z-index: 111;
  }
  @media (max-width: 576px) {
    top: -250px;
  }
}

</style>
