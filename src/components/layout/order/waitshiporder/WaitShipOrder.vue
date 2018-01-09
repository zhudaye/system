<template>
	<div class="waitshiporder">
		<Row class="top-nav">
      <Col span="12" class="top-left"> 
	      <Button :type="isPushed ? 'default' : 'success'" @click="changePush(false)">未推送</Button> 
	      <Button :type="isPushed ? 'success' : 'default'" @click="changePush(true)">已推送</Button>
	    </Col>
      <Col span="12" class="top-right">
        <Input v-model="search" placeholder="Enter something..." style="width: 300px">
        </Input>
        <Button type="primary">搜索</Button>
      </Col>
    </Row>
    <Row class="table-title">
      <Col span="12"> 
	      宝贝
	    </Col>
      <Col span="12">
        <Row>
        	<Col span="8">
        	  收货人
          </Col>
          <Col span="6">
            支付方式及金额
          </Col>
          <Col span="6">
            物流
          </Col>
          <Col span="4">
            状态
          </Col>
        </Row>
      </Col>
    </Row>
    <div class="one-order" v-if="orderList" v-for="(item, index) in orderList">
    	<Row class="one-order-header">
    		<Col span="22"> 
	        <span>用户完成支付时间：{{item.payTime}}</span>
	        <span> 订单号：{{item.orderID}}</span>
	        <span>账户ID：{{item.userID}}</span>
          <span>账户名：{{item.userName}}</span>
	      </Col>
	      <Col span="2" class="one-order-header-right"> 
		      {{item.pushed ? '已推送': '未推送'}}
		    </Col>
    	</Row>
    	<Row class="one-order-body">
	      <Col span="12" class="one-order-body-left">
	        <Row> 
	        	<Col span="24" v-if="item.goods" v-for="(oneOrder, index) in item.goods" class="left-height">
	        	  <div class="one-goods" v-if="item.type == 'clothes'">
					      <Checkbox v-model="oneOrder.isIn" class="check-box"></Checkbox>
					      <Row class="one-goods-content" type="flex" align="middle">
					      	<Col span="5" class="one-goods-content-img">
					      	  <p class="title">正面缩略图</p>
					      	  <div class="img-box">
					      	  	<img src="static/images/ceshi/aa.jpg" class="hidden">
					      	  	<div class="img-box-inner" v-if="oneOrder.frontSmallImg">
						      	  	<img :src="oneOrder.frontClothImg">
						      	  	<img :src="oneOrder.frontSmallImg" class="small-img">
						      	  </div>
					      	  	<span v-else>无</span>
					      	  </div>
					      	  <p class="download" v-if="oneOrder.frontSmallImg"><a href="" download>下载</a></p>
					      	  <p class="hidden" v-else>无</p>
					        </Col>
					        <Col span="5" class="one-goods-content-img">
					          <p class="title">背面缩略图</p>
					          <div class="img-box">
					          	<img src="static/images/ceshi/aa.jpg" class="hidden">
					      	    <div class="img-box-inner" v-if="oneOrder.backClothImg">
						      	  	<img :src="oneOrder.backClothImg">
						      	  	<img :src="oneOrder.backSmallImg" class="small-img">
						      	  </div>
					      	  	<span v-else>无</span>
					      	  </div>
					      	  <p class="download" v-if="oneOrder.backSmallImg"><a href="" download>下载</a></p>
					      	  <p class="hidden" v-else>无</p>
					        </Col>
					        <Col span="14">
					          <Row class="textCenter" >
					          	<Col span="4">
					          	  <p>款式</p>
					          	  <p>{{oneOrder.styleTitle}}</p>
					            </Col>
					            <Col span="5">
					          	  <p>类型</p>
					          	  <p>{{oneOrder.materialTitle}}</p>
					            </Col>
                      <Col span="3">
                        <p>性别</p>
                        <p>{{oneOrder.sexTitle}}</p>
                      </Col>
                      <Col span="4">
					          	  <p>颜色</p>
					          	  <p>{{oneOrder.colorTitle}}</p>
					            </Col>
					            <Col span="4">
					          	  <p>尺码</p>
					          	  <p>{{oneOrder.sizeTitle}}</p>
					            </Col>
					            <Col span="4">
					          	  <p>数量</p>
					          	  <p>x{{oneOrder.number}}</p>
					            </Col>					         
					          </Row>
					        </Col>
					      </Row>
					    </div>
				    </Col>
			    </Row>
		    </Col>
	      <Col span="12" class="one-order-body-right">
	        <Row class="one-order-body-right-all">
	        	<Col span="8" class="tbcenterbox">
	        	  <div class="tbcenter">
		        	  <p>姓名：{{item.name}}</p>
                <p>电话：{{item.phoneNumber}}</p>
                <p>地址：{{item.address}}</p>
		        	</div>
	          </Col>
	          <Col span="6" class="tbcenterbox textCenter">
	            <div class="tbcenter">
		        	  <p>{{item.payType}}</p>
		        	  <p>{{item.payMoney}}</p>
		        	</div>
	          </Col>
	          <Col span="6" class="tbcenterbox textCenter">
	            <div class="tbcenter">
		        	  {{item.addressType}}
		        	</div>
	          </Col>
	          <Col span="4" class="tbcenterbox textCenter">
	            <div class="tbcenter">
		        	  {{item.pushed}}
		        	</div>
	          </Col>
	        </Row>
	      </Col>
	    </Row>
    </div>
    <my-showbigimg></my-showbigimg>
	</div>
