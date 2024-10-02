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
          class="my-auto__slide"
      >
        <div class="course-list__item__content__info">
          <h2 class="course-list__item-title">{{ item.btnText }}</h2>
          <p class="course-list__item-description">{{ item.text }}</p>
          <img :src="item.path" :alt="item.btnText" class="course-image"/>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
