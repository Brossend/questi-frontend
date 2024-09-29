<template>
  <div style="background-color: var(--gray);  height: calc(100vh - 66px); width: 100%; display: flex; flex-direction: column; position: absolute; margin-left: -19px;">
    <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 15px;">
      <VButtonIcon left="0" style="margin-right: auto; margin-left: 18px;" top="0" @click="openQuest" >
        <VIcon color="grey-7" name="west" size="28" />
      </VButtonIcon>
      <p style="font-weight: 600;  margin-left: -18px; font-size: 20px; line-height: 24px; margin-right: auto">
        {{ route.title }}
      </p>
    </div>
    <yandex-map
      v-if="!isLoading"
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
          src="../../../assets/icons/Marker.svg"
        >
      </yandex-map-marker>

      <yandex-map-marker
        :settings="{ coordinates: position.coords }"
      >
        <img
          alt="position"
          src="../../../assets/icons/PositionMarker.svg"
        >
      </yandex-map-marker>
    </yandex-map>
  </div>
</template>

<script setup lang="ts">
import VButtonIcon from 'components/UI/VButtonIcon/VButtonIcon.vue';
import VIcon from 'components/UI/VIcon/VIcon.vue';
import {IProps} from 'components/RouteCard/RouteCardDetail/types';
import {NEARBY_POINTS} from 'src/mocks/data';
import {
  createYmapsOptions, initYmaps,
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker
} from 'vue-yandex-maps';
import {onMounted, ref} from 'vue';

defineProps<IProps>();
const emit = defineEmits(['openQuest']);

const isLoading = ref(true);
const position = ref();

const openQuest = () => {
  emit('openQuest');
};

onMounted(async () => {
  await createYmapsOptions({ apikey: '72f42b4f-6f60-4c7c-a61d-587906227047'});
  await initYmaps();

  position.value = await ymaps3.geolocation.getPosition();
  isLoading.value = false;
});
</script>

<style scoped lang="scss" src="./RouteCardQuest.scss" />
