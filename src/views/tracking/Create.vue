<template>
  <div
    class="space-y-8 divide-y divide-gray-200 md:px-20 flex justify-center mx-4 md:mx-24 my-4"
  >
    <form @submit.prevent="submit" class="space-y-8 w-full">
      <div class="pt-8">
        <div>
          <h3
            class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
          >
            Upload Express Tracking Number
          </h3>

          <Alert v-if="packageNumber">
            Your tracking number had been uploaded
            <span class="font-extrabold">
              {{ packageNumber }}
            </span>
          </Alert>

          <div class="mb-2" v-if="validationErrors">
            <p
              class="validation-error"
              v-for="(error, index) in validationErrors"
              :key="index"
            >
              {{ error[0] }}
            </p>
          </div>
        </div>

        <div
          v-for="(tracking, index) in trackings"
          :key="index"
          class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
        >
          <div class="sm:col-span-2">
            <BaseInput
              labelClass="base-label"
              placeHolder="shunfeng"
              class="mt-1 base-input"
              label="Company"
              type="text"
              v-model="tracking.company"
            />
          </div>

          <div class="sm:col-span-2">
            <BaseInput
              labelClass="base-label"
              placeHolder="23995-6587541-000"
              class="mt-1 base-input"
              label="Number"
              type="text"
              v-model="tracking.number"
            />
          </div>

          <div class="sm:col-span-2 flex items-center">
            <div class="mt-4" v-if="index != 0" v-cloak>
              <button
                @click.prevent="remove(index)"
                type="button"
                class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 12H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex space-x-2">
        <button
          @click.prevent="add"
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          Add
        </button>

        <PrimaryButton :isLoading="isLoading">
          {{ isLoading ? 'Saving' : 'Save' }}
        </PrimaryButton>
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/forms/BaseInput.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import Alert from '@/components/Alert.vue';

export default {
  components: { BaseInput, PrimaryButton, Alert },

  data() {
    return {
      trackings: [{ number: '', company: '' }],
      isLoading: false,
      isSuccess: false,
      validationErrors: {},
      packageNumber: '',
    };
  },

  methods: {
    add() {
      this.trackings.push({
        number: '',
        company: '',
      });
    },

    remove(index) {
      if (index == 0) {
        return;
      }
      this.trackings.splice(index, 1);
    },

    submit() {
      this.isLoading = true;
      axios
        .post('/api/tracking', { data: this.trackings })
        .then((response) => {
          this.isSuccess = true;
          this.isLoading = false;

          this.trackings = [{ number: '', company: '' }];
          this.packageNumber = response.data.number;
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response.status);

          if (error.response.status == 401) {
            this.$store.dispatch('logout');
          }

          if (error.response.status == 422) {
            this.validationErrors = error.response.data.errors;
          }
          this.isLoading = false;

          console.log(error);
        });
    },
  },
};
</script>
