<template>
  <div class="pt-10">
    <div
      class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div class="mt-8 sm:mx-auto mx-6 sm:w-full sm:max-w-md">
        <div
          class="dark:bg-gray-700 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <form class="space-y-6" @submit.prevent="register">
            <div>
              <BaseInput
                labelClass="block text-sm font-medium text-gray-700 dark:text-white"
                placeHolder="abc@abc.com"
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                label="Name"
                type="name"
                v-model="name"
                :error="errors.name"
              />
            </div>

            <div>
              <BaseSelect
                labelClass="block text-sm font-medium text-gray-700 dark:text-white"
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                label="Location"
                options="['OT','EM','WM','SG']"
                modelValue='OT'
                v-model="location"
                :error="errors.location"
              />
            </div>

            <div>
              <BaseSelect
                labelClass="block text-sm font-medium text-gray-700 dark:text-white"
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                label="Options"
                options="['air', 'ship']"
                modelValue='ship'
                v-model="option"
                :error="errors.option"
              />
            </div>

            <div>
              <BaseInput
                labelClass="block text-sm font-medium text-gray-700 dark:text-white"
                placeHolder="abc@abc.com"
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                label="Phone"
                type="text"
                v-model="phone"
                :error="errors.phone"
              />
            </div>

            <div>
              <BaseInput
                labelClass="block text-sm font-medium text-gray-700 dark:text-white"
                placeHolder="Your strong password"
                class="mt-1 ppearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                label="Password"
                type="password"
                v-model="password"
                :error="errors.password"
              />
            </div>

            <div>
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
            </div>

            <div class="mt-1 ">
                have an account? click <Applink class="text-red-500" :to="{name:'login'}"> here </Applink>to login
            </div>
            <div class="text-red-500 text-sm italic font-medium">
              {{ loginError }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { object, string, number, boolean } from 'yup';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import BaseInput from '@/components/forms/BaseInput.vue';
import BaseSelect from '@/components/forms/BaseSelect.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import Applink from '@/components/Applink.vue';

const validationSchema = ref(
  object({
    phone: digits(11).required(),
    password: string().required().min(6),
    location: required(),
    option: required(),
    name: required().min(3),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: phone } = useField('phone');
const { value: name } = useField('name');
const { value: location } = useField('location');
const { value: option } = useField('option');
const { value: password } = useField('password');

const isLoading = ref(false);
const loginError = ref('');

const submit = ref(
  handleSubmit((values) => {
    register(values);
    console.log('registering', values);
  })
);

const store = useStore();
const router = useRouter();

function register(credentials) {
  isLoading.value = true;

  axios
    .post('register', credentials)
    .then(() => {
      isLoading.value = false;
      router.push('/login');
    })
    .catch((err) => {
      isLoading.value = false;
      loginError.value = err.response.data.message;
      console.log(err.response.data.message);
    });
}


</script>
