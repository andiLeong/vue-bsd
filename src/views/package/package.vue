<template>
  <div class="flex flex-col pt-10 max-w-7xl mx-auto my-10">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <PackageItem />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import PackageItem from '@/views/package/PackageItem.vue';
</script>
