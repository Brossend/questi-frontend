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
      v-model="map"
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

      <yandex-map-feature
        v-if="way"
        :settings="{
            ...way,
            style: lineStyle,
        }"
      />
    </yandex-map>
  </div>
</template>

<script setup lang="ts">
import VButtonIcon from 'components/UI/VButtonIcon/VButtonIcon.vue';
import VIcon from 'components/UI/VIcon/VIcon.vue';
import {IProps} from 'components/RouteCard/RouteCardDetail/types';
import {
  createYmapsOptions, getLocationFromBounds, initYmaps,
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer, YandexMapFeature,
  YandexMapMarker
} from 'vue-yandex-maps';
import type { YMapLocationRequest } from '@yandex/ymaps3-types/imperative/YMap';
import type { DrawingStyle, LngLat, RouteFeature, YMap } from '@yandex/ymaps3-types';
import {onMounted, ref, shallowRef} from 'vue';

const props = defineProps<IProps>();
const emit = defineEmits(['openQuest']);

const isLoading = ref(true);
const position = ref();
const way = ref<RouteFeature | null>(null);
const map = shallowRef<YMap | null>(null);

const openQuest = () => {
  emit('openQuest');
};

const getPosition = () => {
  setInterval(async () => {
    position.value = await ymaps3.geolocation.getPosition();
  }, 1000);
};

const location = ref<YMapLocationRequest>();

const lineStyle: DrawingStyle = {
  fillRule: 'nonzero',
  fill: '#333',
  fillOpacity: 0.9,
  stroke: [
    {
      width: 6,
      color: '#007afce6',
    },
    {
      width: 10,
      color: '#fff',
    },
  ],
};

const fetchRoute = async (startCoordinates: LngLat, endCoordinates: LngLat) => {
  const routes = await ymaps3.route({
    points: [startCoordinates, endCoordinates],
    type: 'walking',
    bounds: true,
  });

  if (!routes[0]) return;

  const firstRoute = routes[0].toRoute();

  if (firstRoute.geometry.coordinates.length === 0) return;

  return firstRoute;
};

const routeHandler = async (newRoute?: RouteFeature) => {
  if (!newRoute) {
    alert('Route not found');
    way.value = null;
    return;
  }

  way.value = newRoute;
  if (newRoute.properties.bounds) {
    const newLocation = await getLocationFromBounds({
      bounds: newRoute.properties.bounds,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      map: map.value!,
    });

    location.value = {
      center: newLocation.center,
      zoom: Math.floor(newLocation.zoom) - 1,
      duration: 300,
    };
  }
};


onMounted(async () => {
  await createYmapsOptions({ apikey: '72f42b4f-6f60-4c7c-a61d-587906227047'});
  await initYmaps();

  position.value = await ymaps3.geolocation.getPosition();
  isLoading.value = false;
  location.value = {
    center: position.value.coords,
    zoom: 17,
  };
  //getPosition();

  const fetchedRoute = await fetchRoute(position.value.coords, props.route.allPoints[0].coordinates);
  await routeHandler(fetchedRoute);
});

// watch(VueYandexMaps.loadStatus, async status => {
//   if (status !== 'loaded') return;
//
//   const fetchedRoute = await fetchRoute(position.value.coords, pointBCoordinates.value);
//   await routeHandler(fetchedRoute);
// }, {
//   immediate: true,
// });
</script>

<style scoped lang="scss" src="./RouteCardQuest.scss" />
