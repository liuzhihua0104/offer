<template>
  <div id="app">
  		{{msg}}
  		<button @click='updateMsg'>修改</button>

  		<hr />

  		<Home v-if='flag'></Home>
  		<button @click='isHome'>切换</button>

  </div>
</template>

<script>
import Home from '@/components/Home'
export default {
  name: 'App',
  data () {
  	return {
  		msg:"这是数据",
  		flag:false
  	}
  },
  components:{
  	Home
  },
  beforeCreate(){
  	console.log(this.$el,'创建前');//undefined
  	console.log(this.msg,'创建前');//undefined
  },
  created(){
  	console.log(this.$el,'创建后');//undefined
  	console.log(this.msg,'创建后');//有了
  },
  beforeMount(){
  	console.log(this.$el,'载入前');//undefined
  	console.log(this.msg,'载入前');//有了
  },
  mounted(){
  	console.log(this.$el,'载入后');//有了
  	console.log(this.msg,'载入后');//有了
  },
  beforeUpdate(){
  	console.log("修改前");
  },
  updated(){
  	console.log("修改后");
  },
  methods:{
  	updateMsg(){
  		this.msg = '1111111';
  	},
  	isHome(){
  		this.flag = !this.flag;
  	}
  }
}
</script>
