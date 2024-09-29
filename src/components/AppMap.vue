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
import { ref } from 'vue';

const location = [41.34116132640675, 69.20452419656394]
const markersMap = [
  {
    coordinates: location,
  },
];

const mapContainer = ref(null);
</script>
<template>
  <yandex-map
      :settings="{
      location: {
        center: location,
        zoom: 12,
      },
    }"
      @click.stop="openMarker = null"
      height="50vh"
      ref="mapContainer"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />
    <yandex-map-controls :settings="{ position: 'right' }">
      <yandex-map-zoom-control />
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
        <i class="fa fa-location"></i>
      </div>
    </yandex-map-marker>
  </yandex-map>
</template>

