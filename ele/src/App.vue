<template>
  <div id="app">
	  <top></top>
	 <div class="container-fluid bt">
		 <div class="row">
		 <router-link to="/" tag="div" class="col-4 mydiv" exact active-class="router"><span>商品</span></router-link>
		 <router-link to="/pingjia"  tag="div" class="col-4 mydiv" active-class="router"><span>评价</span></router-link>
		 <router-link to="/shangjia" tag="div" class="col-4 mydiv" active-class="router"><span>商家</span></router-link>
		 <router-view to="/"></router-view>
		 </div>
	 </div>
	  <!-- <bottom></bottom> -->
  </div>
</template>

<script>
import top from '@/components/top'
// import bottom from '@/components/bottom'
import model from '@/components/model'
import '@/assets/js/jquery-3.4.1'
export default {
	name: 'App',
	data(){
		return{
			sum:0
		}
	},
	components:{
		'top':top,
		// 'bottom':bottom,
		'model':model
	}
}
</script>

<style>
@import url("assets/css/bootstrap.css");
@import url("assets/css/iconfont.css");
@import url("assets/css/animate.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mydiv{
	line-height: 3.6rem;
	font-size: 1.4rem;
	color: rgb(77,85,93);
}
.bt{
	height: 4rem;
	border-bottom: 0.1rem solid rgba(7,17,27,0.1);
}
.router{
   color: red;
 }
</style>
