
<template>

  <div id="app">

  <el-backtop :bottom="100" >
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </el-backtop>
    <el-backtop >
  </el-backtop>

  	<v-header></v-header>

  	<router-view></router-view>

  </div>

</template>


<script>

import vHeader from './components/Header'


export default {
  name: 'App',
  components: {
  	vHeader
  }
}

</script>

<style>
@import "style/reset";

#app {
  min-width: 110rem;
  height: 100%;
  font-family: arial;
  /* background-color: #efefef; */
  /* overflow: auto; */
}

</style>
