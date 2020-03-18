import { MInputText } from '../modules/mithril.esm.js';

const app = new Vue({
  el: '#app',
  data: {
    model: 'Hey' 
  },
  components: { MInputText },
  template: `
    <MInputText
      label="Hello Mithril"
      v-model="model"
    />
  `
});
