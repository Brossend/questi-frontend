<template>
  <div class="view-wrapper">
    <AuthPreviewLogo />
    <div class="view-wrapper__buttons">
      <VButton type="dark" @click="onSignIn">Регистрация</VButton>
      <VButton type="light" @click="onSignUp">Вход</VButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VButton from 'components/UI/VButton/VButton.vue';
import AuthPreviewLogo from 'components/AuthPreview/AuthPreviewLogo/AuthPreviewLogo.vue';
import { ESection } from 'pages/AuthPage/types';

const emit = defineEmits(['changeSection']);

const onSignIn = () => {
  emit('changeSection', ESection.signIn);
};

const onSignUp = () => {
  emit('changeSection', ESection.signUp);
};
</script>

<style lang="scss" scoped src="./AuthPreview.scss" />
