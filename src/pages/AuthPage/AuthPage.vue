<template>
  <div class="page-wrapper">
    <AuthPreview v-if="false" />
    <AuthSignIn  v-if="true" />
  </div>
</template>

<script setup lang="ts">
import AuthPreview from 'components/AuthPreview/AuthPreview.vue';
import AuthSignIn from 'components/AuthSignIn/AuthSignIn.vue';
</script>

<style scoped lang="scss" src="./AuthPage.scss"/>
