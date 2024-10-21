<script setup lang="ts">
import eventBus from "@/constants/eventBus";

const mentors = [
  {id: 1, name: 'Sherzod Mutalipov', image: '/images/sherzod.webp'},
  {id: 2, name: 'Sarvar Tolipov', image: '/images/sarvar.webp'},
  {id: 3, name: "Abdulloh Yusufxo'jayev", image: '/images/abdulloh.webp'},
  {id: 4, name: "Abdulloh Abdug'aniyev", image: '/images/r3.webp'},
  {id: 5, name: 'Bekzod Ziyatov', image: '/images/bekzod.webp'},
  {id: 6, name: 'Sardor Dadashev', image: '/images/sardor.webp'},
]

function handleButtonClick() {
  eventBus.emit('scroll-to-auth')
}
</script>
<template>
  <div class="mentors-section container">
    <div class="mentors-section__content">
      <div class="mentors-section__information">
        <div class="mentors-section__information__content">
          <img src="/public/images/7+.webp" class="mentors-section__information__img img-fluid">
          <p class="mentors-section__information__info-text">
            OLISH<br>UCHUN
          </p>
          <p class="mentors-section__information__info-text-italic">
            nima qilish kerak?
          </p>
          <div class="mentors-section__information__btn" @click="handleButtonClick">
            <i class="fa-solid fa-user"/>
            <p>
              Ro’yxatdan o’tish kerak
            </p>
          </div>
        </div>
      </div>
      <div class="mentors-section__view">
        <div class="mentors-header">
          <h1 class="mentors-header__title">
            BIZNING
            <br/>MENTORLAR
          </h1>
        </div>
        <div class="mentors-list">
          <div class="mentors-list__item" v-for="mentor in mentors" :key="mentor.id">
            <img :src="mentor.image" :alt="mentor.name" class="mentors-list__item__image img-fluid"/>
            <p class="mentors-about__name">{{ mentor.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <p class="mentors-section__information__footer__text">natijaga birinchi qadam</p>
    <div class="mentors-section__information__footer">
      <img src="/public/images/eagle.webp" class="mentors-section__information__footer__eagle-image img-fluid">
    </div>
  </div>
</template>

