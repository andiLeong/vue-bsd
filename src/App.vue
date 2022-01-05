<template>
  <div :class="myTheme" class="flex flex-col items-stretch min-h-screen">
    <TheNavigation @change="action"></TheNavigation>

    <div class="flex-1 dark:bg-gray-800">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import { useStore } from 'vuex';
import { ref, computed, onMounted } from 'vue';

const store = useStore();
const myTheme = ref();

const user = localStorage.getItem('user');

// isLogin(user);
// console.log('app component is created !');

if (user) {
  const data = JSON.parse(user);
  store.commit('SET_LOGGIN_DATA', data);
}

function action(theme) {
  myTheme.value = theme;
}

const localTheme = localStorage.getItem('theme');
if (localTheme) {
  myTheme.value = localTheme;
  store.commit('SET_THEME', localTheme);
}
</script>
