<template>
  <div>
    <div style="display: flex; flex-direction: row; margin-bottom: 8px;">
      <img :alt="post.id" :src="post.avatar" style="width: 30px; height: 30px; border-radius: 50px" />
      <div style="display: flex; flex-direction: column; margin-left: 7px;">
        <p style="font-size: 14px; font-weight: 500; line-height: 17px; margin-bottom: 3px;">{{ post.name }}</p>
        <p style="font-size: 11px; font-weight: 400; line-height: 13px; color: #8F8D8C;">{{ post.date }}</p>
      </div>
    </div>
    <p style="font-weight: 400; font-size: 13px; line-height: 16px; margin-bottom: 6px;">{{ post.description }}</p>
    <img :alt="post.id" :src="post.image" style="width: 100%; margin-bottom: 8px;" />
    <div style="display: flex; flex-direction: row;">
      <v-icon name="o_favorite" size="20" />
      <v-icon name="o_comment" size="20" style="margin-left: 17px" />
      <v-icon name="o_info" size="20" style="margin-left: auto" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VIcon from 'components/UI/VIcon/VIcon.vue';
import { IProps } from 'components/FeedCard/types';

defineProps<IProps>();
</script>

<style lang="scss" scoped src="./FeedCard.scss" />
