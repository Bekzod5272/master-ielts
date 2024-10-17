<script setup lang="ts">
import AppBtn from "@/components/UI/AppBtn.vue";

import eventBus from '@/constants/eventBus';

function handleButtonClick() {
  console.log('csc')
  eventBus.emit('scroll-to-auth');
}
</script>
<template>
  <div class="master-ielts container">
    <div class="master-ielts__image">
      <img src="/public/images/im2.webp" alt="Person's image"/>
    </div>
    <p class="master-ielts__hide-name">Sherzod Mutalipov</p>
    <h1 class="master-ielts__title">MASTER IELTS</h1>
    <div class="master-ielts__content">
      <div class="master-ielts__content__text">
        <span class="master-ielts__subtitle">Sherzod Mutalipov</span>
        <p class="master-ielts__description">
          Eng qisqa vaqtda <strong>IELTS</strong> ni qo'lga kiriting!
        </p>
      </div>
    </div>
    <div class="master-ielts__content__call">
      <app-btn @click="handleButtonClick" class="master-ielts__content__call__btn"/>
      <p class="master-ielts__extra-text">
        Be’pul birinchi darsga yozilib,<br> o’z maqsadlaringizga erishish uchun <br> birinchi qadamni tashlang.
      </p>
      <img src="/public/images/fon4.webp" class="master-ielts__content__call__img"/>
    </div>
  </div>
</template>


<style src="../assets/main.scss" lang="scss"/>
