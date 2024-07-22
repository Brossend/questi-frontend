<template>
  <q-icon :name="name" :color="color" :style="{ fontSize: `${size}px` }"/>
</template>

<script setup lang="ts">
 import { IVIcon } from 'components/UI/VIcon/types';

 withDefaults(defineProps<IVIcon>(), {
   size: '16',
   color: 'black'
 });
</script>

<style scoped lang="scss">

</style>
