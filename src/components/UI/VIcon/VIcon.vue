<template>
  <q-icon :color="color" :name="name" :style="computedFontSize" />
</template>

<script lang="ts" setup>
import { defaultProps, IVIcon } from 'components/UI/VIcon/types';
import { computed } from 'vue';

const props = withDefaults(defineProps<IVIcon>(), defaultProps);

const computedFontSize = computed(() => ({
  fontSize: `${props.size}px`
}));
</script>

<style lang="scss" scoped src="./VIcon.scss" />
