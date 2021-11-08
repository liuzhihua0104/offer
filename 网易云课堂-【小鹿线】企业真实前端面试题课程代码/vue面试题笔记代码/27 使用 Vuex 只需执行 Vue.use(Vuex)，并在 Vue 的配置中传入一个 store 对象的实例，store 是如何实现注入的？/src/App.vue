<template>
  <div id="app">
      {{city}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed:{
  	...mapState(['city'])
  }
}
</script>
