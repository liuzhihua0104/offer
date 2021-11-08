<template>
  <div id="app">
      
      <button @click='toShow'>按钮</button>  

      <div class='main' v-show='isShow'></div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isShow:false
    }
  },
  methods:{
    toShow(){
       this.isShow = !this.isShow;
    }
  }
}
</script>

<style>
.main{
  background: red;
  width: 300px;
  height: 300px;
}
</style>
