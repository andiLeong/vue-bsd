<template>
  <button
    type="submit"
    :disabled="loading"
    :class="{ 'cursor-not-allowed ': loading }"
    class="primary-btn"
  >
    <LoadingIndicator
      v-if="loading"
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    />
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    loading: function () {
      return this.isLoading;
    },
  },
};
</script>
