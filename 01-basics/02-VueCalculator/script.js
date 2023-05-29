import { createApp, reactive, watch } from './vendor/vue.esm-browser.js';

createApp({
  setup() {
    const data = reactive({
      result: 0,
      number1: 0,
      number2: 0,
      currentType: 'sum'
    })

    watch(
      [() => data.number1, () => data.number2],
      () => setResult()
    );

    const onOperatorInput = (type) => {
      data.currentType = type;
      setResult();
    };

    const setResult = () => {
      switch (data.currentType) {
        case 'sum':
          data.result = data.number1 + data.number2;
          break;
        case 'subtract':
          data.result = data.number1 - data.number2;
          break;
        case 'multiply':
          data.result = data.number1 * data.number2;
          break;
        case 'divide':
          data.result = data.number1 / data.number2;
          break;
      }
    };

    return {
      data,
      onOperatorInput
    }
  },
}).mount('#app')
