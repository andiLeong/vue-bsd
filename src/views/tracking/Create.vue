<template>
  <div>
    <h2>Upload your express tracking number</h2>

    <form action="">
      <div v-for="(data, index) in datas" :key="index">
        <input type="text" v-model="data.name" />

        <button @click.prevent="remove(index)">remove</button>
      </div>

      <button @click.prevent="add">add</button>

      <PrimaryButton :isLoading="isLoading" class="w-full">
        {{ isLoading ? 'Saving' : 'Save' }}
      </PrimaryButton>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PrimaryButton from '@/components/PrimaryButton.vue';

const isLoading = ref(false);
const datas = ref([{ name: '' }]);

function add() {
  datas.value.push({ name: '' });
}

function remove(index) {
  datas.value.splice(index, 1);
}

function upload() {
  console.log(datas);
  axios
    .post('tracking', datas)
    .then((response) => {
      isLoading.value = false;
      console.log(response);
    })
    .catch((err) => {
      isLoading.value = false;
      console.log(err.response.data.message);
    });
}
</script>
