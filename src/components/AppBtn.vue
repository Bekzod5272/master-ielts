<script setup></script>
<template>
  <div class="custom-button">
    <img src="/public/images/knopka.png"/>
  </div>
</template>


<style scoped>
.custom-button {
  cursor: pointer;
  img {
    width: 200px;
    @media (max-width: 576px) {
      width: 150px;
    }
  }
}

</style>
