<template>
	<div class='footer'>
			
		<router-link to='/'> 首页 </router-link>
		<router-link to='/fav'> 收藏 </router-link>
		<router-link to='/news'> 新闻 </router-link>
		<router-link to='/me'> 个人中心 </router-link>

	</div>
</template>

<style scoped>
.footer{
	position: fixed;
	width:100%;
	bottom:0;
	left:0;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>