<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>

    {{changeArr}}

    <input type="" name="" v-model='firstName'>

    <router-link to='/list'>list</router-link>
    <router-link to='/news'>news</router-link>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      arr : ['a','b','c'],
      firstName:''
    }
  },
  computed:{
    changeArr(){
      return this.arr.reverse();
    }
  },
  watch:{
    firstName(newVal,oldVal){
      //console.log(this.firstName);
      console.log(newVal,oldVal);
    },
    '$route.path'(){
      console.log('路由改变');
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
