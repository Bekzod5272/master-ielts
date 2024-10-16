<script setup lang="ts">
import {dataInfoIelts} from "../constants/index";
import AppBtn from "@/components/UI/AppBtn.vue";

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
          SPEAKINGDAN<br>8 OLISH<br>UCHUN
        </p>
        <img src="/public/images/8+.webp" class="section__content__header__title__icon img-fluid">
        <p class="section__content__header__title">NIMA QILISH <br> KERAK?</p>
      </div>
      <div class="section__content__infos">
        <div class="section__content__infos__image">
          <a href="https://www.instagram.com/reel/C_0igayNPx8/?igsh=eHI5emF2cmVubW9t" target="_blank">
            <img class="section__content__infos__image__front" src="/public/images/m5.webp">
            <p class="section__content__infos__image__text">Ieltsdan yuqori ball olmoqchimisiz ? Bunda bizga yechim bor, hoziroq qabulga yoziling.</p>
          </a>
          <div class="section__content__infos__image__back"/>
        </div>
        <div class="section__content__infos__text">
          <ul class="info-list">
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
    <app-btn @click="handleButtonClick" class="section__header-btn"/>

  </div>
</template>

