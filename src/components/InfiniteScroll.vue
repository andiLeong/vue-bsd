<template>
  <template v-if="!targetElement">
    <div v-for="item in items" :key="item.id">
      <slot name="item" v-bind:item="item" />
    </div>
  </template>

  <template v-if="targetElement == 'table'">
    <tr v-for="item in items" :key="item.id">
      <slot name="item" v-bind:item="item" />
    </tr>
  </template>

  <slot name="loading" />

  <span
    v-if="items.length"
    v-observe-visibility="handleScrolledToBottom"
  ></span>
</template>

<script>
export default {
  emits: ['refetch'],
  props: {
    items: {
      required: true,
      type: Array,
    },
    targetElement: {
      required: false,
    },
  },

  data() {
    return {
      page: 1,
    };
  },

  methods: {
    handleScrolledToBottom(isVisible) {
      if (!isVisible) {
        return;
      }

      console.log('bottom');
      this.page++;

      this.$emit('refetch', this.page);
    },
  },
};
</script>
