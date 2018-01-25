import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
        order: {
        	isPushed: false
        }
	},
	mutations: {
    changeIsPush (state, status) {
      sessionStorage.setItem('isPushed', status);
      state.order.isPushed = status;
    },
    init(state) {
      state.order.isPushed = sessionStorage.getItem('isPushed');
    }
	}
})

export default store