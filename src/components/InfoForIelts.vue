<script setup lang="ts">
import {dataInfoIelts} from "../constants/index";
import AppBtn from "@/workspace/AppBtn.vue";

import eventBus from '@/constants/eventBus';

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

<style lang="scss" src="/src/assets/main.scss"/>
