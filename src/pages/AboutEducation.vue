<script lang="ts" setup>
import {dataVideoLinksFirst,dataVideoLinksSecond,dataVideoLinksEvenFour,dataVideoLinksEvenThree,dataVideoLinksEvenFive} from "@/constans/video-links";
</script>
<template>
  <div class="about-education-header main-container">
    <div class="about-education-header__img">
      <img src="/public/images/master-ielts-word.png" class="img-fluid"/>
    </div>
    <div class="about-education-title">
      <p>
        Master IELTS — ingliz tilini o’rgatish bo’yicha 9 yildan ortiq tajribaga ega va maxsus Mutalipov
        Sherzod tomonidan ishlab chiqilgan o’ziga xos metodikaga asoslanadi. Biz boshqa ta’lim markazlari singari
        ishlamaymiz; har bir talabani individual ravishda o’rgatamiz va mavzularni chuqur tushuntiramiz, tariflardan
        farqli o’laroq! Faqat sifat va natija.
      </p>
    </div>
  </div>
  <div class="about-education main-container">
    <div>
      <div class="grid-container">
        <div class="grid-container__first">
          <div v-for="(item, index) in dataVideoLinksFirst" :key="index" class="grid-item-odd">
            <img :src="item.path" :alt="'Image ' + (index + 1)" class="img-fluid"/>
          </div>
        </div>
        <div class="grid-container__second">
          <div v-for="(item, index) in dataVideoLinksSecond" :key="index" class="grid-item-odd">
            <img :src="item.path" :alt="'Image ' + (index + 1)" class="img-fluid"/>
          </div>
        </div>
        <div class="grid-container__three">
          <div v-for="(item, index) in dataVideoLinksEvenThree" :key="index" class="grid-item-odd">
            <img :src="item.path" :alt="'Image ' + (index + 1)"  class="img-fluid"/>
          </div>
        </div>
        <div class="grid-container__four">
          <div v-for="(item, index) in dataVideoLinksEvenFour" :key="index" class="grid-item-odd">
            <img :src="item.path" :alt="'Image ' + (index + 1)" class="img-fluid"/>
          </div>
        </div>
        <div class="grid-container__five">
          <div v-for="(item, index) in dataVideoLinksEvenFive" :key="index" class="grid-item-odd">
            <img :src="item.path" :alt="'Image ' + (index + 1)" class="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about-education-header {
  width: 100%;
  height: auto; 
  background-image: url("/public/images/soya.png");
  background-position: top;
  background-size: cover;

  &__img {
    display: flex;
    justify-content: center;
  }

  img {
    width: 800px;
  }
}
.about-education{
  pointer-events: none;
  background-image: url("/public/images/soya2.png");
  background-size: cover;
  background-position: top;
}
.about-education-title {
  width: 70%;
  margin: 0 auto;
  text-align: center;
  font-family: PLAY_REGULAR;
  color: white;
  margin-top: 50px;
}

.grid-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  gap: 10px;
  margin-top: 50px;
  @media (max-width: 768px) {
    gap: 5px;
  }

  img{
    width: 150px;
    height: 200px;
    border-radius: 16px;
    @media (max-width: 768px) {
      object-fit: cover;
      object-position: center;
    }
    @media (max-width: 576px) {
      border-radius: 12px;
    }
  }
}
.grid-container__first , .grid-container__three, .grid-container__five{
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 900px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 820px;
    gap: 5px;
  }
  @media (max-width: 576px) {
    height: 600px;
  }
}
.grid-container__second , .grid-container__four{
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 900px;
  overflow: hidden;
  position: relative;
  top: -75px;
  @media (max-width: 881px) {

  }
  @media (max-width: 768px) {
    gap: 5px;
    height: 910px;
    top: -95px;
  }
  @media (max-width: 576px) {
    top: -120px;
    height: 720px;
  }
}
</style>
