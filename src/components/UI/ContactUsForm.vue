<script setup lang="ts">
import AppBtn from "@/components/UI/AppBtn.vue";
import {ref} from "vue";
import axios from "axios";

const name = ref('')
const phoneNumber = ref('')
const nameError = ref('')
const phoneError = ref('')
const validateName = () => {
  if (!name.value) {
    nameError.value = 'Ismingizni kiriting';
  } else if (name.value.length < 3) {
    nameError.value = 'Ismingiz kamida 3 ta belgidan iborat bo\'lishi kerak';
  } else {
    nameError.value = '';
  }
};
const formatPhoneNumber = () => {
  if (!phoneNumber.value) {
    phoneNumber.value = '+998 (';
  }
};

const onPhoneInput = (event) => {
  let value = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
  if (!value.startsWith('998')) {
    value = '998' + value;
  }

  if (value.length <= 3) {
    phoneNumber.value = `+${value}`;
  } else if (value.length <= 5) {
    phoneNumber.value = `+${value.slice(0, 3)}-(${value.slice(3)}`;
  } else if (value.length <= 8) {
    phoneNumber.value = `+${value.slice(0, 3)}-(${value.slice(3, 5)}) - ${value.slice(5)}`;
  } else if (value.length <= 10) {
    phoneNumber.value = `+${value.slice(0, 3)}-(${value.slice(3, 5)}) - ${value.slice(5, 8)} - ${value.slice(8)}`;
  } else if (value.length <= 12) {
    phoneNumber.value = `+${value.slice(0, 3)}-(${value.slice(3, 5)}) - ${value.slice(5, 8)} - ${value.slice(8, 10)} - ${value.slice(10)}`;
  }

  if (value.length < 12) {
    phoneError.value = 'Telefon raqami noto‘g‘ri formatda';
  } else {
    phoneError.value = '';
  }
};


function handleSubmit() {
  nameError.value = '';
  phoneError.value = '';

  if (!name.value) {
    nameError.value = "Iltimos ismingizni kiriting";
  }
  if (!phoneNumber.value) {
    phoneError.value = "Iltimos telefon raqamingizni kiriting";
  }
  if (!name.value && !phoneNumber.value) {
    nameError.value = "Iltimos ismingizni kiriting";
  }
  if (!nameError.value && !phoneError.value) {
    axios.get('https://api.telegram.org/bot7912836970:AAEi1lJACzuHlfkleVrkQoHDlOkJHwRx_LY/sendMessage', {
      params: {
        chat_id: -4504211502,
        text: `Ism: ${name.value} \n\nTelefon raqami: ${phoneNumber.value}`,
        parse_mode: 'Markdown'
      }
    }).then(() => {
      name.value = ''
      phoneNumber.value = ''
      alert("Ma'lumotlaringiz qabul qilindi!")
    })
        .catch(error => console.error("Xatolik yuz berdi:", error));
  }
}

</script>

<template>
  <div class="auth-container container">
    <img src="/images/master-ielts-word.webp" class="auth-img img-fluid"/>
    <div class="auth-section">

      <div class="auth-left">
        <div class="auth-left-section">
          <h2 class="auth-left__subtitle">BOG’LANISH</h2>
          <p class="auth-left__text">
            Ariza qoldiring va bizning menejyorlarimiz tez orada siz bilan bog’lanishadi.
          </p>
        </div>
        <div class="auth-left-section__img">
          <img src="/public/images/strelka.webp" class="auth-left-img"/>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-form">
          <label for="name">Ismingiz</label>
          <input
              type="text"
              id="name"
              placeholder="Ismingiz"
              v-model="name"
              @input="validateName"
              class="auth-form__input form-control"
              :class="{'error': nameError}"
          />
          <span v-if="nameError" class="error-msg">{{ nameError }}</span>

          <label for="phone">Telefon raqamingiz</label>
          <input
              type="text"
              id="phone"
              maxlength="25"
              v-model="phoneNumber"
              @focus="formatPhoneNumber"
              @input="onPhoneInput"
              placeholder="+998 (__) ___-__-__"
              class="auth-form__input form-control"
              :class="{'error': phoneError}"
          />
          <span v-if="phoneError" class="error-msg">{{ phoneError }}</span>
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
              <p>+99890 822 22 28 <br>Yunusobod</p>
              <p>+99891 777 77 33 <br>Novza</p>
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
  margin-bottom: 30px;
  @media (max-width: 991px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    margin-top: 150px;
    padding: 30px;
  }
  @media (max-width: 576px) {
    margin-top: 10px;
  }
}

.auth-section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
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
  font-size: 50px;
  font-family: SEGOEPRINT;
  @media (max-width: 576px) {
    font-family: GothamProMedium;
    margin-bottom: 10px;
    font-size: 35px;
  }
}

.auth-left__text {
  width: 70%;
  display: inline-block;
  font-size: 1.2em;
  margin-top: 30px;
  font-family: Arial;
  @media (max-width: 768px) {
    margin-top: 0;
  }
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
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

  input {
    font-family: GothamProMedium;
    @media (max-width: 576px) {
      font-size: 9px !important;
    }

  }
}

.auth-form__input {
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 1em;
  border-radius: 5px;
}

.auth-form__input.error {
  border: 2px solid red;
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

@media (max-width: 576px) {
  .auth-contact .custom-button img {
    width: 150px;
  }
}

@media (max-width: 390px) {
  .auth-contact .custom-button img {
    width: 120px;
  }
  .auth-contact__social {
    font-size: 13px;
    gap: 5px;
  }
  .auth-contact__phone p {
    font-size: 12px;
  }
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

.error-msg {
  color: red;
  font-size: 12px;
  margin-bottom: 5px;
}
</style>
