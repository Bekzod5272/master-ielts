<template>
  <div class="auth-container">
    <!-- Chap tomondagi kontent -->
    <div class="auth-left">
      <h1 class="auth-left__title">MASTER IELTS</h1>
      <h2 class="auth-left__subtitle">СВЯЗАТЬСЯ</h2>
      <p class="auth-left__text">
        Оставьте заявку и наши менеджеры в скором времени свяжутся с вами
      </p>
    </div>

    <!-- O'ng tomondagi forma -->
    <div class="auth-right">
      <div class="auth-form">
        <input type="text" placeholder="Ismingiz" class="auth-form__input" />
        <input type="text" placeholder="Telefon raqamingiz" class="auth-form__input" />
        <button class="auth-form__button">QABULGA YOZILISH</button>
      </div>

      <!-- Ijtimoiy tarmoqlar va kontaktlar -->
      <div class="auth-contact">
        <div class="auth-contact__social">
          <span class="social-icon">✈️</span>
          <span class="social-text">ielts_masterielts</span>
        </div>
        <div class="auth-contact__phone">
          <p>+998 99 866 44 44</p>
          <p>+998 91 777 77 33</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #320861, #56119d);
  padding: 50px;
  color: white;
  height: 100vh;
}

.auth-left {
  width: 40%;
  text-align: left;
}

.auth-left__title {
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 10px;
}

.auth-left__subtitle {
  font-size: 2em;
  margin-bottom: 20px;
}

.auth-left__text {
  font-size: 1.2em;
}

.auth-right {
  width: 50%;
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

.auth-form__button {
  background-color: #2ecc71;
  color: white;
  padding: 15px 40px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-form__button:hover {
  background-color: #27ae60;
}

.auth-contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.auth-contact__social {
  display: flex;
  align-items: center;
}

.social-icon {
  margin-right: 10px;
}

.auth-contact__phone p {
  margin: 5px 0;
}
</style>
