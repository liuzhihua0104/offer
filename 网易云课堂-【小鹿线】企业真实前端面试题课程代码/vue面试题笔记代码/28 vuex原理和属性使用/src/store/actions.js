import {CHANGE_CITY} from './mutations-types'
export default {
	async changeCityFn({commit}){
		await commit(CHANGE_CITY);
	}
}