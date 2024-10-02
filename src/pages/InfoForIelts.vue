<script setup lang="ts">
import {dataInfoIelts} from "@/constans";
import AppBtn from "@/components/AppBtn.vue";

import eventBus from '@/constans/eventBus';

function handleButtonClick() {
  eventBus.emit('scroll-to-auth');
}

</script>

<template>
  <div class="section container">
    <div class="section__content">
      <div class="section__content__header">
        <p class="section__content__header__title">
          OLISH<br>UCHUN
        </p>
        <img src="/public/images/8+.png" class="section__content__header__title__icon img-fluid">
        <p class="section__content__header__title">NIMA<br>QILISH<br>KERAK?</p>
      </div>
      <div class="section__content__infos">
        <div class="section__content__infos__image">
          <img src="/public/images/info-ielts-back.png" class="img-fluid">
        </div>
        <div class="section__content__infos__text">
          <ul class="info-list" >
            <li class="info-list__item" v-for="items in dataInfoIelts">
              <i :class="items.iconClass"></i>
              <div>
                <p v-html="items.text" class="info-list__text"/>
                <span class="info-list__highlight"><strong>{{ items.strong }}</strong></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <app-btn @click="handleButtonClick"  class="section__header-btn"/>

  </div>
</template>

<style lang="scss" scoped>
.section {
  background-image: url('public/images/fon1.png');
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;
  border-radius: 16px;
  position: relative;
  z-index: 2;
}
.section__header-btn {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
}
.section__content__header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: GothamProBlack;
  @media (max-width: 768px) {
    margin-bottom: 100px;
  }
  @media (max-width: 576px) {
    gap: 5px;
  }
}

.section__content__infos {
  display: flex;
  justify-content: center;
  padding: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
}

.section__content__header__title {
  text-align: center;
  font-size: 55px;
  font-weight: 900;
  color: #424242;

  &__icon {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 1024px) {
    font-size: 38px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    &__icon {
      width: 200px;
      height: 200px;
    }
  }
  @media (max-width: 578px) {
    font-size: 17px;
    &__icon {
      width: 150px;
      height: 150px;
    }
  }
}
.section__content__infos__text {
  margin: 20px 0 50px 0;
  @media (max-width: 576px) {
    padding: 20px;
  }
  @media (max-width: 480px) {
    padding: 0;
  }
}
.section__content__infos__image {
  width: 500px;
  height: auto;
  @media (max-width: 768px) {
    width: 400px;
    position: absolute;
    top: 100px;
    left: -90px;
  }
  @media (max-width: 576px) {
    width: 300px;
    left: -50px;
  }
}

.info-list {
  list-style: none;
}

.info-list__item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px auto;
  font-family: PLAY_REGULAR;
  i {
    color: #0C21AE;
  }
}

.info-list__highlight {
  position: relative;
}

.info-list__highlight::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 8px;
  bottom: 0;
  left: 0;
  background-color: #8e44ad;
  border-radius: 15px;
  clip-path: polygon(0 80%, 100% 54%, 100% 120%, 0% 100%);
  transform: translateY(4px);
}

</style>
