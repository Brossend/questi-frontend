<template>
  <button :class="{'button': true, 'button--light': isLight}" >
    <slot/>
  </button>
</template>

<script setup lang="ts">
import {IVButton} from 'components/UI/VButton/types';
import {computed} from 'vue';

const props = defineProps<IVButton>();

const isLight = computed(() => {
  return props.type === 'light';
});
</script>

<style scoped lang="scss" src="./VButton.scss" />
