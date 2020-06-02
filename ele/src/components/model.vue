<template>
	<div class="model" v-if="shop.seller">
		<div class="model-top">
			<p class="mp1">粥品香坊(大运村)</p>
			<p class="mp2">
				<img src="/static/img/star24_on@2x.png">
				<img src="/static/img/star24_on@2x.png">
				<img src="/static/img/star24_on@2x.png">
				<img src="/static/img/star24_on@2x.png">
				<img src="/static/img/star24_off@2x.png">
			</p>
		</div>
		<div class="xian">
			<div class="xian1"></div>
			<div class="youhui">优惠信息</div>
			<div class="xian1"></div>
		</div>
		<ul class="moul">
			<li v-for="item,index in shop['seller']['supports']">
				<img v-bind:src="'/static/img/decrease_'+(index+1)+'@2x.png'">&nbsp;&nbsp;{{item.description}}
			</li>
		</ul>
		<div class="xian">
			<div class="xian2"></div>
			<div class="youhui">商家公告</div>
			<div class="xian2"></div>
		</div>
		<div class="md-lr">
			{{shop['seller']['bulletin']}}
		</div>
		<router-link to="/"  tag="div" id="guan">
			<span class="iconfont close"></span>
			</router-link>
		
	</div>
</template>

<script>
export default({
		"name":"model",
		data(){
			return{
				shop:{
				}
			}
		},
		mounted:function(){
			this.axios
			.get("/static/data/data.json")
			.then((response)=>{
				this.shop=response.data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
	})
</script>

<style>
	@import url("../assets/css/model.css");
</style>
