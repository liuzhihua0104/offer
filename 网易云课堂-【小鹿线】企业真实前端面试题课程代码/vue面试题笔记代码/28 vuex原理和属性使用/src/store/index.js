import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
export default new Vuex.Store({
	modules:{
		home:{
			state,//city
			getters,
			mutations,
			actions
		},
		list:{
			state:{
				msg:"这是列表页"
			}
		}
	}
})