<template>
  <div
    style="position: relative; border-radius: 25px; background-color: white; box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);"
    @click="openDetail">
    <img :alt="route.title" :src="route.image"
         style="border-radius: 25px 25px 0 0; width: 100%; height: 130px;">
    <div
      style="position: absolute; top: 8px; right: 16px; border-radius: 10px; padding: 3px 4px; background-color: rgba(255, 255, 255, 0.8);">
      <p style="font-weight: 400; font-size: 10px; line-height: 12px; color: rgba(0, 0, 0, 0.8);">
        {{ routeType(route.type) }}</p>
    </div>
    <div
      style="display: flex; flex-direction: row; justify-content: end; padding: 3px 14px 10px;">
      <p style="margin-right: auto; font-weight: 400; font-size: 12px; line-height: 14px;">{{ route.title }}</p>
      <div style="display: flex; flex-direction: row; margin: auto 0">
        <template v-for="n in route.rate" :key="n">
          <v-icon color="yellow" name="star" size="14" />
        </template>
      </div>
    </div>
  </div>

  <route-card-detail v-if="isOpenDetail" :route="route" @open-detail="openDetail" />
</template>

<script lang="ts" setup>
import { IProps } from 'components/RouteCard/types';
import VIcon from 'components/UI/VIcon/VIcon.vue';
import { routeType } from 'src/helpers/routeType';
import RouteCardDetail from 'components/RouteCard/RouteCardDetail/RouteCardDetail.vue';
import { ref } from 'vue';

defineProps<IProps>();

const isOpenDetail = ref(false);

const openDetail = () => {
  isOpenDetail.value = !isOpenDetail.value;
};
</script>

<style lang="scss" scoped src="./RouteCard.scss" />