</template>
<script>
import ShowBigImg from '../orderpublic/ShowBigImg'
	export default {
		name: 'waitshiporder',
		data() {
			return {
        search: '',
        isPushed: true,
        single: true,
        orderList: [
          {
          	type: 'clothes',
          	payTime: '2018年-1月-1日-12-30-15',
          	orderID: 1220,
          	userID: 1222222,
          	userName: 'zhudaye',
          	pushed: false,
          	isIn: false,          	
          	name:'爷爷朱',
          	phoneNumber: 18811347069,
          	address: '重庆市扬子江商',
          	payType:'微信',
          	payMoney: 21000,
          	addressType: '顺丰',
          	goods: [
	          	{
	          		styleTitle:'帽衫',
		          	sexTitle: '男',
		          	materialTitle: '36000纯棉',
		          	colorTitle: '红色',
		          	sizeTitle: 'XXL',
		          	number: 1000,
		          	frontSmallImg: 'static/images/ceshi/qqc.png',
	          	  frontClothImg: 'static/images/ceshi/aa.jpg'
	          	  /*backSmallImg: 'static/images/ceshi/qqc.png',
	          	  backClothImg: 'static/images/ceshi/aa.jpg'*/
	          	},
	          	{
	          		styleTitle:'帽衫',
		          	sexTitle: '男',
		          	materialTitle: '36000纯棉',
		          	colorTitle: '红色',
		          	sizeTitle: 'XXL',
		          	number: 1000,
		          	frontSmallImg: 'static/images/ceshi/qqc.png',
	          	  frontClothImg: 'static/images/ceshi/aa.jpg',
	          	  backSmallImg: 'static/images/ceshi/qqc.png',
	          	  backClothImg: 'static/images/ceshi/aa.jpg'
	          	},
	          	{
	          		styleTitle:'帽衫',
		          	sexTitle: '男',
		          	materialTitle: '36000纯棉',
		          	colorTitle: '红色',
		          	sizeTitle: 'XXL',
		          	number: 1000,
		          	frontSmallImg: 'static/images/ceshi/qqc.png',
	          	  frontClothImg: 'static/images/ceshi/aa.jpg',
	          	  backSmallImg: 'static/images/ceshi/qqc.png',
	          	  backClothImg: 'static/images/ceshi/aa.jpg'
	          	}
	          	,
	          	{
	          		styleTitle:'帽衫',
		          	sexTitle: '男',
		          	materialTitle: '36000纯棉',
		          	colorTitle: '红色',
		          	sizeTitle: 'XXL',
		          	number: 1000,
		          	frontSmallImg: 'static/images/ceshi/qqc.png',
	          	  frontClothImg: 'static/images/ceshi/aa.jpg',
	          	  backSmallImg: 'static/images/ceshi/qqc.png',
	          	  backClothImg: 'static/images/ceshi/aa.jpg'
	          	}
          	]
          	
          }
        ]
			}
		},
		components:{
			'my-showbigimg': ShowBigImg
		},
		methods: {
			changePush(status) {
				if(this.isPushed == status) return;
				this.isPushed = status
			}
		},
		mounted() {
		}
	}
