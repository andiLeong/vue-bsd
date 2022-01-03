import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },

  // alias: {
  //   '@': path.resolve(__dirname, './src'),
  //   vue: 'vue/dist/vue.esm-bundler.js',
  // },
  plugins: [vue()],
});
// vue/dist/vue.esm-bundler.js
