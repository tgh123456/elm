<template>
	<div class="mypj" v-if="shop.goods">
		<div v-for="item,index in shop['ratings']" class="plk">
			<div class="pj-tou">
				<div class="pj-z">
					<div>{{item.username}}</div>
					<div class="pica">
						<img v-bind:src="item.avatar" />
					</div>
				</div>
			    <div class="pj-y">{{formatDateTime(item)}}</div>
			</div>
			<div class="wb">{{item.text}}</div>
		</div>

	</div>
</template>

<script>
	export default({
		    // props:[],
			"name":"quanbu",
			data(){
				return{
					shop:{
					}
				}
			},
			methods:{
				formatDateTime: function(item) {
				        var date = new Date(item.rateTime);
				        var y = date.getFullYear();
				        var m = date.getMonth() + 1;
				        m = m < 10 ? ('0' + m) : m;
				        var d = date.getDate();
				        d = d < 10 ? ('0' + d) : d;
				        var h = date.getHours();
				        h = h < 10 ? ('0' + h) : h;
				        var minute = date.getMinutes();
				        var second = date.getSeconds();
				        minute = minute < 10 ? ('0' + minute) : minute;
				        second = second < 10 ? ('0' + second) : second;
				        return y+'-'+m+'-'+d+' '+' '+h+':'+minute+':'+second;
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
	@import url("../../assets/css/zicommon.css");
	.active,.active>.pan{
		background:lightskyblue;
	}
</style>
