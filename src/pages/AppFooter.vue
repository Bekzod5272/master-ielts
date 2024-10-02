<script setup lang="ts">
</script>
<template>
  <div class="footer container">
    <div class="footer__container">
      <div class="footer__logo">
        <img src="/public/images/master-ielts-word2.png" class="img-fluid" alt="master-ielts-word2"/>
      </div>
      <div class="footer__nav">
        <div>
          <p class="footer__nav__title">Навигация</p>
          <ul class="footer__nav__list">
            <li><a href="#">О нас</a></li>
            <li><a href="#">Результаты</a></li>
            <li><a href="#">Курсы</a></li>
            <li><a href="#">Преподаватели</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div class="footer__hours">
          <p class="footer__nav__title">Режим работы</p>
          <ul>
            <li>Понедельник - Суббота</li>
            <li>09:00 - 21:00</li>
            <li>Обед</li>
            <li>13:00 - 14:00</li>
          </ul>
        </div>
        <div class="footer__address">
          <p class="footer__address__title">Адрес</p>
          <p>Ташкент, Узбекистан</p>
          <div class="footer__social">
            <a href="https://t.me/masterielts27"><i class="fa-brands fa-telegram"></i></a>
            <a href=https://www.facebook.com/masterielts.uz/><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/ielts_masterielts"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCFSHwAgBxpZ6-g9bxrD5sjQ"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.footer {
  margin-top: 50px;
  color: white;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
}

.footer__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
}

.footer__logo {
  width: 29%;
  @media (max-width: 768px) {
    display: none;
  }
}

.footer__logo img {
  width: 300px;
}

.footer__nav {
  display: flex;
  width: 69%;
  justify-content: space-evenly;
  @media (max-width: 991px) {
    gap: 15px;
    justify-content: right;
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: start;
  }

  &__title {
    padding: 0 0 0 5px;
    font-size: 18px;
    font-family: GothamProMedium;
  }

  &__list {
    font-size: 15px;

    li {
      padding: 5px;
    }

    a {
      color: #fff;
    }
  }
}

.footer__hours {
  li {
    padding: 5px;
  }

  a {
    color: #fff;
  }
}

.footer__address {
  &__title {
    font-size: 18px;
    font-family: GothamProMedium;
  }

  a {
    padding: 5px;
    color: #fff;

    i {
      font-size: 25px;
      color: #B444EE;
    }
  }
}

.footer__social {
  margin-top: 20px;
}
</style>