</script>
<style>

	.layout-content{
	  background-color: #f5f7f9;
	}

	.waitshiporder>div{
		background-color: #fff;
	}

	.top-nav {
		padding: 10px 15px;
	}

  .top-nav .top-right{
  	text-align: right;
  }

  .table-title{
  	margin: 5px 0;
  }

  .one-order{
  	font-weight: bold;
  }

  .table-title>div{
  	padding: 10px 0px;
  }

  .one-order-header{
  	font-weight: bold;
  	padding: 10px 0;
  	background-color: #d7dde4;
  }
  
  .one-order-header>div{
  	padding: 0 15px;
  }

  .one-order-body{
  	position: relative;
  	border: 1px solid #d7dde4;
  	padding: 10px 0;
  }

  .one-goods{
  	position: absolute;
  	width: 100%;
  	top: 50%;
  	-webkit-transform: translate(0, -50%);
  	-moz-transform: translate(0, -50%);
  	-ms-transform: translate(0, -50%);
  	-o-transform: translate(0, -50%);
  	transform: translate(0, -50%);
  	padding-left: 20px;
  }

  .one-goods .check-box{
  	position: absolute;
  	left: 15px;
  	top: 50%;
  	z-index: 999;
  	-webkit-transform: translate(0, -50%);
  	-moz-transform: translate(0, -50%);
  	-ms-transform: translate(0, -50%);
  	-o-transform: translate(0, -50%);
  	transform: translate(0, -50%);
  }

  .one-goods-content-img{
  	padding-left: 15px;
  }

  .one-goods-content-img .title{
  	text-align: center;
  	font-weight: bold;
  	padding-bottom: 10px;
  }

  .img-box-inner{
  	position: absolute;
  	left: 0;
  	top: 0;
  }

  .img-box{
  	position: relative;
  }

  .img-box>span{
  	position: absolute;
  	left: 50%;
  	top: 50%;
  	-webkit-transform: translate(-50%, -50%);
  	-moz-transform: translate(-50%, -50%);
  	-ms-transform: translate(-50%, -50%);
  	-o-transform: translate(-50%, -50%);
  	transform: translate(-50%, -50%);
  }

  .img-box-inner img{
  	display: block;
  	width: 100%;
  }

  .img-box-inner .big-img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  .img-box-inner .small-img{
    position: absolute;
    left: 50%;
    top: 20%;
    width: 44%;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }

  .one-order-header-right{
  	text-align: center;
  }

  .one-order-body-right{
  	height: 100%;
  }

  .one-order-body-right-all{
  	line-height: 22px;
 
  }

  .left-height, .one-order-body-right-all>div{
    height: 240px;
  }

  .left-height{
  	border-right: 1px solid #d7dde4;
  }

  .left-height:not(:first-child){
  	position: relative;
  	margin-top: 20px;
  }

  .left-height:not(:first-child):before{
  	content: '';
  	position: absolute;
  	width: 90%;
  	left: 0;
  	top: -10px;
  	height: 1px;
  	background-color: #d7dde4;
  }

  .one-order-body-right-all>div:not(:first-child) {
  	border-left: 1px solid #d7dde4;
  }

  .download{
  	text-align: center;
  }

  .tbcenterbox{
  	position: relative;
  }

  .tbcenter{
  	position: absolute;
  	padding: 0 15px;
  	width: 100%;
  	top: 50%;
  	left: 0;
  	-webkit-transform: translate(0, -50%);
  	-moz-transform: translate(0, -50%);
  	-ms-transform: translate(0, -50%);
  	-o-transform: translate(0, -50%);
  	transform: translate(0, -50%);
  }

  .hidden{
  	text-align: center;
  	opacity: 0;
  	width: 100%;
  }

  .textCenter{
  	text-align: center;
  }
</style>