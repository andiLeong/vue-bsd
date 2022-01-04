<template>
  <label v-if="label" :class="labelClass">{{ label }}</label>
  <select
    class="field"
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value);
      },
    }"
  >
    <option value="" selected disabled>Please select one</option>
    <!-- :selected="option === modelValue" -->

    <option v-for="option in options" :value="option" :key="option">
      {{ option }}
    </option>
  </select>

  <p v-if="error" class="validation-error" aria-live="assertive">
    {{ error }}
  </p>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    labelClass: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    error: {
      type: String,
      default: '',
    },
  },
};
</script>
