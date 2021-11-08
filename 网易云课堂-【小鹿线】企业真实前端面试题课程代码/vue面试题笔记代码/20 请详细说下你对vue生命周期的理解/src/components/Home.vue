<template>
	<div>
		这是home
	</div>
</template>

<script type="text/javascript">
export default {
	beforeDestroy(){
		console.log("销毁前");
	},
	destroyed(){
		console.log("销毁后");
	}
}
</script>