<template>
	<div class="sp" v-if="shop.goods">
		<div class="sider">
			<ul>
				
				<li v-for="item,index in shop['goods']" v-on:click="fun(item,index,$event)" v-bind:class="{'hasbg':item.isactive}">
					
					<div>
						<a v-bind:href="'#a'+index">
							<span>
							{{item.name}}
							</span>
						</a>
							</div>
				</li>
				
			</ul>
		</div>
		<div class="zhuzhu">
		<div class="zhuti" v-for="item,index in shop['goods']" v-bind:id="'a'+index">
			<div class="zhu1">
				<div class="zhu1-top">
					<p>{{item.name}}</p>
				</div>
				<div class="zhu1-center" v-for="item1,index1 in item['foods']">
					<div class="cai"  @click="xq(item1,index1)">
						<!-- selectFood(item1,$event) -->
						<img v-bind:src="item1.image" >
					</div>
					<div class="lr">
						<div style="color: rgba(7,17,27);font-size: 1.4rem;">{{item1.name}}</div>
						<div>{{item1.description}}</div>
					<div class="wddiv">
						<div>月售{{item1.sellCount}}份 &nbsp &nbsp好评率{{item1.rating}}%</div>
						<div><span class="nprice">￥{{item1.price}}</span>&nbsp;&nbsp;<span class="oprice">￥{{item1.oldPrice}}</span></div>
						 <div v-show="item1.type>0" class="jian" >
							<img src="/static/img/Imagejian.png" v-on:click="jian(item1,index1)">
							<span>{{item1.type}}</span>
						</div>
						<img class="img1" src="/static/img/Image3.png" v-on:click="add(item1,index1)" />、
					</div>
					</div>

					<div v-show="item1.type>0" class="shuzi" >
						{{sum}}
					</div>
				</div>
			</div>
			
			</div>
			
		</div>
		<transition tag="div" name="en" >
			<div  class="hb" v-show="isshow">
		<div class="gwc">
			<div class="gwc-tou">
				<div class="gw">
					<span class="che">购物车</span>
					<span class="kong" v-on:click="empty()">清空</span>
				</div>
			</div>
			<div  v-if="sp.length>0">
				<div v-for="mysp in sp" class="dada" v-show="mysp.type>0">
					<div class="myn">{{mysp.name}}</div>
					<div class="myp">{{mysp.price}}
					</div>
					<div v-show="mysp.type>0" class="jian" >
						<img src="/static/img/Imagejian.png" v-on:click="jian(mysp)">
						<span>{{mysp.type}}</span>
					</div>
					<img  class="img1" src="/static/img/Image3.png" v-on:click="add(mysp)" />
				</div>
			</div>
		</div>
		</div>
		</transition>
		
		<div class="foot">
			<div class="yuan" v-bind:class="{'bg-info':isbg}">
				<button v-on:click="showshop" v-bind:disabled="shi" style="outline: none;" class="pan"><span class="iconfont cart_fill_light"></span></button>
			</div>
			<div class="ps">
				<span class="jiage">￥{{zong}}</span>
				<span class="psf">配送费￥{{pei}}元</span>
			</div>
			<div id="zf" v-bind:class="{'peisong':ispei}" v-on:click="tc()">
				<span v-text="btntext"></span>
			</div>
		</div>
		<transition tag="div" name='fade'>
			<div class="xq" v-show="xqxs">
				<div class="tupian">
					<span v-on:click="cl" class="iconfont close"></span>
					<img :src="dangqian.image">
				</div>
				<img  class="img1" src="/static/img/Image3.png" v-on:click="add(dangqian)" />
				<div class="ph">
				<p style="text-align: left;font-size: 1rem;font-weight: bold;">{{dangqian.name}}</p>
				<div v-show="dangqian.type>0" class="jian" >
					<img src="/static/img/Imagejian.png" v-on:click="jian(dangqian)">
					<span>{{dangqian.type}}</span>
				</div>
				<div class="spa">
				<p>月售{{dangqian.sellCount}}份</p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<p>好评率{{dangqian.rating}}</p>
				</div>
				
				<div class="spa">
				<p style="color: red;">￥{{dangqian.price}}</p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<p style="text-decoration: line-through;">￥{{dangqian.oldPrice}}</p>
				</div>
				</div>
				<div class="chang"></div>
				<div class="zp">
				<p style="text-align: left;font-size: 1rem;font-weight: bold;">商品介绍:</p>
				<div style="width: 100%;">{{dangqian.info}}</div>
				</div>
				<div class="chang"></div>
			</div>
			
		</transition>
	</div>
