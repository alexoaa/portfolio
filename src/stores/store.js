import { defineStore } from 'pinia';

// Store for the general variables through the app
export default defineStore('store', {
  state: () => ({
    // General variables
    locale: 'EN'
  })
});
