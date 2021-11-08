<template>
	<div>
		首页
		<hr />

		<router-link to='/header/aaa'>aaaaaaaa</router-link>
		<router-link to='/header/bbb'>bbbbbbbb</router-link>

		<router-link :to="{name:'Header',params:{id:'ccccc'}}">
			ccccc
		</router-link>

	</div>
</template>