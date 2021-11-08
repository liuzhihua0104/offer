<template>
	<div class='main'>
		这是header
		

		<swiper :options="swiperOption">
	    <!-- slides -->
	    <swiper-slide>I'm Slide 1</swiper-slide>
	    <swiper-slide>I'm Slide 2</swiper-slide>
	    <swiper-slide>I'm Slide 3</swiper-slide>
	    <swiper-slide>I'm Slide 4</swiper-slide>
	    <swiper-slide>I'm Slide 5</swiper-slide>
	    <swiper-slide>I'm Slide 6</swiper-slide>
	    <swiper-slide>I'm Slide 7</swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	   
	  </swiper>



	</div>
</template>

<script type="text/javascript">
export default {
	data () {
		return {
			swiperOption: {
	          pagination: {
	            el: '.swiper-pagination'
	          }
	        },
		}
	}
}
</script>

<style scoped lang='stylus'>
.swiper-pagination >>> .swiper-pagination-bullet-active{
	background:pink;
}

</style>