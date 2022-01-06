<template>
  <div>profile section</div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

axios
  .get('/api/user')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error.response.status);

    if (error.response.status == 401) {
      store.dispatch('logout');
    }

    console.log(error);
  });
</script>
