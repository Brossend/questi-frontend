<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  if (!localStorage.getItem('isAuthenticated')) {
    router.push('/auth');
  }
});
</script>
