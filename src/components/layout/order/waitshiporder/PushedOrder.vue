<template>
	<div class="pushedorder">
    <Row class="table-title">
      <Col span="12"> 
	      宝贝
	    </Col>
      <Col span="12">
        <Row>
        	<Col span="8">
        	  收货人
          </Col>
          <Col span="5">
            支付方式及金额
          </Col>
          <Col span="3">
            物流
          </Col>
          <Col span="8">
            状态
          </Col>
        </Row>
      </Col>
    </Row>
    <div class="one-order" v-if="orderList" v-for="(item, index) in orderList" :key="index">
    	<Row class="one-order-header">
    		<Col span="16" class="order-header-info"> 
	        <span>用户完成支付时间：{{item.payTime | timeToSecond}}</span>
	        <span>订单号：{{item.orderID}}</span>
	        <span>账户ID：{{item.userID}}</span>
          <span>账户名：{{item.userName}}</span>
	      </Col>
	      <Col span="8" class="one-order-header-right" style="text-align: right"> 
		      {{'订单推送时间：年-月-日-时-分-秒'}}
		    </Col>
    	</Row>
    	<Row class="one-order-body">
	      <Col span="12" class="one-order-body-left">
	        <Row> 
	        	<Col span="24" v-if="item.goods" v-for="(oneGoods, indexGoods) in item.goods" class="left-height" :key="indexGoods">
	        	  <div class="one-goods" v-if="item.type == 'clothes'">
					      <Row class="one-goods-content" type="flex" align="middle">
					      	<Col span="5" class="one-goods-content-img">
					      	  <p class="title">正面缩略图</p>
					      	  <div class="img-box">
					      	  	<img src="static/images/ceshi/aa.jpg" class="hidden">
					      	  	<div class="img-box-inner" v-if="oneGoods.frontSmallImg" @mouseenter="imgMouseEnter({type: item.type,smallImg: oneGoods.frontSmallImg, bigImg: oneGoods.frontClothImg}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
						      	  	<img :src="oneGoods.frontClothImg">
						      	  	<img :src="oneGoods.frontSmallImg" class="small-img">
						      	  </div>
					      	  	<span v-else>无</span>
					      	  </div>
					      	  <p class="download" v-if="oneGoods.frontSmallImg"><a href="" download>下载</a></p>
					      	  <p class="hidden" v-else>无</p>
					        </Col>
					        <Col span="5" class="one-goods-content-img">
					          <p class="title">背面缩略图</p>
					          <div class="img-box">
					          	<img src="static/images/ceshi/aa.jpg" class="hidden">
					      	    <div class="img-box-inner" v-if="oneGoods.backClothImg" @mouseenter="imgMouseEnter({type: item.type,smallImg: oneGoods.backSmallImg, bigImg: oneGoods.backClothImg}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
						      	  	<img :src="oneGoods.backClothImg">
						      	  	<img :src="oneGoods.backSmallImg" class="small-img">
						      	  </div>
					      	  	<span v-else>无</span>
					      	  </div>
					      	  <p class="download" v-if="oneGoods.backSmallImg"><a href="" download>下载</a></p>
					      	  <p class="hidden" v-else>无</p>
					        </Col>
					        <Col span="14">
					          <Row class="textCenter" >
					          	<Col span="4">
					          	  <p>{{oneGoods.styleTitle}}</p>
					            </Col>
					            <Col span="5">
					          	  <p>{{oneGoods.materialTitle}}</p>
					            </Col>
                      <Col span="3">
     
                        <p>{{oneGoods.sexTitle}}</p>
                      </Col>
                      <Col span="4">
					          	  <p>{{oneGoods.colorTitle}}</p>
					            </Col>
					            <Col span="4">
					          	  <p>{{oneGoods.sizeTitle}}</p>
					            </Col>
					            <Col span="4">
					          	  <p>x{{oneGoods.number}}</p>
					            </Col>					         
					          </Row>
					        </Col>
					      </Row>
					    </div>
					    <div class="one-goods" v-if="item.type == 'shoes'">
						    <Row class="one-goods-content">
						    	<Col span="24">
							      <Row>
							      	<Col span="4" class="one-goods-content-img">
							      	  <p class="title">内侧缩略图</p>
							      	  <div class="img-box">
							      	  	<img src="static/images/shoes/nei.png" class="hidden">
							      	  	<div class="img-box-inner" @mouseenter="imgMouseEnter({type: item.type,screenin: oneGoods.screenin}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
								      	  	<img :src="baseUrlShoes + oneGoods.screenin">
								      	  </div>
							      	  </div>
							        </Col>
							        <Col span="4" class="one-goods-content-img">
							      	  <p class="title">外侧侧缩略图</p>
							      	  <div class="img-box">
							      	  	<img src="static/images/shoes/nei.png" class="hidden">
							      	  	<div class="img-box-inner" @mouseenter="imgMouseEnter({type: item.type,screenin: oneGoods.screenout}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
								      	  	<img :src="baseUrlShoes + oneGoods.screenout">
								      	  </div>
							      	  </div>
							        </Col>
							        <Col span="4" class="one-goods-content-img">
							      	  <p class="title">鞋面缩略图</p>
							      	  <div class="img-box">
							      	  	<img src="static/images/shoes/nei.png" class="hidden">
							      	  	<div class="img-box-inner" @mouseenter="imgMouseEnter({type: item.type,screenin: oneGoods.screenfront}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
								      	  	<img :src="baseUrlShoes + oneGoods.screenfront">
								      	  </div>
							      	  </div>
							        </Col>
							        <Col span="4" class="one-goods-content-img">
							      	  <p class="title">后跟缩略图</p>
							      	  <div class="img-box">
							      	  	<img src="static/images/shoes/nei.png" class="hidden">
							      	  	<div class="img-box-inner" @mouseenter="imgMouseEnter({type: item.type,screenin: oneGoods.screenback}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
								      	  	<img :src="baseUrlShoes + oneGoods.screenback">
								      	  </div>
							      	  </div>
							        </Col>
							      </Row>
							      <Row style="margin-top: 10px;" class="downloadBut">
							      	<Col span="7" class="one-goods-content-img">
							      	  <Button type="primary" @click="createImg('left', indexGoods, item)" :disabled="oneGoods.leftshoe ? true : false">生成左脚鞋图片</Button>
                        <Button type="primary" :disabled="!oneGoods.leftshoe  ? true : false" @click="saveImg('left', indexGoods, item)">下载</Button>
							        </Col>
							        <Col span="7" class="one-goods-content-img">
							      	  <Button type="primary" @click="createImg('right', indexGoods, item)" :disabled="oneGoods.rightshoe  ? true : false">生成右脚鞋图片</Button>
                        <Button type="primary" :disabled="!oneGoods.rightshoe  ? true : false" @click="saveImg('right', indexGoods, item)">下载</Button>
							        </Col>
							        <Col span="10" class="one-goods-content-img">
							          <Button type="primary" @click="createImg('all', indexGoods, item)" :disabled="oneGoods.allshoe  ? true : false">生成左脚与右脚鞋图片</Button>
                        <Button type="primary" :disabled="!oneGoods.allshoe  ? true : false" @click="saveImg('all', indexGoods, item)">下载</Button>
							        </Col>
							      </Row>
							    </Col>
							    <Col span="8" class="shoe-info">
							      <Row>
							        <Col span="24">
							          <Row class="textCenter" >
							          	<Col span="8">
							          	  <p>{{oneGoods.styleTitle}}</p>
							            </Col>
							            <Col span="8">
							          	  <p>{{oneGoods.sizeTitle}}</p>
							            </Col>
		                      <Col span="8">		    
		                        <p>x{{oneGoods.number}}</p>
		                      </Col>    
							          </Row>
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
	        	  <div class="tbcenter padding15">
		        	  <p>姓名：{{item.name}}</p>
                <p>电话：{{item.phoneNumber}}</p>
                <p>地址：{{item.address}}</p>
		        	</div>
	          </Col>
	          <Col span="5" class="tbcenterbox textCenter">
	            <div class="tbcenter padding15">
		        	  <p>{{item.payType}}</p>
		        	  <p>{{item.payMoney}}</p>
		        	</div>
	          </Col>
	          <Col span="3" class="tbcenterbox textCenter ">
	            <div class="tbcenter padding15">
		        	  {{item.addressType}}
		        	</div>
	          </Col>
	          <Col span="8" class="tbcenterbox textCenter">
	            <div class="tbcenter padding15">
		        	  <p>{{'XXXXXXXXXXXXX超牛逼工厂'}}</p>
		        	  <p>等待工厂回传信息</p>
		        	</div>
	          </Col>
	        </Row>
	      </Col>
	    </Row>
    </div>
    <Row  type="flex" align="middle" style="margin-top: 5px;padding: 10px">
      <Col span="24">
        <Page :current="currentPage" :total="totalNumber" style="text-align: center" @on-change="loadData"></Page>
      </Col>
    </Row>
    <my-showbigimg :imginfo="imginfo" :left="ShowBigImgLeft"></my-showbigimg>
    <my-generatepicture :createimg="imgObj"></my-generatepicture>
	</div>
