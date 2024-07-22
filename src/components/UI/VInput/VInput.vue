<template>
  <input class="input" :placeholder="props.placeholder" />
</template>

<script setup lang="ts">
import {IVInput} from 'components/UI/VInput/types';

const props = defineProps<IVInput>()
</script>

<style scoped lang="scss" src="./VInput.scss"/>