</template>

<script>
	export default({
			"name":"shangping",
			data(){
				return{
					isbg:false,
					ispei:false,
					sum:0,
					shop:{},
					isshow:false,
					xqxs:false,
					dangqian:{},
					sp:[],
					shi:true,
					cha:20,
					btntext:'￥20元起送'
				}
			},
			computed:{
				zong(){
					let num=0;
					this.sp.forEach((item,index)=>{
						num+=item.price*item.type;
					})
					if(num>=20){
						this.ispei=true;
						this.btntext='可以配送';
					}else{
						this.ispei=false;
						this.btntext='￥'+(20-num)+'元起送';
					}
					this.cha=20-num;
					return num;
					
				},
				pei(){
					let lan=0;
					this.sp.forEach((item,index)=>{
						lan+=item.type;
					})
					return lan;
				}
			},
			methods:{
				fun:function(item,index,event){
					this.shop['goods'].forEach(function(i,d){
						i['isactive']=false;
					})
					this.shop['goods'][index]['isactive']=true;
				},
				tc:function(){
					if(this.ispei==true){
						let b=confirm("是否配送");
						if(b){
							location.reload();
						}else{
							alert("您取消了配送");
						}
					}
				},
				xq:function(item1,index1){
						this.xqxs=true;
						this.dangqian=item1;
				},
				cl:function(){
						this.xqxs=false;
				},
				showshop:function(){
					if(this.isshow==false){
						this.isshow=true;
						this.isbg=false;
						$(".pan").css("background","#05A0DB");
						$(".pan>span").css("color","white");
					}else{
						this.isshow=false;
						this.isbg==true;
					}
				},
				empty:function(){
					this.shi=true;
					this.sp=[];
					this.isshow=false;
					this.isbg==false;
					$(".pan").css("background","#2D373F");
					$(".pan>span").css("color","#7F8489");
					$(".shuzi").hide();
					this.sp.type=0;
					this.sum=0;
					this.shop['goods'].forEach(function(i){
						i['foods'].forEach(function(f){
							f.type=0;
						})
					})
					
				},
				add:function(item1,index1){
					this.shi=false;
					let flag=0;
					this.sp.forEach((item2,index2)=>{
						if(item2.name==item1.name){
							flag=1;
						}
					})
					if(flag==0){
						item1.type=1;
						this.sp.push(item1);	
					}else if(flag==1){
						this.sp.forEach((item2,index2)=>{
							if(item2.name==item1.name){
								this.sp[index2].type+=1;
								return;
							}
						})
					}
					this.sum+=1;
					this.isbg==true;
					$(".pan").css("background","#05A0DB");
					$(".pan>span").css("color","white");
				},
				jian:function(item1,index1){
					let flag=0;
					this.sp.forEach((item2,index2)=>{
						if(item2.name==item1.name){
							flag=1;
						}
					})
					if(flag==0){
						item1.type=1;
						this.sp.shift(item1);
					}else if(flag==1){
						this.sp.forEach((item2,index2)=>{
							if(item2.name==item1.name){
								this.sp[index2].type-=1;
								return;
							}
						})
					}
					this.sum-=1;
					if(this.sum==0){
						this.isbg==false;
						$(".pan").css("background","#2D373F");
						$(".pan>span").css("color","#7F8489");
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
	@import url("../assets/css/shangping.css");
	@import url("../assets/css/bottom.css");
	.hasbg{
		background-color: white;
	}
	.bg-info{
		background:#05A0DB;
	}
	.Active{
		display: block;
	}
	.peisong{
		color: white!important;
		background: greenyellow!important;
	}
	.hb{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.5);
	}
	.chang{
		width: 100%;
		height: 1.5rem;
		background: #F4F5F7;
		margin: 2rem auto;
		border-top: 1px solid #ECECEC;
		border-bottom: 1px solid #ECECEC;
	}
	.tupian{
		position: relative;
	}
	.dada{
		position: relative;
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		background: white;
	}
	.myn{
		position: absolute;
		left: 1rem;
		top: 0;
	}
	.myp{
		position: absolute;
		left: 15rem;
		top: 0;
	}
	.tupian>span{
		position: absolute;
		top: 0;
		left: 0;
		font-size: 1.5rem;
	}
	.fade-enter-active{
			animation: fadeInRight 1s;
	}
	.fade-leave-active{
		animation: fadeOutRight 1s;
	}
	.spa{
		display: flex;
		margin: 0.5rem auto;
	}
</style>
