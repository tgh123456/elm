<template>
	<div v-if="shop.seller">
		<div class="container-fluid tou">
			<div class="fugai">
				<div class="row topa">
					<div class="logo">
						
					</div>
					<div class="pp">
						<div class="pp-1">
							<img src="/static/img/brand@2x.png" />
							<p>粥品香坊(大运村)</p>
						</div>
						<p class="pp-2" >
						<span>
						      {{shop['seller']['description']}}/
						      {{shop['seller']['deliveryTime']}}
							  钟送达
						</span>
						</p>
						<p class="pp-3">
							<img src="/static/img/decrease_1@2x.png">
							<span>
								{{shop['seller']['supports'][0].description}}
							</span>
						</p>
					</div>
					<div class="dj">
						<router-link to="/model"  tag="div">5个 ></router-link>
						<!-- <router-view></router-view> -->
						</div>
				</div>
				<div class="tou2">
					<p>
						<img src="/static/img/bulletin@2x.png">
						<span>{{shop['seller']['bulletin']}}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default({
		"name":"top",
		data(){
			return{
				shop:{
					// seller:{
					// 	description:"",
					// 	supports:[
					// 		{
					// 		    "type": 0,
					// 		    "description": "在线支付满28减5，满50减10"
					// 		  },
					// 	]
					// }
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
	@import url("../assets/css/top.css");
</style>