</template>
<script>
import ShowBigImg from '../orderpublic/ShowBigImg'
import GeneratePicture from '../orderpublic/GeneratePicture.vue'
	export default {
		name: 'waitshiporder',
		data() {
			return {
				baseUrlShoes: '/baseUrlShoes',
				selectFactory: [],//推送的工厂列表
				upLoadOrder:[],//推送的订单列表
				allOrder: false,//是否全选
        imgObj: null,//生成图片信息
        imginfo: null, //放大图片信息
        ShowBigImgLeft: 0,//放大图片left
        totalNumber: 0,//订单总数
        currentPage: 1,//当前页
        orderList: [
          {
          	type: 'clothes',
          	payTime: new Date().getTime()/1000,
          	orderID: 1220,
          	userID: 1222222,
          	userName: 'zhudaye',
          	pushed: false,        	
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
		          	/*frontSmallImg: 'static/images/ceshi/qqc.png',
	          	  frontClothImg: 'static/images/ceshi/aa.jpg'*/
	          	  backSmallImg: 'static/images/ceshi/qqc.png',
	          	  backClothImg: 'static/images/ceshi/aa.jpg'
	          	}

          	]          	
          },
          {
          	type: 'shoes',//鞋或衣服
          	payTime: new Date().getTime()/1000,//完成支付时间
          	orderID: 1220,//订单ID

          	ordertime: '2018/01/22',//订单日期
          	ordernumber: 22222222222,//订单单号
          	platformname: '爆造',//平台名称
          	brandname: '顶顶顶顶',//品牌名称
          	goodsname: '111111',
          	name:'爷爷朱',//快递单姓名
          	phonenumber: 18811347069,//快递单手机号
          	address: '重庆市扬子江商',//快递单地址	  

          	userID: 1222222,//用户ID
          	userName: 'zhudaye',//用户名
          	pushed: false,//是否已推送     	
          	payType:'微信',//支付方式
          	payMoney: 21000,//支付金额
          	addressType: '顺丰',//快递方式
          	goods: [//订单商品
	          	{ /*goodsID: 1,*/
	          		styleTitle:'草鞋',//鞋类型
		          	sizeTitle: 44,//尺码
		          	number: 1000,//数量
		          	screenout: "static/images/shoes/wai.png",
		          	screenin: "static/images/shoes/nei.png",
		          	screenback: "static/images/shoes/hou.png",
		          	screenfront: "static/images/shoes/qian.png",
		          	cutfront: "static/images/shoes/shoe_front.png",
		          	cutback: "static/images/shoes/shoe_back.png",
		          	cutin: "static/images/shoes/shoe_in.png",
		          	cutout: "static/images/shoes/shoe_out.png",
		          	leftshoe:'',//已生成左脚图
		          	rightshoe:'',//已生成右脚图
		          	allshoe: ''//已生成总图
	          	}
          	]          	
          },
          {
          	type: 'clothes',
          	payTime: new Date().getTime()/1000,
          	orderID: 1220,
          	userID: 1222222,
          	userName: 'zhudaye',	
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
	          	}
          	]          	
          },
          {
          	type: 'clothes',
          	payTime: new Date().getTime()/1000,
          	orderID: 1220,
          	userID: 1222222,
          	userName: 'zhudaye',      	
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
	          	}
          	]          	
          },
          {
          	type: 'shoes',//鞋或衣服
          	payTime: new Date().getTime()/1000,//完成支付时间
          	orderID: 1220,//订单ID

          	ordertime: '2018/01/22',//订单日期
          	ordernumber: 22222222222,//订单单号
          	platformname: '爆造',//平台名称
          	brandname: '顶顶顶顶',//品牌名称
          	goodsname: '111111',
          	name:'爷爷朱',//快递单姓名
          	phonenumber: 18811347069,//快递单手机号
          	address: '重庆市扬子江商',//快递单地址	  

          	userID: 1222222,//用户ID
          	userName: 'zhudaye',//用户名
          	pushed: false,//是否已推送
          	isIn: false,//是否被选中          	
          	payType:'微信',//支付方式
          	payMoney: 21000,//支付金额
          	addressType: '顺丰',//快递方式
          	goods: [//订单商品
	          	{ /*goodsID: 1,*/
	          		styleTitle:'草鞋',//鞋类型
		          	sizeTitle: 44,//尺码
		          	number: 1000,//数量
		          	screenout: "static/images/shoes/wai.png",
		          	screenin: "static/images/shoes/nei.png",
		          	screenback: "static/images/shoes/hou.png",
		          	screenfront: "static/images/shoes/qian.png",
		          	cutfront: "static/images/shoes/shoe_front.png",
		          	cutback: "static/images/shoes/shoe_back.png",
		          	cutin: "static/images/shoes/shoe_in.png",
		          	cutout: "static/images/shoes/shoe_out.png",
		          	leftshoe:'',//已生成左脚图
		          	rightshoe:'',//已生成右脚图
		          	allshoe: ''//已生成总图
	          	},
	          	{ goodsID: 1,
	          		styleTitle:'草鞋',//鞋类型
		          	sizeTitle: 44,//尺码
		          	number: 1000,//数量
		          	screenout: "static/images/shoes/wai.png",
		          	screenin: "static/images/shoes/nei.png",
		          	screenback: "static/images/shoes/hou.png",
		          	screenfront: "static/images/shoes/qian.png",
		          	cutfront: "static/images/shoes/shoe_front.png",
		          	cutback: "static/images/shoes/shoe_back.png",
		          	cutin: "static/images/shoes/shoe_in.png",
		          	cutout: "static/images/shoes/shoe_out.png",
		          	leftshoe:'',//已生成左脚图
		          	rightshoe:'',//已生成右脚图
		          	allshoe: ''//已生成总图
	          	},
	          	{ goodsID: 1,
	          		styleTitle:'草鞋',//鞋类型
		          	sizeTitle: 44,//尺码
		          	number: 1000,//数量
		          	screenout: "static/images/shoes/wai.png",
		          	screenin: "static/images/shoes/nei.png",
		          	screenback: "static/images/shoes/hou.png",
		          	screenfront: "static/images/shoes/qian.png",
		          	cutfront: "static/images/shoes/shoe_front.png",
		          	cutback: "static/images/shoes/shoe_back.png",
		          	cutin: "static/images/shoes/shoe_in.png",
		          	cutout: "static/images/shoes/shoe_out.png",
		          	leftshoe:'',//已生成左脚图
		          	rightshoe:'',//已生成右脚图
		          	allshoe: ''//已生成总图
	          	}
          	]          	
          }
        ]
			}
		},
		components:{
			'my-showbigimg': ShowBigImg,
			'my-generatepicture': GeneratePicture
		},
		watch: {
		},
		methods: {
			loadData(page) {
        console.log(page)
			},
			saveImg(type, index, item) {
				if(type == 'left') {
					saveAs(item.goods[index].leftshoe, item.ordernumber + '左脚.jpeg');
				}
				if(type == 'right') {
					saveAs(item.goods[index].rightshoe, item.ordernumber + '右脚.jpeg');
				}
				if(type == 'all') {
					saveAs(item.goods[index].allshoe, item.ordernumber + '左右脚.jpeg');
				}
			},
			createImg(type, index, item){
        this.imgObj = {
        	type: type,
        	index: index,
        	item: item
        };
			},
			imgMouseEnter(obj, event){
				this.ShowBigImgLeft = event.clientX;
        this.imginfo = obj;
			},
			imgMouseLeave(){
        this.imginfo = null;
			},
			imgMouseMove(event){
        this.ShowBigImgLeft = event.clientX;
			}
		},
		mounted() {
			let _this = this;
			$.ajax({
      	method: 'get',
      	url: '/api' + '/shoesDetail.html',
      	data: {
          shoesid: 35
      	},
      	dataType: 'json',
      	success: function(response) {
      		_this.orderList[1].goods[0].cutin = response.data.cutin;
      		_this.orderList[1].goods[0].cutout = response.data.cutout;
      		_this.orderList[1].goods[0].cutfront = response.data.cutfront;
      		_this.orderList[1].goods[0].cutback = response.data.cutback;
      		_this.orderList[1].goods[0].screenin = response.data.screenin;
      		_this.orderList[1].goods[0].screenout = response.data.screenout;
      		_this.orderList[1].goods[0].screenfront = response.data.screenfront;
      		_this.orderList[1].goods[0].screenback = response.data.screenback;
      	},error: function(e) {
      		console.log(e)
      	}
      })
		}
	}
