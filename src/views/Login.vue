<template>
  <div class="pt-10">
    <div
      class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div class="mt-8 sm:mx-auto mx-6 sm:w-full sm:max-w-md">
        <div
          class="dark:bg-gray-700 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <form class="space-y-6" @submit.prevent="submit">
            <div>
              <BaseInput
                labelClass="base-label"
                placeHolder="your user name"
                class="mt-1 base-input"
                label="Username"
                type="text"
                v-model="username"
                :error="errors.username"
              />
            </div>

            <div>
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

            <div>
              <PrimaryButton :isLoading="isLoading" class="w-full">
                {{ isLoading ? 'Signing In' : 'Sign In' }}
              </PrimaryButton>
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
import PrimaryButton from '@/components/PrimaryButton.vue';

const validationSchema = ref(
  object({
    username: string().required(),
    password: string().required().min(3),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: username } = useField('username');
const { value: password } = useField('password');

const isLoading = ref(false);
const loginError = ref('');

const submit = ref(
  handleSubmit((values) => {
    login(values);
    console.log('submit', values);
  })
);

const store = useStore();
const router = useRouter();

function login(credentials) {
  isLoading.value = true;

  store
    .dispatch('login', credentials)
    .then(() => {
      isLoading.value = false;
      window.location.replace('/profile');
    })
    .catch((err) => {
      isLoading.value = false;
      loginError.value = err.response.data.error;
    });

  // store
  //   .dispatch('login', credentials)
  //   .then(() => {
  //     isLoading.value = false;
  //   })
  //   .catch((err) => {
  //     isLoading.value = false;
  //     loginError.value = err.response;
  //     console.log(err.response);
  //   });
}

// const login = async (credentials) => {

//   await axios.get('/sanctum/csrf-cookie')
//   await axios.post('/login',credentials)

//   try{
//     let response = await axios.get('/api/user')

//     localStorage.setItem('isLogin',true)
//     localStorage.setItem('user', JSON.stringify(response.data)  )

//     window.location.replace("/");

//   } catch(e) {

//     localStorage.removeItem('isLogin');
//     localStorage.removeItem('user');

//   }

// }
</script>
