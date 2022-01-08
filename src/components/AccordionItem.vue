<template>
  <div class="pt-6">
    <dt class="text-lg">
      <button
        @click.prevent="toggle"
        type="button"
        class="text-left w-full flex justify-between items-start text-gray-400"
        aria-controls="faq-0"
        aria-expanded="false"
      >
        <span class="font-medium text-gray-900 dark:text-gray-50">
          {{ title }}
        </span>
        <span class="ml-6 h-7 flex items-center">
          <ChevronDownIcon
            class="h-6 w-6 transform"
            :class="openClass"
            aria-hidden="true"
          />
        </span>
      </button>
    </dt>
    <dd class="mt-2 pr-12" id="faq-0">
      <p class="text-base text-gray-500 dark:text-gray-400" v-show="isOpen">
        {{ body }}
      </p>
    </dd>
  </div>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/outline';

export default {
  components: { ChevronDownIcon },
  props: ['title', 'body', 'isOpen', 'indexKey'],
  emits: ['toggled'],
  methods: {
    toggle() {
      this.$emit('toggled', this.indexKey);
    },
  },

  computed: {
    openClass: function () {
      return this.isOpen ? '-rotate-180' : 'rotate-0';
    },
  },
};
</script>
