<template>
	<div class="pl">
		<div class="pl-wai">
		<div class="pl-zuo">
			<p class="p1">3.9</p>
			<p class="p2">综合评分</p>
			<p class="p3">高于周边商家69.2%</p>
		</div>
		<div class="pl-you">
			<p class="p4">&nbsp;&nbsp;服务态度
			<img src="/static/img/star24_on@2x.png">
			<img src="/static/img/star24_on@2x.png">
			<img src="/static/img/star24_on@2x.png">
			<img src="/static/img/star24_on@2x.png">
			<img src="/static/img/star24_off@2x.png">
			</p>
			<div class="div1">3.9</div>
			<p class="p5">&nbsp;&nbsp;服务效率
			<img src="/static/img/star24_on@2x.png">
			<img src="/static/img/star24_on@2x.png">
			<img src="/static/img/star24_on@2x.png">
			<img src="/static/img/star24_on@2x.png">
			<img src="/static/img/star24_off@2x.png">
			</p>
			<div class="div2">4.0</div>
			<p class="p6">&nbsp;&nbsp;送达时间<span class="span1">&nbsp;&nbsp;44分钟</span></p>
		</div>
		</div>
		<div class="zb"></div>
		<div class="tab">
			<ul>
				<router-link to="/pingjia/quanbu" tag="li" active-class="active" exact>全部57</router-link>
				<router-link to="/pingjia/manyi" tag="li" active-class="active">满意47</router-link>
				<router-link to="/pingjia/bumanyi" tag="li" active-class="active">不满意10</router-link>
			</ul>
			<router-view to="/pingjia/quanbu" tag="div"></router-view>
		</div>
		<div class="zhikan">
			<img src="/static/img/Image7.png">
		</div>
	</div>
</template>

<script>
	export default({
			"name":"pingjia",
			data(){
				return{
					shop:{},
					isshow:false,
					ss:true
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
	@import url("../assets/css/pingjia.css");
	.active{
		background: #00A0DC;
		color: white;
	}
</style>

