<template>
  <div id="app">
      
      <input type="" name="" v-model='msg'>
      <div>{{msg}}</div>
      <hr />



  		<input type="radio" name="radioName" v-model='radioVal' value='苹果'>
  		<input type="radio" name="radioName" v-model='radioVal' value='橘子'>

      <div>
      	您的选择是 ：{{radioVal}}
      </div>


      <hr />

       <input type="checkbox" name="" v-model='checkList'
       value="篮球">
       <input type="checkbox" name="" v-model='checkList'
       value='足球'>
       <input type="checkbox" name="" v-model='checkList'
       value="乒乓球">

       <div>
       	  您的选择是：{{checkList}}
       </div>

       <hr />

       <select v-model='selected'>
       	   <option value='王者荣耀'>王者荣耀</option>
       	   <option value='穿越火线'>穿越火线</option>
       	   <option value="斗地主">斗地主</option>
       </select>

       <div>
       	您的选择是：{{selected}}
       </div>


       <button @click='btn'>按钮</button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
  	return {
  		msg:"这是数据",
  		radioVal:'',
  		checkList:[],
  		checkStr:"1",
  		selected:''
  	}
  },
  methods:{
  	btn(){
  		alert(1);
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
