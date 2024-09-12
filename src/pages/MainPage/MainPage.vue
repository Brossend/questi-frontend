<template>
  {{ authStore.test }}
  <p>{{ `Аксесс токен: ${accessToken}` }}</p>

  <v-button type="dark" @click="unLogin">Разлогиниться</v-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VButton from 'components/UI/VButton/VButton.vue';
import { useAuthStore } from 'stores/Auth/Auth';

const authStore = useAuthStore();

const accessToken = ref(localStorage.getItem('access_token'));

const unLogin = () => {
  localStorage.removeItem('access_token');
  window.location.reload();
};
</script>

<style lang="scss" scoped />
