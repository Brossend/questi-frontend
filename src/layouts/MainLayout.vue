<template>
  <div style="display: flex; flex-direction: column; height: 100%">
    <router-view />

    <div v-if="!isAuthPage" style="
  margin-top: auto;
  margin-bottom: 0;
  background-color: rgba(44, 44, 44, 1);
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ">
      <template v-for="bar in BAR_TABS" :key="bar.name">
        <router-link :style="{ backgroundColor: activeLink === bar.link ? 'rgba(77, 77, 77, 1)' : '' }"
                     :to="bar.link"
                     style="
                     width: 100%;
                   color: rgba(241, 237, 236, 1);
                   text-decoration: none;
                   display: flex;
                   flex-direction: column;
                   padding: 6px 7px 4px;
">
          <v-icon :name="bar.icon" color="white" size="21" style="margin: auto" />
          <p style="margin: auto; white-space: nowrap; font-weight: 400; font-size: 11px; line-height: 13px">{{ bar.name
            }}</p>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BAR_TABS } from 'layouts/types';
import VIcon from 'components/UI/VIcon/VIcon.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useAuthStore } from 'stores/Auth/Auth';
import { storeToRefs } from 'pinia';

defineOptions({
  name: 'MainLayout'
});

const authStore = useAuthStore();
const { isAuthPage } = storeToRefs(authStore);

const router = useRoute();

const activeLink = computed(() => {
  return router.path;
});
</script>
