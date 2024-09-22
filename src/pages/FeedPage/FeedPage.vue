<template>
  <div style="padding: 13px 21px 20px 19px;">
    <p style="font-size: 16px; font-weight: 600; line-height: 19px;">Подписки</p>
    <div
      style="display: flex; flex-direction: row; gap: 20px; margin-bottom: 22px; margin-top: 22px; overflow-x: scroll;">
      <div v-for="sub in FEED.subs" :key="sub.id"
           style="display: flex; flex-direction: column;">
        <img :alt="sub.id" :src="sub.image"
             style="border-radius: 50px; width: 63px; height: 63px; margin-bottom: 6px" />
        <p style="margin: 0 auto">{{ sub.name }}</p>
      </div>
    </div>
    <div style="border-bottom: 1px solid #8F8D8C; display: flex; flex-direction: row; justify-content: center;">
      <p
        style="font-weight: 400; font-size: 10px; line-height: 12px; margin-bottom: 7px;">
        Посмотреть
        всех</p>
    </div>
    <p style="font-size: 16px; font-weight: 600; line-height: 19px; margin-bottom: 21px; margin-top: 14px;">
      Публикации</p>
    <div style="display: flex; flex-direction: column; row-gap: 25px;">
      <FeedCard v-for="post in FEED.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FEED } from 'src/mocks/data';
import FeedCard from 'components/FeedCard/FeedCard.vue';
</script>

<style lang="scss" scoped src="./FeedPage.scss" />
