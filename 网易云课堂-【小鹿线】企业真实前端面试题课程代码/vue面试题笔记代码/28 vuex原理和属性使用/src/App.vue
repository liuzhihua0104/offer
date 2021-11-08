<template>
  <div id="app">

    	{{city}}

      <hr />

      {{msg}}

  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed:{
  	...mapState({

      'city':({home})=>home.city,
      'msg':({list})=>list.msg

    })
  }
}
</script>