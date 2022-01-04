<template>
    <div>
        <h2>
            Upload your express tracking number 
        </h2>

        <form action="">

          <div v-for="(data , index) in datas" :key="index">
            
            <input  type="text"  v-model="data.name">

            <button @click.prevent="remove(index)">remove</button>

          </div>

          <button @click.prevent="add">add</button>

            
            <!-- <div>
              <button
                type="submit"
                :disabled="isLoading"
                :class="{ 'cursor-not-allowed ': isLoading }"
                class="w-full primary-btn"
              >
                <LoadingIndicator
                  v-if="isLoading"
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                />

                {{ isLoading ? 'Registering' : 'Register' }}
              </button>
            </div> -->

            <PrimaryButton :isLoading=isLoading class="w-full">
                {{ isLoading ? 'Registering' : 'Register' }}
            </PrimaryButton>



        </form>
    </div>
</template>

<script setup>
import { ref , } from 'vue';
import PrimaryButton from '@/components/PrimaryButton.vue';

const isLoading = ref(false);
const datas = ref([
  {name:''}
])

  function add(){
    datas.value.push({name:''})
  }

  function remove(index){
    datas.value.splice(index, 1);
  }


    function upload(){

        console.log(datas)
          axios
            .post('tracking', datas)
            .then((response) => {
                isLoading.value = false;
                console.log(response)
            })
            .catch((err) => {
                isLoading.value = false;
                console.log(err.response.data.message);
            });
    }

</script>