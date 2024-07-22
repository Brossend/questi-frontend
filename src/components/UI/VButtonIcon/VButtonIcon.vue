<template>
 <button :style="{ marginLeft: props.left + 'px', marginTop: props.top + 'px' }" class="button">
   <slot/>
 </button>
</template>

<script setup lang="ts">
import {IVButtonIcon} from 'components/UI/VButtonIcon/types';

const props = defineProps<IVButtonIcon>();
</script>

<style scoped lang="scss" src="./VButtonIcon.scss" />
