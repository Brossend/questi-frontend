<template>
  <div style="padding-left: 18px; padding-right: 22px; padding-top: 13px; height: 100%; overflow-y: auto; min-height: 660px">
    <div style="display: flex; flex-direction: row; justify-content: right;">
      <v-icon name="o_settings" size="28" />
    </div>
    <div style="display: flex; flex-direction: row;">
      <img :alt="PROFILE.name" :src="PROFILE.avatar" style="width: 87px; height: 87px; border-radius: 50px" />
      <div style="margin-left: 16px; display: flex; flex-direction: column;">
        <div style="display: flex; flex-direction: row; margin-bottom: 21px;">
          <p style="font-weight: 600; font-size: 20px; line-height: 24px; margin-right: 3px; white-space: nowrap">
            {{ PROFILE.name }}</p>
          <p style="font-weight: 400; font-size: 15px; line-height: 18px; margin-right: 2px; margin-top: 5px">
            {{ `#${PROFILE.id}` }}</p>
          <v-icon name="o_content_copy" size="12" style="margin-top: 8px" />
        </div>
        <div style="display: flex; flex-direction: row; gap: 21px">
          <div style="display: flex; flex-direction: column;">
            <p style="margin: 0 auto; font-size: 18px; font-weight: 600; line-height: 21px">{{ PROFILE.quests }}</p>
            <p style="font-size: 12px; font-weight: 500; line-height: 14px">Квестов</p>
          </div>
          <div style="display: flex; flex-direction: column;">
            <p style="margin: 0 auto; font-size: 18px; font-weight: 600; line-height: 21px">{{ PROFILE.subscriptions
              }}</p>
            <p style="font-size: 12px; font-weight: 500; line-height: 14px">Подписок</p>
          </div>
          <div style="display: flex; flex-direction: column;">
            <p style="margin: 0 auto; font-size: 18px; font-weight: 600; line-height: 21px">{{ PROFILE.subscribers
              }}</p>
            <p style="font-size: 12px; font-weight: 500; line-height: 14px">Подписчиков</p>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 21px">
      <div style="display: flex; flex-direction: row; gap: 5px; margin-bottom: 12px">
        <p style="font-weight: 600; font-size: 18px; line-height: 21px">Достижения</p>
        <button
          style="display: flex; flex-direction: row; gap: 3px; background-color: transparent; border: none; padding: 0; margin-top: 4px">
          <span style="font-size: 11px; font-weight: 400; line-height: 13px; color: #8F8D8C; margin: auto 0">Посмотреть все</span>
          <v-icon name="east" size="9" style="margin: auto 0" />
        </button>
      </div>
      <div
        style="border-radius: 10px; margin-bottom: 33px; border: 1px solid #D0CDCC; padding: 9px; display: flex; flex-direction: row; justify-content: space-between;">
        <img v-for="n in 5" :key="n" alt="Достижение" src="../../assets/image/achive.svg" />
      </div>
    </div>
    <div
      style="display: flex; flex-direction: row; background-color: #D0CDCC; border-radius: 25px; padding: 9px 16px 9px 13px;">
      <input placeholder="Добавить запись"
             style="background-color: #D0CDCC; border: none; width: 100%; margin: auto 0; font-size: 14px; font-weight: 400; line-height: 17px; outline:none;" />
      <div style="background-color: #D0CDCC; width: fit-content">
        <v-icon color="grey" name="o_post_add" size="20" />
      </div>
    </div>
    <div
      style="margin-top: 28px; display: flex; flex-direction: column; row-gap: 25px; padding-bottom: 20px; overflow-y: auto; height: calc(100% - 354px);">
      <FeedCard v-for="post in PROFILE.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VIcon from 'components/UI/VIcon/VIcon.vue';
import FeedCard from 'components/FeedCard/FeedCard.vue';
import { PROFILE } from 'src/mocks/data';
</script>

<style lang="scss" scoped src="./ProfilePage.scss" />
