import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import shangjia from '@/components/shangjia'
import shangping from '@/components/shangping'
import pingjia from '@/components/pingjia'
import model from '@/components/model'
import quanbu from '@/components/views/quanbu'
import manyi from '@/components/views/manyi'
import bumanyi from '@/components/views/bumanyi'
let router=new Router({
	// linkActiveClass:'router-link-active',
  routes: [
	{
	  path: '/shangjia',
	  name: 'shangjia',
	  component: shangjia,
	},
	{
	  path: '/',
	  name: 'shangping',
	  component: shangping
	},
	{
	  path: '/pingjia',
	  name: 'pingjia',
	  component: pingjia,
		children:[
			{
				path:'',
				name:'root',
				component:quanbu
			},
			{
				path: 'quanbu',
				component: quanbu
			},
			{
				path: 'manyi',
				component: manyi
			},
			{
				path: 'bumanyi',
				component: bumanyi
			}
			
		]
	},
	{
	  path: '/model',
	  name: 'model',
	  component: model
	}
  ]
})
export default router
