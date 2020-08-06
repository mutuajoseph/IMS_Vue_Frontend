import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inventories: [
      {
        id: 1,
        name: 'Frozen Yogurt',
        inv_type: 'product',
        buying_price: 60.0,
        selling_price: 100.0,
        stock: 4000.0,
      },
      {
        id: 2,
        name: 'Ice cream sandwich',
        inv_type: 'product',
        buying_price: 30.0,
        selling_price: 60.0,
        stock: 500.0,
      },
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
