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
					},
					{
						name: 'usermanagement',
						label: '用户管理',
						url: '/layout/user/management/alluser',
						component: 'UserManagement.vue'
					},
					{
						name: 'orderdetails',
						label: '推送订单详情',
						url: '/layout/user/management/alluser',
						component: 'OrderDetails.vue'
					},
					{
						name: 'earnings',
						label: '订单收益',
						url: '/layout/user/management/earnings',
						component: 'Earnings.vue'
					},
					{
						name: 'editoruser',
						label: '所有用户',
						url: '/layout/user/management/editoruser',
						component: 'EditorUser.vue'
					},
					{ //hy
						name: 'details',
						label: '用户管理详情',
						url: '/layout/user/management/details',
						component: 'Details.vue'
					},
					{ 
						name: 'total',
						label: '全部作品',
						url: '/layout/user/management/details',
						component: 'Total.vue'
					},
					{ 
						name: 'attention',
						label: '关注',
						url: '/layout/user/management/details',
						component: 'Attention.vue'
					},
					{ 
						name: 'collect',
						label: '收藏',
						url: '/layout/user/management/details',
						component: 'Collect.vue'
					},
					{ 
						name: 'fans',
						label: '粉丝',
						url: '/layout/user/management/details',
						component: 'Fans.vue'
					},
					{ 
						name: 'purhistory',
						label: '购买记录',
						url: '/layout/user/management/details',
						component: 'Purhistory.vue'
					},
					{ 
						name: 'sale',
						label: '售卖中的作品',
						url: '/layout/user/management/details',
						component: 'Sale.vue'
					},
					{ 
						name: 'salhistory',
						label: '销售记录',
						url: '/layout/user/management/details',
						component: 'Salhistory'
					},
					
					// 禁止用户
					{
						name: 'banusers',
						label: '禁止用户',
						url: '/layout/user/management/banusers',
						component: 'BanUsers.vue'
					},
					{
						name: 'adduser',
						label: '添加用户',
						url: '/layout/user/management/adduser',
						component: 'AddUser.vue'
					},


				
	      ]
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
				fileUrl: '/layout/user/pushmessage',
	      url: '/layout/user/pushmessage/pushsearch',
				component: 'PushMessage.vue',
				children: [
					{
						name: 'pushsearch',
						label: '消息推送进度搜索',
						url: '/layout/user/pushmessage/pushsearch',
						component: 'PushSearch.vue',
					},
					{
						name: 'pushcontent',
						label: '消息推送进度内容',
						url: '/layout/user/pushmessage/pushcontent',
						component: 'PushContent.vue'
					},
          {
						name: 'pushbar',
						label: '消息推送进度',
						url: '/layout/user/pushmessage/pushbar',
						component: 'PushBar.vue'
					}
				]
	    },
	    {
	      name: 'usergroup',
				label: '用户组',
				fileUrl: '/layout/user/usergroup',
	      url: '/layout/user/usergroup',
				component: 'UserGroup.vue',
	    },
	    // {
	    //   name: 'forbidip',
	    //   label: '禁止IP',
	    //   url: '/layout/user/forbidip',
	    //   component: 'ForbidIP.vue'
	    // },
	    // {
	    //   name: 'pushmessage',
	    //   label: '消息推送',
	    //   url: '/layout/user/pushmessage',
	    //   component: 'PushMessage.vue'
	    // },
	    {
	      name: 'designerreview',
	      label: '设计师审核',
	      url: '/layout/user/designerreview',
	      component: 'DesignerReview.vue'
	    },
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
		url: '/layout/supplychain/factorymanage',
		component: 'SupplyChainIndex.vue', 
		children: [
			{
		    name: 'factorymanage',
			  label: '工厂管理',
			  url: '/layout/supplychain/factorymanage',
			  component: 'FactoryManage.vue'
			},
			{
		    name: 'logistics',
			  label: '物流管理',
			  url: '/layout/supplychain/logistics',
			  component: 'Logistics.vue' 
			}
		]
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