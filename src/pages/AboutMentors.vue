<script setup>
import AppBtn from "@/components/AppBtn.vue";

const mentors = [
  {id: 1, name: 'Ismoil Xasanov', image: 'public/images/isroil.png'},
  {id: 2, name: 'Zafar Tashlayev', image: 'public/images/abdullohs-image.png'},
  {id: 3, name: 'Bexruz Sherali', image: 'public/images/isroil.png'},
  {id: 4, name: 'Abdulloh Azimov', image: 'public/images/abdullohs-image.png'},
  {id: 5, name: 'Abdulloh Yusupov', image: 'public/images/isroil.png'},
  {id: 6, name: 'Sardor Qoziyev', image: 'public/images/abdullohs-image.png'},
]
</script>
<template>
  <div class="mentors-section container">
    <div class="mentors-section__content">
      <div class="mentors-section__information">
        <div class="mentors-section__information__content">
          <img src="/public/images/7+.png" class="mentors-section__information__img img-fluid">
          <p class="mentors-section__information__info-text">
            OLISH<br>UCHUN
          </p>
          <p class="mentors-section__information__info-text-italic">
            nima qilish kerak?
          </p>
          <div class="mentors-section__information__btn">
            <i class="fa-solid fa-user"/>
            <p>
              Sinalgan yo'li
            </p>
          </div>
        </div>
      </div>
      <div class="mentors-section__view">
        <div class="mentors-header">
          <h1 class="mentors-header__title">BIZNING MENTORLAR</h1>
        </div>
        <div class="mentors-about">
          <div class="mentors" v-for="mentor in mentors" :key="mentor.id">
            <img :src="mentor.image" :alt="mentor.name" class="mentor-image"/>
            <p class="mentors-about__name">{{ mentor.name }}</p>
          </div>
        </div>
        <p class="mentors-section__information__footer__text">natijaga birinchi qadam</p>
      </div>
    </div>
    <div class="mentors-section__information__footer">
      <img src="/public/images/eagle.png" class="mentors-section__information__footer__eagle-image img-fluid">
    </div>
  </div>
</template>

<style scoped lang="scss">
.mentors-section {
  width: 100%;
  padding: 40px;
  background-image: url("public/images/mentor-back.png");
  color: white;
  position: relative;
  top:-20px;

  &__header-btn {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }

  &__content {
    display: flex;
    flex-direction: row;
    margin-top: 50px;
  }

  &__information {
    width: 60%;
    display: flex;
    justify-content: center;
    text-align: left;

    &__info-text {
      font-size: 34px;
      font-family: GothamProBlack;
      text-align: start;
      font-weight: 800;
    }

    &__info-text-italic {
      font-size: 40px;
      letter-spacing: 2px;
      word-spacing: 15px;
      font-family: OFONT_RU_LAINYDAY;
      position: sticky;
      z-index: 1;
    }

    &__btn {
      display: inline-flex;
      border: 1px solid #fff;
      padding: 5px 15px;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-size: 18px;
      text-transform: uppercase;

      i {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__text {
        font-family: OFONT_RU_LAINYDAY;
        font-size: 40px;
      }

      &__eagle-image {
        width: 330px;
        position: absolute;
        top: 90px;
        left: 41%;
        transform: translateX(-42%);
        @media (max-width: 500px) {
          width: 70%;
        }
      }
    }

    &__img {
      width: 270px;
      height: 270px;
      @media (max-width: 400px) {
        width: 200px;
        height: 200px;
      }
    }
  }

  &__view {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;
  }

}

.mentors-header {
  &__title {
    width: 330px;
    text-align: start;
    font-weight: 800;
    font-size: 40px;
    font-family: GothamProBlack;
  }
}

.mentors-about {
  display: grid;
  grid-template-rows: 120px 120px 120px;
  grid-template-columns:  140px 140px;
  padding: 10px 30px 0 30px;
}

.mentors {
  flex-basis: calc(45% - 10px);
}

.mentor-image {
  width: 100px;
  object-fit: cover;
  object-position: top center;
  height: 80px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.mentors-about__name {
  font-size: 16px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .mentors-section__content {
    flex-direction: column;
  }
  .mentors-section__information, .mentors-section__view {
    width: 100%;
    display: block;
    margin-top: 30px;

  }
  .mentors-about {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
    gap: 10px;
    padding: 0;
  }
  .mentor-image {
    width: 100%;
  }
  .mentors-section__information__footer__eagle-image {
    left: 60%;
    top: 100px;
    z-index: 0;
  }
}
</style>
