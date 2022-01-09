<template>
  <div class="pt-4">
    <div
      class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div class="px-4 md:px-12 sm:mx-auto mx-2">
        <div
          class="dark:bg-gray-700 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <Alert v-if="username">
            hey, successfully regisaterd your user name is
            <br />
            <span class="font-bold"> {{ username }} </span>
          </Alert>
          <form
            @submit.prevent="submit"
            class="space-y-8 divide-y divide-gray-200"
          >
            <div class="space-y-8 divide-y divide-gray-200">
              <div class="pt-8">
                <div>
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"
                  >
                    Account Information
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-200">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
                <div
                  class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                >
                  <div class="sm:col-span-3">
                    <BaseInput
                      labelClass="base-label"
                      placeHolder="John Doe"
                      class="mt-1 base-input"
                      label="Name"
                      type="name"
                      v-model="name"
                      :error="errors.name"
                    />
                  </div>

                  <div class="sm:col-span-3">
                    <BaseInput
                      labelClass="base-label"
                      placeHolder="xxxxxxxxxx"
                      class="mt-1 base-input"
                      label="Phone"
                      type="text"
                      v-model="phone"
                      :error="errors.phone"
                    />
                  </div>

                  <div class="sm:col-span-6">
                    <BaseInput
                      labelClass="base-label"
                      placeHolder="Your strong password"
                      class="mt-1 base-input"
                      label="Password"
                      type="password"
                      v-model="password"
                      :error="errors.password"
                    />
                  </div>

                  <div class="sm:col-span-6">
                    <BaseInput
                      labelClass="base-label"
                      placeHolder="XXXX street , XXX city"
                      class="mt-1 base-input"
                      label="Address"
                      type="text"
                      v-model="street"
                      :error="errors.street"
                    />
                  </div>

                  <div class="sm:col-span-3">
                    <BaseSelect
                      labelClass="base-label"
                      class="mt-1 base-input"
                      label="Location"
                      :options="locations"
                      modelValue=""
                      v-model="location"
                      :error="errors.location"
                    />
                  </div>

                  <div class="sm:col-span-3">
                    <BaseSelect
                      labelClass="base-label"
                      class="mt-1 base-input"
                      label="Options"
                      :options="options"
                      modelValue=""
                      v-model="option"
                      :error="errors.option"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-5">
              <div class="flex justify-end">
                <PrimaryButton :isLoading="isLoading" class="w-full">
                  {{ isLoading ? 'Registering' : 'Register' }}
                </PrimaryButton>
              </div>
            </div>
          </form>

          <div class="mt-2 dark:text-gray-200">
            have an account? click
            <Applink class="text-red-500" :to="{ name: 'login' }">
              here </Applink
            >to login
          </div>

          <div class="mb-2">
            <p
              class="validation-error"
              v-if="registrationErrors"
              v-for="(error, index) in registrationErrors"
              :key="index"
            >
              {{ error[0] }}
            </p>
          </div>
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
import PrimaryButton from '@/components/PrimaryButton.vue';
import Alert from '@/components/Alert.vue';
import Applink from '@/components/Applink.vue';

const locations = ref(['OT', 'EM', 'WM', 'SG']);
const options = ref(['air', 'ship']);
const username = ref('');

const validationSchema = ref(
  object({
    phone: string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(11, 'Must be exactly 11 digits')
      .max(11, 'Must be exactly 11 digits'),
    password: string().required().min(6),
    location: string().required(),
    option: string().required(),
    name: string().required().min(3),
    street: string().required(),
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
const { value: street } = useField('street');

const isLoading = ref(false);
const registrationErrors = ref({});

const submit = ref(
  handleSubmit((values) => {
    register(values);
    console.log('registering', values);
  })
);

const store = useStore();
const router = useRouter();

function register(values) {
  isLoading.value = true;

  axios
    .post('api/register', values)
    .then((response) => {
      isLoading.value = false;

      username.value = response.data.username;
      console.log(response.data.username);

      // router.push('/login');
    })
    .catch((err) => {
      isLoading.value = false;
      registrationErrors.value = err.response.data.errors;
      console.log(err.response.data.errors);
    });
}
</script>
