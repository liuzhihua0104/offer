<template>
  <div id="app">

      {{this.$store.state.city}}
      
      <hr />

      {{city}}

      <hr />

      <Home />


      <button @click='btn'>按钮</button>

  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import Home from './components/Home'
export default {
  name: 'App',
  computed:{
  	...mapState(['city'])
  },
  components:{
  	Home
  },
  methods:{
  	...mapMutations(['changeBtn']),
  	btn(){
  		this.changeBtn();
  	}
  }
}
</script>
