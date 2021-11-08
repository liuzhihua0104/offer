<template>
	<div>
		==={{city}}===
	</div>
</template>

<script type="text/javascript">
import {mapState} from 'vuex'
export default {
	computed:{
		...mapState(['city'])
	}
}
</script>