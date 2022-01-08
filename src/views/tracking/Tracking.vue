<template>
  <div class="max-w-7xl mx-auto pt-10">
    <!-- packag items -->
    <div class="bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3
          class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"
        >
          Items
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-50">
          Package item Details
        </p>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl
          class="sm:divide-y sm:divide-gray-200"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-50">
              {{ item.number }}
            </dt>
            <dd
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white"
            >
              {{ item.company }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  id: {
    type: [String],
    Required: true,
  },
});

const items = ref('');
const errorStatus = ref('');
const store = useStore();
const isLoading = ref(false);
const validationErrors = ref({});

function fetch() {
  axios
    .get(`/api/package/${props.id}`)
    .then((response) => {
      items.value = response.data.tracking;
      console.log(items.value);
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

fetch();
</script>
