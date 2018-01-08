export default [
	{
	  name: 'home',
	  label: '首页',
	  url: '/layout/home',
	  component: 'HomeIndex.vue'
	},
	{
	  name: 'global',
	  label: '全局',
	  url: '/layout/global',
	  component: 'GlobalIndex.vue'
	},
	{
	  name: 'user',
	  label: '用户',
	  fileUrl: '/layout/user',
	  url: '/layout/user/management',
	  component: 'UserIndex.vue',
	  children: [
	    {
	      name: 'management',
	      label: '用户管理',
	      url: '/layout/user/management',
	      component: 'Management.vue'
	    },
	    {
	      name: 'adduser',
	      label: '添加用户',
	      url: '/layout/user/adduser',
	      component: 'AddUser.vue'
	    },
	    {
	      name: 'usergroup',
	      label: '用户组',
	      url: '/layout/user/usergroup',
	      component: 'UserGroup.vue'
	    },
	    {
	      name: 'forbiduser',
	      label: '禁止用户',
	      url: '/layout/user/forbiduser',
	      component: 'ForbidUser.vue'
	    },
	    {
	      name: 'forbidip',
	      label: '禁止IP',
	      url: '/layout/user/forbidip',
	      component: 'ForbidIP.vue'
	    },
	    {
	      name: 'pushmessage',
	      label: '消息推送',
	      url: '/layout/user/pushmessage',
	      component: 'PushMessage.vue'
	    },
	    {
	      name: 'designerreview',
	      label: '设计师审核',
	      url: '/layout/user/designerreview',
	      component: 'DesignerReview.vue'
	    },
	    {
	      name: 'recommendeduser',
	      label: '推荐用户',
	      url: '/layout/user/recommendeduser',
	      component: 'RecommendedUser.vue'
	    }
	  ]
	},
	{
	  name: 'goods',
	  label: '商品',
	  fileUrl: '/layout/goods',
	  url: '/layout/goods',
	  component: 'GoodsIndex.vue'
	},
	{
	  name: 'order',
	  label: '订单',
	  fileUrl: '/layout/order',
	  url: '/layout/order',
	  component: 'OrderIndex.vue'
	},
	{
	  name: 'content',
	  label: '内容',
	  fileUrl: '/layout/content',
	  url: '/layout/content',
	  component: 'ContentIndex.vue'
	},
	{
	  name: 'marketing',
	  label: '营销',
	  fileUrl: '/layout/marketing',
	  url: '/layout/marketing',
	  component: 'MarketingIndex.vue'
	},
	{
	  name: 'supplychain',
	  label: '供应链',
	  fileUrl: '/layout/supplychain',
	  url: '/layout/supplychain',
	  component: 'SupplyChainIndex.vue'
	},
	{
	  name: 'count',
	  label: '统计',
	  fileUrl: '/layout/count',
	  url: '/layout/count',
	  component: 'CountIndex.vue'
	},
	{
	  name: 'finance',
	  label: '财务',
	  fileUrl: '/layout/finance',
	  url: '/layout/finance/audit',
	  component: 'FinanceIndex.vue',
	  children: [
		  {
		    name: 'audit',
			  label: '审核',
			  url: '/layout/finance/audit',
			  component: 'Audit.vue', 
			}
	  ]
	},
	{
	  name: 'system',
	  label: '系统',
	  fileUrl: '/layout/system',
	  url: '/layout/system',
	  component: 'SystemIndex.vue'
	}
]