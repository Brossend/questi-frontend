<template>
  <div class="page-wrapper">
    <AuthPreview v-if="isPreview" @changeSection="changeSection" />
    <AuthSignIn v-if="isSignIn" @changeSection="changeSection" />
    <AuthSignUp v-if="isSignUp" @changeSection="changeSection" />
  </div>
</template>

<script lang="ts" setup>
import AuthPreview from 'components/AuthPreview/AuthPreview.vue';
import AuthSignIn from 'components/AuthSignIn/AuthSignIn.vue';
import AuthSignUp from 'components/AuthSignUp/AuthSignUp.vue';
import { ref } from 'vue';
import { ESection } from 'pages/AuthPage/types';

const isPreview = ref(true);
const isSignIn = ref(false);
const isSignUp = ref(false);

const changeSection = (section: string) => {
  switch (section) {
    case ESection.preview:
      isPreview.value = true;
      isSignIn.value = false;
      isSignUp.value = false;
      break;

    case ESection.signUp:
      isSignUp.value = true;
      isSignIn.value = false;
      isPreview.value = false;
      break;

    case ESection.signIn:
      isSignIn.value = true;
      isSignUp.value = false;
      isPreview.value = false;
      break;
  }
};
</script>

<style lang="scss" scoped src="./AuthPage.scss" />
