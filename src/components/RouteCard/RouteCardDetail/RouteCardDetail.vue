<template>
  <div
    style="background-color: var(--gray); overflow-y: auto; height: calc(100vh - 66px); width: 100%; display: flex; flex-direction: column; position: absolute; margin-left: -19px;">
    <div style="display: flex; flex-direction: row; justify-content: center;">
    <VButtonIcon left="0" style="margin-right: auto; margin-left: 18px;" top="0" @click="openDetail">
      <VIcon color="grey-7" name="west" size="28" />
    </VButtonIcon>
    <p style="font-weight: 600;  margin-left: -18px; font-size: 20px; line-height: 24px; margin-right: auto">
      {{ route.title }}</p>
  </div>
    <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 15px; margin-top: 8px;">
      <div style="border-radius: 10px; padding: 3px 4px; background-color: rgba(255, 255, 255, 0.8);">
        <p style="font-weight: 400; font-size: 10px; line-height: 12px; color: rgba(0, 0, 0, 0.8);">
          {{ routeType(route.type) }}</p>
      </div>
    </div>

    <img :alt="route.title" :src="route.image" style="width: 100%; height: 186px; object-fit: cover;" />

    <div style="display: flex; flex-direction: row; padding-left: 18px; padding-right: 18px; margin-top: 11px;">
      <div style="display: flex; flex-direction: row; gap: 9px">
        <v-icon name="o_location_on" size="19" />
        <div style="font-size: 13px; font-weight: 400; line-height: 18px;">
          Стартовая точка:
          <template v-for="point in route.startPoints" :key="point.title">
            <p>{{ point.title }}</p>
          </template>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; gap: 9px; margin-left: auto;">
        <v-icon name="schedule" size="19" />
        <p style="font-size: 13px; font-weight: 400; line-height: 18px;">{{ `${route.duration} минут` }}</p>
      </div>
    </div>

    <div
      style="display: flex; flex-direction: column; border-radius: 25px; border: 1px rgba(44, 44, 44, 1) solid; padding: 21px 22px 16px; margin: 14px 18px 23px;">
      <p style="margin: 0 auto 10px; font-weight: 500; font-size: 15px; line-height: 18px;">Описание</p>
      <p style="font-size: 13px; font-weight: 400; line-height: 18px;">{{ route.description }}</p>
      <p style="margin: 20px auto 10px; font-weight: 500; font-size: 15px; line-height: 18px;">Точки</p>
      <template v-for="(point, index) in route.points" :key="point.title">
        <p style="font-size: 13px; font-weight: 400; line-height: 18px;">{{ `${index + 1}, ${point.title}` }}</p>
      </template>
      <p style="margin-top: 30px; font-size: 13px; font-weight: 400; line-height: 18px;">Всего полчаса, но столько
        впечатлений!</p>
    </div>

    <button @click="openQuest" style="margin-top: auto; height: 59px; padding-top: 18px; padding-bottom: 18px; background-color: #F9C972; border: 0; cursor: pointer">
      <span style="font-weight: 600; font-size: 20px; line-height: 24px; color: #E9680A">Начать!</span>
    </button>
  </div>

  <RouteCardQuest v-if="isOpenQuest" @open-quest="openQuest" @close-quest="openDetail" :route="route" />
</template>

<script lang="ts" setup>
import VIcon from 'components/UI/VIcon/VIcon.vue';
import VButtonIcon from 'components/UI/VButtonIcon/VButtonIcon.vue';
import { IProps } from 'components/RouteCard/RouteCardDetail/types';
import { routeType } from 'src/helpers/routeType';
import { ref} from 'vue';
import RouteCardQuest from 'components/RouteCard/RouteCardQuest/RouteCardQuest.vue';

defineProps<IProps>();
const emit = defineEmits(['openDetail']);

const isOpenQuest = ref(false);

const openDetail = () => {
  emit('openDetail');
};

const openQuest = () => {
  isOpenQuest.value = !isOpenQuest.value
};
</script>

<style lang="scss" scoped src="./RouteCardDetail.scss" />
