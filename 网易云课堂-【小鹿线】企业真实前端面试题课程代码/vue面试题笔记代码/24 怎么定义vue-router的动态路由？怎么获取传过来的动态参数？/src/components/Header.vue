<template>
	<div>
		这是header组件
	</div>
</template>

<script type="text/javascript">
export default {

	mounted(){
		console.log(this.$route.params.id)
	}

}
</script>