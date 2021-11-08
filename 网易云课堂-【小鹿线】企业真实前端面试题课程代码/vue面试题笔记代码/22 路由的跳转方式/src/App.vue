<template>
  <div id="app">
      
    <router-link to='/home' tag='button'>
      
       跳转到home

    </router-link>    


    <h1 @click='goHome'>用js跳转到home</h1>


    <router-view/>


  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goHome(){
      // this.$router.push('/home')
      //this.$router.replace('/home')
      //this.$router.go(-1)
      this.$router.push({
        path:'/home',
        query:{
           arr:['a','b','c']
        }
      })
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
