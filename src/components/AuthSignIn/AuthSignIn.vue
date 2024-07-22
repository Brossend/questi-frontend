<template>
  <div class="view-wrapper">
    <VButtonIcon left="16" top="30">
      <VIcon name="west" size="28" color="grey-7" />
    </VButtonIcon>
    <p class="view-wrapper__text">Регистрация</p>
    <div class="view-wrapper__form">
      <div class="view-wrapper__inputs">
        <template v-for="input in inputs" :key="input.id">
          <VInput :placeholder="input.placeholder" />
        </template>
      </div>
      <div class="view-wrapper__split">
        <span class="view-wrapper__split-text">или</span>
      </div>
      <div style="width: 290px; display: flex; justify-content: center; gap: 28px; margin-top: 17px;">
        <img src="../../assets/icons/VK.svg" alt="VK" />
        <img src="../../assets/icons/Google.svg" alt="Google" />
      </div>
    </div>
    <div class="view-wrapper__button">
      <VButton type="dark">Продолжить</VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import VButton from 'components/UI/VButton/VButton.vue';
import VInput from 'components/UI/VInput/VInput.vue';
import VIcon from 'components/UI/VIcon/VIcon.vue';
import VButtonIcon from 'components/UI/VButtonIcon/VButtonIcon.vue';
import {ref} from 'vue';
import {TInputs} from 'components/AuthSignIn/types';

const inputs = ref<TInputs[]>([
  {
    placeholder: 'Имя',
    value: '',
    id: 'name'
  },
  {
    placeholder: 'Номер телефона',
    value: '',
    id: 'phone'
  },
  {
    placeholder: 'Пароль',
    value: '',
    id: 'password'
  },
]);
</script>

<style scoped lang="scss" src="./AuthSignIn.scss" />
