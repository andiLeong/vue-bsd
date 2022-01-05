<template>
  <div
    class="bg-gradient-to-l from-sky-600 to-sky-300 dark:from-gray-600 dark:to-gray-300"
  >
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          Trusted by custoemrs all over malaysia
        </h2>
        <p class="mt-3 text-xl text-blue-200 dark:text-gray-100 sm:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          repellat laudantium.
        </p>
      </div>
      <dl
        class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8"
      >
        <div class="flex flex-col">
          <dt
            class="order-2 mt-2 text-lg leading-6 font-medium text-blue-200 dark:text-gray-100"
          >
            Customers
          </dt>
          <dd class="order-1 text-5xl font-extrabold text-white">
            <CountUp :to="300" />
          </dd>
        </div>
        <div class="flex flex-col mt-10 sm:mt-0">
          <dt
            class="order-2 mt-2 text-lg leading-6 font-medium text-blue-200 dark:text-gray-100"
          >
            Delivery
          </dt>
          <dd class="order-1 text-5xl font-extrabold text-white">
            <CountUp :to="100" />
          </dd>
        </div>
        <div class="flex flex-col mt-10 sm:mt-0">
          <dt
            class="order-2 mt-2 text-lg leading-6 font-medium text-blue-200 dark:text-gray-100"
          >
            Orders
          </dt>
          <dd class="order-1 text-5xl font-extrabold text-white">
            <CountUp :to="56" />
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import CountUp from '@/components/CountUp.vue';
</script>
