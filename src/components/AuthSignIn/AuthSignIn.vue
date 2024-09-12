<template>
  <VFrame>
    <VButtonIcon left="16" top="30" @click="changeSection">
      <VIcon color="grey-7" name="west" size="28" />
    </VButtonIcon>
    <p class="view-wrapper__text">Регистрация</p>
    <div class="view-wrapper__form">
      <div class="view-wrapper__inputs">
        <template v-for="input in inputs" :key="input.id">
          <VInput v-model="input.value" :placeholder="input.placeholder" :type="input.type" />
        </template>
      </div>
      <div class="view-wrapper__split">
        <span class="view-wrapper__split-text">или</span>
      </div>
      <div class="view-wrapper__other-auth">
        <img alt="VK" src="../../assets/icons/VK.svg" />
        <img alt="Google" src="../../assets/icons/Google.svg" />
      </div>
    </div>
    <div class="view-wrapper__button">
      <VButton type="dark" @click="signIn">Продолжить</VButton>
    </div>
  </VFrame>
</template>

<script lang="ts" setup>
import VButton from 'components/UI/VButton/VButton.vue';
import VInput from 'components/UI/VInput/VInput.vue';
import VIcon from 'components/UI/VIcon/VIcon.vue';
import VButtonIcon from 'components/UI/VButtonIcon/VButtonIcon.vue';
import { ref } from 'vue';
import { TInputs } from 'components/AuthSignIn/types';
import VFrame from 'components/UI/VFrame/VFrame.vue';
import { ESection } from 'pages/AuthPage/types';
import { formatPhoneNumber } from 'src/services/FormatPhoneNumber';

const emit = defineEmits(['changeSection', 'signIn']);

const inputs = ref<TInputs[]>([
  {
    placeholder: 'Имя',
    value: '',
    type: 'text',
    id: 'name'
  },
  {
    placeholder: 'Номер телефона',
    value: '',
    type: 'phone',
    id: 'phone'
  },
  {
    placeholder: 'Пароль',
    value: '',
    type: 'password',
    id: 'password'
  }
]);

const signIn = () => {
  if (inputs.value.every(obj => !!obj.value)) {
    emit('signIn', inputs.value[0].value, formatPhoneNumber(inputs.value[1].value), inputs.value[2].value);
  }
};

const changeSection = () => {
  emit('changeSection', ESection.preview);
};
</script>

<style lang="scss" scoped src="./AuthSignIn.scss" />
