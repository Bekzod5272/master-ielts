<script setup lang="ts">
import {dataInfoCourseFirstPage} from "@/constans";
import {dataInfoCourseSecondPage} from "@/constans";
import AppBtn from "@/components/AppBtn.vue";
import 'swiper/swiper-bundle.min.css';
import AppSwiper from "@/components/AppSwiper.vue";
import eventBus from '@/constans/eventBus';

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
          <div class="about-ielts__title">
            <p class="about-ielts__title__our">
              BIZNING
            </p>
            <p class="about-ielts__title__course">
              KURSLAR
            </p>
          </div>
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
    <app-btn class="about-ielts__footer-btn" href="#" @click="handleButtonClick()"/>
  </div>

</template>
<style lang="scss">
.about-ielts {
  width: 100%;
  background-image: url('public/images/book.png');
  background-size: cover;
  background-position: top center;
  position: relative;
  top: -20px;
  border-radius: 16px;
  @media (max-width: 768px) {
    top: -40px;
  }

  &__content {
    display: none;
    position: relative;
    z-index: 11;
    @media (max-width: 768px) {
      display: block;
    }
  }

  &__header {
    text-align: center;
  }

  &__title {
    display: flex;
    flex-direction: column;
    font-size: 35px;
    font-weight: 900;
    font-family: GothamProBlack;

    &__our {
      color: #9D84FD;
    }
  }

  &__courses {
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 991px) {
      gap: 50px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  .course-list {
    width: 40%;
    height: fit-content;
    padding: 30px 20px;
    position: sticky;
    z-index: 2;
      margin-top: 25px;

    &__item {
      &__content {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-family: GothamProMedium;

        &__info {
          display: flex;
          flex-direction: column;
          height: fit-content;
          @media (max-width: 768px) {
            justify-content: center;
            padding: 20px;
          }
        }
      }
    }

    &__item-title {
      width: fit-content;
      background-color: #714FFB;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 5px 20px;
      font-size: 14px;
      margin-bottom: 10px;
      font-family: "Segoe Print";
      @media (max-width: 991px) {
        font-size: 12px;
        padding: 5px 15px;
      }
      @media (max-width: 768px) {
        margin: 10px auto;
        font-size: 20px;
        font-family: PLAY-BOLD;

      }
    }

    &__item-description {
      height: fit-content;
      padding: 5px;
      font-size: 14px;
      border: 3px solid #714FFB;
      border-right: none;
      border-radius: 7px;
      font-family: "Segoe Print";
      clip-path: polygon(0% 10%, 100% -4%, 100% 97%, 0 100%);
      @media (max-width: 991px) {
        font-size: 12px;
      }
      @media (max-width: 768px) {
        font-family: GothamProMedium;
        font-size: 18px;
        border-top: none;
        clip-path: polygon(0% 0, 100% -4%, 100% 97.5%, 0 100%);
      }
    }

  }

  &__footer-btn {
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
}

.course-list__item-image {
  margin-bottom: auto;
}
.course-list__item-image img {
  width: 80px;
  height: 80px;
}

.course-list-right {
  width: 40%;
  padding: 30px;
  position: sticky;
  z-index: 2;
    margin-top: 25px;

  &__items {
    margin-bottom: 20px;
  }

  &__footer {
    display: flex;
    justify-content: center;
  }
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

.swiper-pagination-bullets {
  margin-bottom: 20px !important;
}
</style>
