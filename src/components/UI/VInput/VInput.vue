<template>
  <input v-model="model" v-maska="mask" :placeholder="props.placeholder" :type="type" class="input" />
</template>

<script lang="ts" setup>
import { vMaska } from 'maska/vue';
import { ETypes, IVInput } from 'components/UI/VInput/types';
import { computed } from 'vue';

const props = defineProps<IVInput>();

const model = defineModel();

const mask = computed(() => {
  if (props.type === ETypes.phone) {
    return '+7 (###) ###-##-##';
  }

  return '';
});

const type = computed(() => {
  if (props.type === ETypes.password) {
    return 'password';
  }

  return '';
});
</script>

<style lang="scss" scoped src="./VInput.scss" />
