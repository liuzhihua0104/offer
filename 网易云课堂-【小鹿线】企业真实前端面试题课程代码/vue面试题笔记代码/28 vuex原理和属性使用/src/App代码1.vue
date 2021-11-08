<template>
  <div id="app">
    	{{city}}
    	<hr />
    	{{arr}}
    	<hr />
    	{{changeArr}}

    	<hr />

    	<button @click='btnCity'>修改城市名</button>

  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  computed:{
  	...mapState(['city','arr']),
  	...mapGetters(['changeArr'])
  },
  methods:{
  	...mapActions(['changeCityFn']),
  	btnCity(){
  		this.changeCityFn();
  	}
  }
}
</script>