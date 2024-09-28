<template>
  <yandex-map
    :settings="{
      location: {
        center: [73.379738, 54.982473],
        zoom: 17,
      },
    }"
  >
    <yandex-map-default-scheme-layer :settings="{ theme: 'light' }" />
    <yandex-map-default-features-layer/>
    <yandex-map-marker
      v-for="(point, index) in NEARBY_POINTS"
      :key="index"
      position="top-center left-center"
      :settings="{ coordinates: point.coordinates }"
    >
      <img
        :alt="point.title"
        src="../../assets/icons/Marker.svg"
      >
    </yandex-map-marker>
  </yandex-map>
</template>

<script setup lang="ts">
import {
  createYmapsOptions,
  initYmaps,
  YandexMap, YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer, YandexMapMarker
} from 'vue-yandex-maps';
import {NEARBY_POINTS} from 'src/mocks/data';

createYmapsOptions({ apikey: '72f42b4f-6f60-4c7c-a61d-587906227047'});
initYmaps();
</script>

