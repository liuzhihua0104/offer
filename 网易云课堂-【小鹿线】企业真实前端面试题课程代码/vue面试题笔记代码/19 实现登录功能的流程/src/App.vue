<template>
  <div id="app">
    
    <form onsubmit="return false">
        <input type="text" name="" placeholder="用户名" v-model='userName'>
        <input type="password" name="" placeholder="密码" v-model='userPwd'>
        <button @click='login'>登录</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
        userName:'',
        userPwd:''
    }
  },
  methods:{
    login(){
        this.axios.post("/api/login",{
            uName: this.userName,
            uPwd : this.userPwd
        }).then(res=>{
           console.log(res);
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
