<template>
  <div id="app">
   		
  		<button @click='btn' ref='btns'>  {{msg}}  </button>

      <hr />

      <div class="swiper-container">
          <div class="swiper-wrapper">

              <div class="swiper-slide" v-for='item in swiperList'>
                <img :src="item">
              </div>
            
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          
          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
  	return {
  		msg:"旧的数据",
      swiperList:[]
  	}
  },
  methods:{
  	 btn(){
  	 	this.msg = '111新的数据222';

  	 	this.$nextTick(()=>{
  	 		console.log(this.$refs.btns.innerHTML);
  	 	})
  	 	
  	 }
  },
  mounted(){
    this.axios.get("/api/swiper.json").then((res)=>{
       this.swiperList = res.data.swiperList;
    })
    
  },
  watch:{
    swiperList(){
        this.$nextTick(()=>{
           new Swiper('.swiper-container');
        })
    }
  }
}
</script>

