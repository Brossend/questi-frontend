<template>
  <button :style="computedMargin" class="button">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { IVButtonIcon } from 'components/UI/VButtonIcon/types';
import { computed } from 'vue';

const props = defineProps<IVButtonIcon>();

const computedMargin = computed(() => ({
  marginLeft: `${props.left}px`,
  marginTop: `${props.top}px`
}));
</script>

<style lang="scss" scoped src="./VButtonIcon.scss" />
