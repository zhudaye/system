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
	  url: '/layout/user/management/alluser',
	  component: 'UserIndex.vue',
	  children: [
	    {
	      name: 'management',
	      label: '用户管理',
	      fileUrl: '/layout/user/management',
	      url: '/layout/user/management/alluser',
	      component: 'Management.vue',
	      children: [
	        {
	        	name: 'alluser',
	        	label: '所有用户',
	        	url: '/layout/user/management/alluser',
	          component: 'AllUser.vue'
	        }
	      ]
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
	  url: '/layout/order/generalsituationorder',
	  component: 'OrderIndex.vue',
	  children: [
      {
	      name: 'generalsituationorder',
	      label: '概况',
	      url: '/layout/order/generalsituationorder',
	      component: 'GeneralsituationOrder.vue'
      },
      {
	      name: 'waitshiporder',
	      label: '待发货订单',
	      url: '/layout/order/waitshiporder',
	      component: 'WaitShipOrder.vue'
      },
      {
	      name: 'waitreceiveorder',
	      label: '待收货订单',
	      url: '/layout/order/waitreceiveorder',
	      component: 'WaitReceiveOrder.vue'
      },
      {
	      name: 'determineorder',
	      label: '已确认订单',
	      url: '/layout/order/determineorder',
	      component: 'DetermineOrder.vue'
      },
      {
	      name: 'unpaidorder',
	      label: '未支付订单',
	      url: '/layout/order/unpaidorder',
	      component: 'UnPaidOrder.vue'
      },
      {
	      name: 'allorder',
	      label: '全部订单',
	      url: '/layout/order/allorder',
	      component: 'AllOrder.vue'
      },
      {
	      name: 'returnprocess',
	      label: '退货处理',
	      url: '/layout/order/returnprocess',
	      component: 'ReturnProcess.vue'
      }
	  ]
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
	  url: '/layout/finance/general',
	  component: 'FinanceIndex.vue',
	  children: [
			{
		    name: 'general',
			  label: '概况',
			  url: '/layout/finance/general',
			  component: 'General.vue', 
			},
			{
		    name: 'clientmoney',
			  label: '客户资金',
			  url: '/layout/finance/clientmoney',
			  component: 'Clientmoney.vue', 
			},
		  {
		    name: 'audit',
			  label: '客户账单',
			  url: '/layout/finance/audit',
			  component: 'Audit.vue', 
			},
				{
		    name: 'clientintegral',
			  label: '客户积分账单',
			  url: '/layout/finance/clientintegral',
			  component: 'Clientintegral.vue', 
			},
			{
		    name: 'withdrawal',
			  label: '提现请求',
			  url: '/layout/finance/withdrawal',
			  component: 'withdrawal.vue', 
			},
			{
		    name: 'collectmoney',
			  label: '收款单',
			  url: '/layout/finance/collectmoney',
			  component: 'Collectmoney.vue', 
			},
			{
		    name: 'backmoney',
			  label: '退款单',
			  url: '/layout/finance/backmoney',
			  component: 'Backmoney.vue', 
			},
			{
		    name: 'billmanagement',
			  label: '发票管理',
			  url: '/layout/finance/billmanagement',
			  component: 'Billmanagement.vue', 
			},
			
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