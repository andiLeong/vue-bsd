<template>
  <table
    class="min-w-full divide-y divide-gray-200 mb-14"
    v-if="packages.length > 0"
  >
    <thead class="bg-gray-100">
      <tr>
        <th scope="col" class="table-head">Package Number</th>
        <th scope="col" class="table-head">Price</th>
        <th scope="col" class="table-head">Status</th>
        <th scope="col" class="table-head">Payment</th>
        <th scope="col" class="relative px-6 py-3">
          <span class="sr-only">Action</span>
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <InfiniteScroll :items="packages" @refetch="fetch" targetElement="table">
        <template v-slot:item="{ item }">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex flex-col">
              <div class="text-sm font-medium text-gray-900">
                {{ item.number }}
              </div>
              <div class="text-sm text-gray-500">
                includes
                <span class="text-green-500">
                  {{ item.tracking_count }}
                </span>
                tracking orders
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-gray-500">{{ item.price }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span
              v-if="item.status == 1"
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            >
              Delivered
            </span>

            <span
              v-else
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
            >
              Pending
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <span v-if="item.is_paid">Paid</span>
            <span v-else>Not Paid</span>
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
          >
            <DropDown v-cloak classes="right-7" :id="`bsd_${item.number}`">
              <template v-slot:trigger>
                <button class="hover:text-blue-500">...</button>
              </template>

              <li>
                <a :href="`slip/${item.id}/create`" class="dropdown-item"
                  >Payment</a
                >
              </li>
              <li>
                <a :href="`/package/${item.id}/tracking`" class="dropdown-item"
                  >Items</a
                >
              </li>
            </DropDown>
          </td>
        </template>

        <template v-slot:loading>
          <tr v-show="noMorePackages === false && fetching === true">
            <td colspan="5">
              <div class="flex justify-center my-4">
                <Spinner class="animate-spin -ml-1 mr-3 h-5 w-5 text-sky-600" />
              </div>
            </td>
          </tr>
        </template>
      </InfiniteScroll>
    </tbody>
  </table>

  <div
    v-else-if="noMorePackages"
    class="my-10 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-lime-200 text-center text-md"
  >
    No Packages at the moment !
  </div>

  <div v-else class="animate-pulse flex shadow rounded-md p-4">
    <div class="flex-1 space-y-6">
      <div class="h-60 bg-gray-200 rounded"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import InfiniteScroll from '@/components/InfiniteScroll.vue';
import Spinner from '@/components/Spinner.vue';
import DropDown from '@/components/DropDown.vue';

const packages = ref([]);
const noMorePackages = ref(false);
const lastPage = ref(1);
const store = useStore();
const fetching = ref(false);

function fetch(page) {
  if (page > lastPage.value) {
    return;
  }
  if (page !== 1) {
    fetching.value = true;
  }

  axios
    .get(`/api/package?page=${page}`)
    .then((response) => {
      if (response.data.next_page_url === null) {
        noMorePackages.value = true;
      }

      packages.value.push(...response.data.data);
      lastPage.value = response.data.last_page;
    })
    .catch((err) => {
      if (err.response.status == 401) {
        store.dispatch('logout');
      }

      registrationErrors.value = err.response.data.errors;
      console.log(err.response.data.errors);
    });
}

fetch(1);
</script>
