<script setup></script>
<template>
  <div class="custom-button">
    <img src="/public/images/knopka.png">
  </div>
</template>


<style>
.custom-button {
  cursor: pointer;

  img {
    width: 200px;
    object-fit: cover;
    object-position: center;
    @media (max-width: 768px) {
      width: 180px;
    }
    @media (max-width: 576px) {
      width: 120px;
    }
  }
}

</style>
