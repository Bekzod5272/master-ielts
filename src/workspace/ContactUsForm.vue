<script setup lang="ts">
import AppBtn from "@/workspace/AppBtn.vue";
import {ref} from "vue";
import axios from "axios";
import {toast} from "vue3-toastify";


const name = ref('')
const phoneNumber = ref('')

function handleSubmit() {
  if (!name.value || !phoneNumber.value) return toast.error("Iltimos ismingiz va raqamingizni kiriting kiriting",
      {
        position: 'bottom-center',
      }
  )
  axios.get('https://api.telegram.org/bot7912836970:AAEi1lJACzuHlfkleVrkQoHDlOkJHwRx_LY/sendMessage', {
    params: {
      chat_id: 5630347243,
      text: `Ism:${name.value} \n\nTelefon raqami:${phoneNumber.value}`,
      parse_mode: 'Markdown'
    }
  }).then(() => toast.success("Ma'lumotlaringiz qabul qilingi", {position: 'bottom-center'}))
}
</script>

<template>
  <div class="auth-container">
    <img src="/public/images/master-ielts-word2.png" class="auth-img img-fluid"/>
    <div class="auth-section">

      <div class="auth-left">
        <div class="auth-left-section">
          <h2 class="auth-left__subtitle">BOG’LANISH</h2>
          <p class="auth-left__text">
            Ariza qoldiring va bizning menejyorlarimiz tez orada siz bilan bog’lanishadi.
          </p>
        </div>
        <div class="auth-left-section__img">
          <img src="/public/images/strelka.png" class="auth-left-img"/>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-form">
          <input type="text" placeholder="Ismingiz" v-model="name" class="auth-form__input form-control"/>
          <input type="text" placeholder="Telefon raqamingiz" v-model="phoneNumber"
                 class="auth-form__input form-control"/>
        </div>

        <div class="auth-contact">
          <app-btn class="auth-form__button" @click="handleSubmit"/>
          <div>
            <div class="auth-contact__social">
              <div class="auth-contact__social__icons">
                <a href="https://www.instagram.com/ielts_masterielts">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://t.me/masterielts27">
                  <i class="fa-brands fa-telegram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCFSHwAgBxpZ6-g9bxrD5sjQ">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
              <span class="social-text">ielts_masterielts</span>
            </div>
            <div class="auth-contact__phone">
              <p>+998 99 866 44 44</p>
              <p>+998 91 777 77 33</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.auth-container {
  color: white;
  height: fit-content;
  margin-top: 50px;
}

.auth-section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
}

.auth-img {
  width: 30%;
  @media (max-width: 768px) {
    width: 50%;
  }
}

.auth-left {
  width: 50%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
}

.auth-left-section {
  text-align: left;
}

.auth-left__subtitle {
  font-weight: 800;
  margin-bottom: 20px;
  font-family: OFONT_RU_LAINYDAY;
}

.auth-left__text {
  width: 70%;
  display: inline-block;
  font-size: 1.2em;
  margin-top: 30px;
  font-family: PLAY_REGULAR;

}

.auth-left-section__img {
  margin-right: 20px;
  @media (max-width: 1024px) {
    display: none;
    margin-right: 0;
  }
}

.auth-left-img {
  width: 80px;
  height: fit-content;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  @media (max-width: 991px) {
    width: 50px;
  }
}

.auth-left-img:hover {
  transform: scale(1.2);
}

.auth-right {
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
}

.auth-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
}

.auth-form__input {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 1em;
  border-radius: 5px;
  border: none;
}

.auth-contact {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 15px;
  font-weight: inherit;
  font-family: GothamProMedium;
}

.auth-contact__social {
  display: flex;
  align-items: center;
  gap: 10px;
}

.auth-contact__social__icons {
  display: flex;
  gap: 5px;

  a {
    color: #B444EE;
  }
}

.auth-contact__phone p {
  margin: 5px 0;
}
</style>
