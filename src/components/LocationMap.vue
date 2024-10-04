<template>
  <div class="main-container">
    <app-map/>
  </div>
</template>
<script setup lang="ts">
import AppMap from "@/workspace/AppMap.vue";
</script>
<style lang="scss" scoped>
.main-container {
  position: relative;
  z-index: 1111;
}
</style>
