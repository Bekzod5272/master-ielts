<script setup></script>
<template>
  <div class="button-container">
    <button class="custom-button">
      QABULGA YOZILISH
    </button>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-button {
  width: 200px;
  height: 50px;
  background: linear-gradient(135deg,#006633, #00c853 );
  color: white;
  border: none;
  font-size: 14px;
  font-family: GothamProBlack;
  padding: 10px 25px;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.custom-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
</style>
