<template>
  <div id="app">
    <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options">
    </ly-tab>


    <count-down
      v-on:start_callback="countDownS_cb(1)"
      v-on:end_callback="countDownE_cb(1)"
      :currentTime="1538983555"
      :startTime="1538983555"
      :endTime="1558983565"
      :dayTxt="'天'"
      :hourTxt="'小时'"
      :minutesTxt="'分钟'"
      :secondsTxt="'秒'">
    </count-down>


  </div>
</template>

<script>
import CountDown from 'vue2-countdown'
export default {
  name: 'App',
  data () {
    return {
      selectedId: 0,
      items: [
        {label: '首页'},
        {label: '推荐'},
        {label: 'Android'},
        {label: '前端'},
        {label: '后端'},
        {label: 'iOS'},
        {label: '产品'},
        {label: '人工智能'},
        {label: '设计'}
      ],
      options: {
        activeColor: '#1d98bd'
      },
    }
  },
  components: {
   CountDown
  },
  methods: {
    countDownS_cb: function (x) {
     console.log(x)
    },
    countDownE_cb: function (x) {
     console.log(x)
    }
  }
}
</script>