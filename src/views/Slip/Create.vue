<template>
  <div class="max-w-7xl mx-auto pt-10">
    <!-- bank account -->
    <div class="bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3
          class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"
        >
          Bank Account Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-50">
          Account Details
        </p>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-50">
              Account #
            </dt>
            <dd
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white"
            >
              9995-366-26565-888202
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-50">
              Account Name
            </dt>
            <dd
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white"
            >
              Ronald Tan
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-50">
              Bank Name
            </dt>
            <dd
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white"
            >
              May Bank
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- upload form -->
    <form
      class="space-y-8 divide-y divide-gray-200 my-10 mx-4 mb:mx-0"
      @submit.prevent="upload"
    >
      <div class="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3
              class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
            >
              Upload your Slip
            </h3>

            <p
              v-if="packageData"
              class="mt-1 text-sm text-gray-500 dark:text-gray-50 dark:text-gray-100"
            >
              Package Number : <span>{{ packageData.number }}</span>
            </p>

            <p
              v-if="errorStatus"
              class="mt-1 text-sm text-gray-500 dark:text-gray-50"
            >
              sorry cant fetch your data at the moment, remote server reponse
              with
              {{ errorStatus }}
            </p>
          </div>

          <div class="mb-2" v-if="validationErrors">
            <p
              class="validation-error"
              v-for="(error, index) in validationErrors"
              :key="index"
            >
              {{ error[0] }}
            </p>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <input
                type="file"
                class="hidden"
                id="slip"
                @change="updateFile"
              />
              <div class="mt-1 flex items-center">
                <label
                  for="slip"
                  class="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Choose Slip
                </label>
              </div>
            </div>

            <div class="sm:col-span-6" v-if="url">
              <img
                :src="url"
                alt="slip"
                class="rounded-md h-60 w-60 dark:border dark:border-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <PrimaryButton :isLoading="isLoading">
            {{ isLoading ? 'Uploading' : 'Upload' }}
          </PrimaryButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import PrimaryButton from '@/components/PrimaryButton.vue';

const props = defineProps({
  id: {
    type: [String],
    Required: true,
  },
});

const packageData = ref('');
const errorStatus = ref('');
const store = useStore();
const isLoading = ref(false);
const file = ref('');
const url = ref('');
const validationErrors = ref({});

function fetch() {
  axios
    .get(`/api/package/${props.id}`)
    .then((response) => {
      packageData.value = response.data;
    })
    .catch((err) => {
      console.log(err.response.status);
      if (err.response.status == 401) {
        store.dispatch('logout');
      }

      errorStatus.value = err.response.status;
      console.log(err.response.status);
    });
}

function updateFile(event) {
  file.value = event.target.files[0];
}

function upload() {
  isLoading.value = true;

  let form = new FormData();
  form.append('file', file.value);
  form.append('package_id', props.id);

  axios
    .post(`/api/slip`, form)
    .then((response) => {
      isLoading.value = false;

      console.log(response);
      url.value = response.data.url;
    })
    .catch((err) => {
      isLoading.value = false;
      let status = err.response.status;

      if (status == 422) {
        validationErrors.value = err.response.data.errors;
      }

      if (status == 401) {
        store.dispatch('logout');
      }

      console.log(status);
    });
}
fetch();
</script>
