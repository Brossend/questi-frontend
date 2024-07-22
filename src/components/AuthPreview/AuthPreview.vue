<template>
  <div class="view-wrapper">
    <AuthPreviewLogo />
    <div class="view-wrapper__buttons">
      <VButton type="dark">Регистрация</VButton>
      <VButton type="light">Вход</VButton>
    </div>
  </div>
</template>

<script setup lang="ts">

import VButton from 'components/UI/VButton/VButton.vue';
import AuthPreviewLogo from 'components/AuthPreview/AuthPreviewLogo/AuthPreviewLogo.vue';
</script>

<style scoped lang="scss" src="./AuthPreview.scss" />
