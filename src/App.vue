<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { LocalStorage } from 'quasar';

const router = useRouter();

onMounted(() => {
  if (!LocalStorage.getItem('access_token')) {
    router.push('/auth');
  }
});
</script>