</script>
<style>
  .ivu-checkbox-group>label{
  	padding: 5px 0;
  	display: block;
  }
  .vertical-center-modal{
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}

	.vertical-center-modal .ivu-modal{
    top: 0;
  }

	.pushedorder>div{
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
  	margin-top: 5px;
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

  .order-header-info>span{
  	margin-right: 10px;
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

  .downloadBut .ivu-btn{
  	padding: 5px 10px;
  }

  .downloadBut .one-goods-content-img{
    padding-left: 10px;
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
  	top: 47.2%;
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
    width: 44.5%;
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
  	line-height: 20px;
  }

  .one-order-body-right-all p:not(:first-child){
  	margin-top: 5px;
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
  	width: 100%;
  	top: 50%;
  	left: 0;
  	-webkit-transform: translate(0, -50%);
  	-moz-transform: translate(0, -50%);
  	-ms-transform: translate(0, -50%);
  	-o-transform: translate(0, -50%);
  	transform: translate(0, -50%);
  }

  .height100{
    height: 100%;
  }

  .padding15{
  	padding: 0 15px;
  }

  .hidden{
  	text-align: center;
  	opacity: 0;
  	width: 100%;
  }

  .shoe-info{
  	position: absolute;
  	right: 0;
  	top: 50%;
  	-webkit-transform: translate(0, -50%);
  	-moz-transform: translate(0, -50%);
  	-ms-transform: translate(0, -50%);
  	-o-transform: translate(0, -50%);
  	transform: translate(0, -50%);
  }

  .textCenter{
  	text-align: center;
  }
</style>