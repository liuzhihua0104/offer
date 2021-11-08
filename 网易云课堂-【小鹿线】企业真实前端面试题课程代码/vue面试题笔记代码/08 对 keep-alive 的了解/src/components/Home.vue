<template>
	<div>
			
		---这是home组件---

		<button @click='goCity'>{{cityName}}</button>

	</div>
</template>

<script type="text/javascript">
export default {
	data () {
		return {
			cityName:'上海'
		}
	},
	methods:{
		goCity(){
			this.$router.push("/city");
		},
		http(){
			this.axios.get("/api/data.json").then(res=>{
				console.log(res.data);
			})
		}
	},
	mounted(){
		this.http();
	},
	activated(){
		if(this.cityName!='北京'){
			this.http();
		}
	}
}
</script>