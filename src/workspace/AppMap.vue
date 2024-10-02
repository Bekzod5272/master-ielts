<script setup lang="ts">
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapEntity,
  YandexMapMarker,
  YandexMapZoomControl,
} from 'vue-yandex-maps';
import {ref} from 'vue';

const props = defineProps({
  location: {
    type: Array,
    default: [69.228940, 41.295942],
  },
});
const markersMap = [
  {
    coordinates: props.location,
  },
];

const mapContainer = ref(null);
</script>
<template>
  <yandex-map
      :settings="{
      location: {
        center: props.location,
        zoom: 15,
      },
    }"
      @click.stop="openMarker = null"
      height="50vh"
      ref="mapContainer"
  >
    <yandex-map-default-scheme-layer/>
    <yandex-map-default-features-layer/>
    <yandex-map-controls :settings="{ position: 'right' }">
      <yandex-map-zoom-control/>
    </yandex-map-controls>
    <yandex-map-marker
        v-for="(marker, index) in markersMap"
        :key="index"
        :settings="{
        coordinates: marker.coordinates,
        onClick: () => (openMarker = index),
        zIndex: openMarker === index ? 1 : 0,

      }"
    >
      <div class="marker">
        <i class="fa-sharp fa-solid fa-location-dot"></i>
      </div>
    </yandex-map-marker>
  </yandex-map>
</template>

<style lang="scss">
.marker i{
  font-size: 30px;
  color: red;
}
</style>
