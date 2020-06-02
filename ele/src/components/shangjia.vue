<template>
	<div class="sj" v-if="shop.goods">
		<div class="sj-wai">
		  <div class="sj-zhu">
			  <div class="si-zhu-top">
				  <p class="pp1">粥品香坊(大运村)</p>
				  <p class="pp2">
				  <img src="/static/img/star24_on@2x.png">
				  <img src="/static/img/star24_on@2x.png">
				  <img src="/static/img/star24_on@2x.png">
				  <img src="/static/img/star24_on@2x.png">
				  <img src="/static/img/star24_off@2x.png">
				  <span class="si-zi">(661)&nbsp;&nbsp;&nbsp;月售{{shop.seller.rankRate}}单</span>
				  </p>
				  <div class="tu" @click="qh">
				  <img class="img2" :src="qiehuan?'/static/img/heart.png':'/static/img/heart1.png'" />
				  <span v-text="istext?'已收藏':'未收藏'"></span>
				  </div>
			  </div>
			  <div class="si-zhu-bottom">
				  <div class="sjps">
					  <div class="ps1">
						  <p>起送价</p>
						  <span>{{shop.seller.minPrice}}元</span>
					  </div>
					  <div class="ps2">
						  <p>商家配送</p>
						  <span>{{shop.seller.score}}元</span>
					  </div>
					  <div class="ps3">
						  <p>平均配送时间</p>
						  <span>{{shop.seller.deliveryTime}}分钟</span>
					  </div>
				  </div>
			  </div>
		  </div>
		</div>
		<div class="zb"></div>
		<div class="sj-center">
			<div class="sj-center1">
				<span>公告与活动</span>
				<div>
					{{shop['seller']['bulletin']}}
				</div>
			</div>
			<ul class="myul">
				<li v-for="item in shop['seller']['supports']">
					{{item.description}}
				</li>
			</ul>
		</div>
		<div class="zb"></div>
		<div class="sjsj">
			<span>商家实景</span>
			<div class="lun">
				<div class="luntu">
					<ul>
						<li><img src="/static/img/Imagesj1.png"></li>
						<li><img src="/static/img/Imagesj2.png"></li>
						<li><img src="/static/img/Imagesj3.png"></li>
						<li><img src="/static/img/Imagesj1.png"></li>
						<li><img src="/static/img/Imagesj2.png"></li>
						<li><img src="/static/img/Imagesj3.png"></li>
					</ul>
				</div>
			</div>
			<div class="zb"></div>
		</div>
		<div class="sjxx">
			<span>商家信息</span>
			<ul>
				<li v-for="item in shop['seller']['infos']">
					&nbsp;&nbsp;{{item}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default({
			"name":"shangjia",
			data(){
				return{
					shop:{},
					isshow:false,
					qiehuan:false,
					istext:false
				}
			},
			methods:{
				qh(){
					this.qiehuan=!this.qiehuan;
					this.istext=!this.istext;
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
	@import url("../assets/css/shangjia.css");
</style>

