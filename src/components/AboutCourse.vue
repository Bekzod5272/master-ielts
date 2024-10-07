<script setup lang="ts">
import {dataInfoCourseFirstPage} from "../constants/index";
import {dataInfoCourseSecondPage} from "../constants/index"
import AppBtn from "@/workspace/AppBtn.vue";
import 'swiper/swiper-bundle.min.css';
import AppSwiper from "@/workspace/AppSwiper.vue";
import eventBus from '@/constants/eventBus';

function handleButtonClick() {
  eventBus.emit('scroll-to-auth');
}

const combinedArray = dataInfoCourseSecondPage.concat(dataInfoCourseFirstPage)


</script>
<template>
  <div class="about-ielts container">
    <div class="about-ielts__content">
      <app-swiper :data="combinedArray"/>
    </div>

    <div class="about-ielts__courses">
      <div class="course-list">
        <div class="about-ielts__header">
            <h2  class="about-ielts__title">BIZNING<br/><span>KURSLAR</span></h2>
        </div>
        <div class="course-list-left" v-for="items in dataInfoCourseFirstPage">
          <div class="course-list__item">
            <div class="course-list__item__content">
              <div class="course-list__item__content__info">
                <button class="course-list__item-title">{{ items.btnText }}</button>
                <p class="course-list__item-description">
                  {{ items.text }}
                </p>
              </div>
              <div class="course-list__item-image">
                <img :src="items.path" :alt="items.path"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course-list-right">
        <div class="course-list-right__items" v-for="items in dataInfoCourseSecondPage">
          <div class="course-list__item">
            <div class="course-list__item__content">
              <div class="course-list__item__content__info">
                <button class="course-list__item-title">{{ items.btnText }}</button>
                <p class="course-list__item-description">
                  {{ items.text }}
                </p>
              </div>
              <div class="course-list__item-image">
                <img :src="items.path" :alt="items.path"/>
              </div>
            </div>
          </div>
        </div>
        <div class="course-list-right__footer">
          <img src="/public/images/about-ielts-back.png" class="img-fluid"/>
        </div>
      </div>
    </div>
    <app-btn class="about-ielts__footer-btn" @click="handleButtonClick()"/>
  </div>

</template>
