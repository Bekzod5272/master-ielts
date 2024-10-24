<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper-bundle.min.css';

import {Pagination, Navigation} from 'swiper';
import {ref, Ref} from "vue";

const props = defineProps({
  data: {type: Array, default: () => []},
})
const slideActiveIndex: Ref<number> = ref(0);

const onSlideChange = (swiper: { activeIndex: number }) => {
  slideActiveIndex.value = swiper.activeIndex;
};

</script>
<template>
  <div>
    <swiper
        :slides-per-view="1"
        :space-between="30"
        :pagination="{ clickable: true }"
        :modules="[Pagination, Navigation]"
        @slideChange="onSlideChange"
        class="swiper"
    >
      <swiper-slide
          v-for="(item, index) in data"
          :key="index"
      >
        <div class="course-list__item__content__info">
          <div class="about-ielts__header">
            <h2 class="about-ielts__title">BIZNING<br/><span>KURSLAR</span></h2>
          </div>
          <h2 class="course-list__item-title">{{ item.btnText }}</h2>
          <p class="course-list__item-description">{{ item.text }}</p>
          <img :src="item.path" :alt="item.btnText" class="course-image"/>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped lang="scss">
.swiper {
  .about-ielts__title {
    font-size: 42px;
  }

  .course-list__item-description {
    padding: 5px;
    font-size: 14px;
    border: 3px solid #714FFB;
    border-right: none;
    border-radius: 7px;
    font-family: "Segoe Print";
    clip-path: polygon(0% 10%, 100% -4%, 100% 97%, 0 100%);
    @media (max-width: 991px) {
      font-size: 12px;
      clip-path: polygon(0% 10%, 100% -65%, 100% 97%, 0 100%);
    }
    @media (max-width: 768px) {
      height: 90px;
      display: flex;
      align-items: center;
      padding: 10px;
      margin: 0 10px;
      font-family: GothamProMedium;
      font-size: 12px;
      border-top: none;
      clip-path: polygon(0% 0%, 100% -65%, 100% 97%, 0 100%);
    }
    @media (max-width: 576px) {
      margin: 0;
    }
  }

  .about-ielts__title {
    margin-top: 55px;
    margin-bottom: 0;
  }
}
</style>
