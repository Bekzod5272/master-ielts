<script setup lang="ts">
import MainInfoPage from '@/pages/MainInfoPage.vue'
import InfoForIelts from "@/pages/InfoForIelts.vue";
import AboutMentors from "@/pages/AboutMentors.vue";
import AboutCourse from "@/pages/AboutCourse.vue";
import AboutEducation from "@/pages/AboutEducation.vue";


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
  z-index: -1;
}

.infos-for-ielts {
  position: relative;
  top: -200px;
  margin: 0 auto;
  z-index: 15;
  @media (max-width: 768px) {
    width: 85%;
    border-radius: 20px;
    position: relative;
    bottom: 400px;
    z-index: 111;
  }
}

</style>
