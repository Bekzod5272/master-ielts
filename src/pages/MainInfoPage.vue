<script setup lang="ts">
import AppBtn from "@/components/AppBtn.vue";

import eventBus from '@/constans/eventBus';

function handleButtonClick() {
  console.log('csc')
  eventBus.emit('scroll-to-auth');
}
</script>
<template>
  <div class="master-ielts container">
    <div class="master-ielts__image">
      <img src="/public/images/im2.png" alt="Person's image"/>
    </div>

    <div class="master-ielts__content">
      <h1 class="master-ielts__title">MASTER IELTS</h1>
        <p class="master-ielts__hide-name">Sherzod Mutalipov</p>
      <div class="master-ielts__content__text">
        <div class="master-ielts__subtitle">Sherzod Mutalipov</div>
        <p class="master-ielts__description">
          Eng qisqa vaqtda <strong>IELTS</strong> ni qo'lga kiriting!
        </p>
      </div>
      <div class="master-ielts__content__call">
        <app-btn @click="handleButtonClick" class="master-ielts__content__call__btn"/>
        <p class="master-ielts__extra-text">
          Запишитесь на индивидуальную бесплатную стратегическую сессию к Ивану Максимову.
        </p>
      </div>
    </div>
  </div>
</template>


<style src="src/assets/assets.scss" lang="scss"/>
