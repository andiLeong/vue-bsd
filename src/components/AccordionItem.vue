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
        <span class="font-medium text-gray-900"> {{ title }} </span>
        <span class="ml-6 h-7 flex items-center">
          <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
          <svg
            class="h-6 w-6 transform"
            :class="openClass"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
    </dt>
    <dd class="mt-2 pr-12" id="faq-0">
      <p class="text-base text-gray-500" v-show="isOpen">{{ body }}</p>
    </dd>
  </div>
</template>

<script>
export default {
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
