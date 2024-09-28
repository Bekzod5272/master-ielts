<script setup lang="ts">
import {dataInfoCourseFirstPage} from "@/constans";
import {dataInfoCourseSecondPage} from "@/constans";
import AppBtn from "@/components/AppBtn.vue";


function scrollToForm() {
  document.getElementById("qabulga-yozilish").scrollIntoView({
    behavior: "smooth"
  })
  alert('dsa')
}
</script>
<template>
  <div class="about-ielts container">
    <div class="about-ielts__content">
      <div class="about-ielts__header">
        <div class="about-ielts__title">
          <p>
            BIZNING
          </p>
          <p>
            KURSLAR
          </p>
        </div>
      </div>
    </div>
    <div class="about-ielts__courses">
      <div class="course-list">
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
                <img :src="items.path" :alt="items.path" class="img-fluid"/>
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
                <img :src="items.path" :alt="items.path" class="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
        <div class="course-list-right__footer">
          <img src="/public/images/about-ielts-back.png" class="img-fluid"/>
        </div>
      </div>
    </div>
    <img src="/public/images/book.png" class="about-ielts__back-image img-fluid"/>
    <app-btn class="about-ielts__footer-btn" href="#" @click="scrollToForm()"/>
  </div>
</template>
<style scoped lang="scss">
.about-ielts {
  width: 100%;
  background-image: url('public/images/img_5.png');
  background-size: cover;
  background-position: center;
  position: relative;
  top: -20px;
  border-radius: 16px;

  &__back-image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &__header {

  }

  &__title {
    display: flex;

  }

  &__courses {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .course-list {
    width: 40%;
    height: fit-content;
    padding: 30px 20px;
    position: sticky;
    z-index: 2;

    &__item {
      &__content {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-family: GothamProMedium;

        &__info {
          display: flex;
          flex-direction: column;
        }
      }
    }

    &__item-image {
      width: fit-content;
      height: 180px;
      margin-bottom: auto;
    }

    &__item-title {
      width: fit-content;
      background-color: #714FFB;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 5px 20px;
      margin-bottom: 10px;
    }

    &__item-description {
      height: fit-content;
      padding: 10px;
      font-size: 14px;
      border: 3px solid #714FFB;
      border-right: none;
      border-radius: 7px;
      clip-path: polygon(0% 10%, 100% -4%, 100% 97%, 0 100%);
    }

  }

  &__footer-btn {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
}

.course-list-right {
  width: 40%;
  padding: 30px;
  position: sticky;
  z-index: 2;

  &__items {
    margin-bottom: 20px;
  }

  &__footer {
    display: flex;
    justify-content: center;
  }
}

.course-list-left {
  margin-bottom: 20px;
}

.course-list-left:nth-child(even) {
  .course-list__item__content {
    display: flex;
    flex-direction: row-reverse;
  }

  .course-list__item-description {
    border-left: none;
    border-right: 2px solid #714FFB;
  }
}

.course-list-right__items:nth-child(odd) {
  .course-list__item__content {
    display: flex;
    flex-direction: row-reverse;
  }

  .course-list__item-description {
    border-left: none;
    border-right: 2px solid #714FFB;
  }
}
</style>
