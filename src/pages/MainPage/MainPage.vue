<template>
  <div style="display: grid; margin-left: 19px; margin-right: 21px;">
    <RouteCard v-for="route in ROUTES" :key="route.id" :route="route" />
  </div>

  <!--  <p v-if="!authStore.isLoading">{{ `Аксесс токен: ${accessToken}` }}</p>-->

  <!--  <v-button type="dark" @click="unLogin">Разлогиниться</v-button>-->
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
// import VButton from 'components/UI/VButton/VButton.vue';
import { useAuthStore } from 'stores/Auth/Auth';
import RouteCard from 'components/RouteCard/RouteCard.vue';
import { ROUTES } from 'src/mocks/data';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { isAuthPage } = storeToRefs(authStore);

// const accessToken = computed(() => {
//   if (!authStore.isLoading) {
//     return LocalStorage.getItem('access_token');
//   }
//   return '';
// });
//
// const unLogin = () => {
//   LocalStorage.removeItem('access_token');
//   window.location.reload();
// };

onMounted(() => {
  isAuthPage.value = false;
});
</script>

<style lang="scss" scoped />
