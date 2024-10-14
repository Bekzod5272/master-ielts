<script setup></script>
<template>
  <div class="custom-button">
    <img src="/public/images/knopka.webp">
  </div>
</template>


<style>
.custom-button {
  cursor: pointer;
  position: relative;
  z-index: 5555;
  img {
    width: 220px;
    object-fit: cover;
    object-position: center;
    @media (max-width: 768px) {
      width: 180px;
    }
    @media (max-width: 576px) {
      width: 150px;
    }
  }
}

</style>
