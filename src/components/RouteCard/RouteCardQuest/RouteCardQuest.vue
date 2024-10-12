<template>
  <div style="background-color: var(--gray);  height: calc(100vh - 66px); width: 100%; display: flex; flex-direction: column; position: absolute; margin-left: -19px;">
    <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 15px;">
      <div style="display: flex; width: 100%; flex-direction: row; justify-content: center; margin-bottom: 7px;">
        <VButtonIcon left="0" style="margin-right: auto; margin-left: 18px;" top="0" @click="openQuest" >
          <VIcon color="grey-7" name="west" size="28" />
        </VButtonIcon>
        <p style="font-weight: 600;  margin-left: -18px; font-size: 20px; line-height: 24px; margin-right: auto">
          {{ route.title }}
        </p>
      </div>
      <div style="display: flex; flex-direction: row; gap: 6px; margin: 0 auto;">
        <img style="width: 13px; height: 17px" src="../../../assets/icons/Marker.svg" />
        <p>Подойдите к точке, чтобы получить задание</p>
      </div>
    </div>
    <yandex-map
      v-if="!isLoading"
      :settings="{
      location: {
        center: position.coords,
        zoom: 17,
      },
    }"
    >
      <yandex-map-default-scheme-layer :settings="{ theme: 'light' }" />
      <yandex-map-default-features-layer/>
      <yandex-map-marker
        v-for="(point, index) in route.allPoints"
        :key="index"
        position="top-center left-center"
        :settings="{ coordinates: point.coordinates }"
      >
        <img
          v-if="point.active"
          :alt="point.title"
          src="../../../assets/icons/Marker.svg"
        >
        <img
          v-else
          :alt="point.title"
          src="../../../assets/icons/MarkerEmpty.svg"
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
    <div style="display: flex; position: absolute; height: 100%; width: 100%;">
      <button style="margin-top: auto; height: 59px; background-color: #F9C972; border: 0; cursor: pointer; margin-bottom: 8px; width: 308px; border-radius: 25px; margin-top: auto; margin-left: auto; margin-right: auto;">
        <span style="font-weight: 600; font-size: 20px; line-height: 24px; color: #E9680A">Я на месте!</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import VButtonIcon from 'components/UI/VButtonIcon/VButtonIcon.vue';
import VIcon from 'components/UI/VIcon/VIcon.vue';
import {IProps} from 'components/RouteCard/RouteCardDetail/types';
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPosition = () => {
  setInterval(async () => {
    position.value = await ymaps3.geolocation.getPosition();
  }, 1000);
}

onMounted(async () => {
  await createYmapsOptions({ apikey: '72f42b4f-6f60-4c7c-a61d-587906227047'});
  await initYmaps();

  position.value = await ymaps3.geolocation.getPosition();
  isLoading.value = false;
  //getPosition();
});
</script>

<style scoped lang="scss" src="./RouteCardQuest.scss" />
