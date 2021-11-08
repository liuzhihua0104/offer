export default {
	changeArr(state){
		let arr = state.arr.splice(1,1);
		return arr;
	}
}