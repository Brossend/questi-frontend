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
  </yandex-map>
</template>

<script setup lang="ts">
import {
  createYmapsOptions,
  initYmaps,
  YandexMap,
  YandexMapDefaultSchemeLayer,
} from 'vue-yandex-maps';

createYmapsOptions({ apikey: '72f42b4f-6f60-4c7c-a61d-587906227047'});
initYmaps();
</script>

