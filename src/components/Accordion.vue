<template>
  <div>
    <accordion-item
      v-for="(item, index) in items"
      :title="item.title"
      :body="item.body"
      :key="index"
      :indexKey="index"
      :is-open="activeItemIndex == index"
      @toggled="onToggle"
    ></accordion-item>
  </div>
</template>

<script>
import AccordionItem from '@/components/AccordionItem.vue';
export default {
  props: {
    items: { default: {} },
    titleName: { default: 'title' },
    bodyName: { default: 'body' },
  },
  components: { AccordionItem },
  data() {
    return {
      activeItemIndex: null,
    };
  },

  methods: {
    onToggle(index) {
      if (this.activeItemIndex == index) {
        return (this.activeItemIndex = null);
      }
      this.activeItemIndex = index;
    },
  },
};
</script>
