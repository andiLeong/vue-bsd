<template>
  <div class="dropdown relative" :id="id">
    <div
      class="dropdown-trigger"
      @click.prevent="isOpen = !isOpen"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <slot name="trigger"></slot>
    </div>

    <transition name="pop-out-quick">
      <ul
        v-show="isOpen"
        class="dropdown-menu absolute mt-2 py-2 rounded shadow bg-white text-gray-700 z-10"
        :class="classes"
      >
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      required: false,
      default: '',
    },
    classes: {
      required: false,
    },
    id: {
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {},
  watch: {
    isOpen(isOpen) {
      if (isOpen) {
        document.addEventListener('click', this.closeIfClickedOutside);
      }
    },
  },
  methods: {
    closeIfClickedOutside(event) {
      if (!event.target.closest('#' + this.id)) {
        this.isOpen = false;
        document.removeEventListener('click', this.closeIfClickedOutside);
      }
    },
  },
};
</script>

<style scoped>
.pop-out-quick-enter-active,
.pop-out-quick-leave-active {
  transition: all 0.4s;
}
.pop-out-quick-enter,
.pop-out-quick-leave-active {
  opacity: 0;
  transform: translateY(-7px);
}
</style>
