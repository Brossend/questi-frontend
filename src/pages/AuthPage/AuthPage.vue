<template>
  <div class="page-wrapper">
    <AuthPreview v-if="true" />
    <AuthSignIn  v-if="false" />
  </div>
</template>

<script setup lang="ts">
import AuthPreview from 'components/AuthPreview/AuthPreview.vue';
import AuthSignIn from 'components/AuthSignIn/AuthSignIn.vue';
</script>

<style scoped lang="scss" src="./AuthPage.scss"/>
