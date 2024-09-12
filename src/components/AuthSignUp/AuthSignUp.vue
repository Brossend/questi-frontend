<template>
  <VFrame>
    <VButtonIcon left="16" top="30" @click="changeSection">
      <VIcon color="grey-7" name="west" size="28" />
    </VButtonIcon>
    <p class="view-wrapper__text">Вход</p>
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
      <VButton type="dark" @click="signUp">Продолжить</VButton>
    </div>
  </VFrame>
</template>

<script lang="ts" setup>
import VFrame from 'components/UI/VFrame/VFrame.vue';
import VIcon from 'components/UI/VIcon/VIcon.vue';
import VButtonIcon from 'components/UI/VButtonIcon/VButtonIcon.vue';
import VInput from 'components/UI/VInput/VInput.vue';
import VButton from 'components/UI/VButton/VButton.vue';
import { ref } from 'vue';
import { TInputs } from 'components/AuthSignIn/types';
import { ESection } from 'pages/AuthPage/types';
import { formatPhoneNumber } from 'src/services/FormatPhoneNumber';
import { useRouter } from 'vue-router';

const router = useRouter();

const emit = defineEmits(['changeSection', 'signUp']);
const inputs = ref<TInputs[]>([
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

const changeSection = () => {
  emit('changeSection', ESection.preview);
};

const signUp = () => {
  if (inputs.value.every(obj => !!obj.value)) {
    emit('signUp', formatPhoneNumber(inputs.value[0].value), inputs.value[1].value);
    router.push('/');
  }
};
</script>

<style lang="scss" scoped src="./AuthSignUp.scss" />
