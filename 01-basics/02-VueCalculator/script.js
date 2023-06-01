import { createApp, reactive, computed } from './vendor/vue.esm-browser.js';

createApp({
  setup() {
    const data = reactive({
      number1: 0,
      number2: 0,
      operatorType: 'sum',
    });

    const result = computed(() => {
      switch (data.operatorType) {
        case 'sum':
          return data.number1 + data.number2;
        case 'subtract':
          return data.number1 - data.number2;
        case 'multiply':
          return data.number1 * data.number2;
        case 'divide':
          return data.number1 / data.number2;
      }
    });

    return {
      data,
      result,
    };
  },
}).mount('#app');
