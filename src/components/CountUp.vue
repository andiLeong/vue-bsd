<template>
  <span ref="target" v-text="count"></span>
</template>

<script>
// import inView from 'in-viewport';

// import { useElementVisibility } from '@vueuse/core';

export default {
  props: ['to'],
  data() {
    return {
      count: 0,
      interval: null,
      target: null,
    };
  },
  computed: {
    increment() {
      return Math.ceil(this.to / 30);
    },

    // inViewPoint() {
    //   return useElementVisibility(this.target);
    // },
  },
  mounted() {
    // inView(target, () => {
    // if (this.inViewPoint) {
    this.interval = setInterval(this.tick, 40);
    // }
    // });
  },
  methods: {
    tick() {
      if (this.count + this.increment >= this.to) {
        this.count = this.to;
        return clearInterval(this.interval);
      }
      this.count += this.increment;
    },
  },
};
</script>
