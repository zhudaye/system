<template>
	<div class="waitpushorder">
    <Modal
      width="400"
      :scrollable = "true"
      v-model="chooseFactory"
      title="选择推送工厂"
      ok-text="确定"
      cancel-text="取消"
      @on-ok="ok"
      @on-cancel="cancel"
      class-name="vertical-center-modal">
      <CheckboxGroup v-model="selectFactory" v-if="factoryList && factoryList.length > 0">
        <Checkbox v-for="(factory, factoryIndex) in factoryList" :key="factoryIndex" :label="JSON.stringify(factory)">{{factory.title}}</Checkbox>
      </CheckboxGroup>
    </Modal>
    <div  v-if="orderList && orderList.length > 0">
	    <div class="one-order" v-for="(item, index) in orderList" :key="index">
	    	<Row class="one-order-header">
	    		<Col span="20" class="order-header-info"> 
		        <span>用户完成支付时间：{{item.paytime | timeToSecond}}</span>
		        <span> 订单号：{{item.ordersn}}</span>
		        <span>账户ID：{{item.idnumber}}</span>
	          <span>账户名：{{item.nickname}}</span>
		      </Col>
		      <Col span="4" class="one-order-header-right"> 
			      {{'未推送'}}
			    </Col>
	    	</Row>
	    	<Row class="one-order-body" v-if="item.goods">
		      <Col span="12" class="one-order-body-left">
		        <Row> 
		        	<Col span="24" v-for="(oneGoods, indexGoods) in item.goods" class="left-height" :key="indexGoods">
		        	  <div class="one-goods" v-if="item.ordertype == 1">
						      <Checkbox v-model="item.isIn" class="check-box" v-if="indexGoods == 0" @on-change="checkAllSelect"></Checkbox>
						      <Row class="one-goods-content" type="flex" align="middle">
						      	<Col span="5" class="one-goods-content-img">
						      	  <p class="title">正面缩略图</p>
						      	  <div class="img-box">
						      	  	<img src="/static/images/ceshi/aa.jpg" class="hidden">
						      	  	<div class="img-box-inner" v-if="oneGoods.frontthumb" @mouseenter="imgMouseEnter({type: item.ordertype,smallImg: oneGoods.frontthumb, bigImg: oneGoods.fthumb_gc}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
							      	  	<img :src="baseUrlCloth + oneGoods.fthumb_gc">
							      	  	<img :src="baseUrlCloth + oneGoods.frontthumb" class="small-img">
							      	  </div>
						      	  	<span v-else>无</span>
						      	  </div>
						      	  <p class="download downloadBut" v-if="oneGoods.frontthumb"><Button type="primary" @click="loadImg(baseUrlCloth + oneGoods.frontthumb)">下载</Button></p>
						      	  <p class="hidden" v-else>无</p>
						        </Col>
						        <Col span="5" class="one-goods-content-img">
						          <p class="title">背面缩略图</p>
						          <div class="img-box">
						          	<img src="/static/images/ceshi/aa.jpg" class="hidden">
						      	    <div class="img-box-inner" v-if="oneGoods.backthumb" @mouseenter="imgMouseEnter({type: item.ordertype,smallImg: oneGoods.backthumb, bigImg: oneGoods.bthumb_gc}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
							      	  	<img :src="baseUrlCloth + oneGoods.bthumb_gc">
							      	  	<img :src="baseUrlCloth + oneGoods.backthumb" class="small-img">
							      	  </div>
						      	  	<span v-else>无</span>
						      	  </div>
						      	  <p class="download downloadBut" v-if="oneGoods.backthumb"><Button type="primary" @click="loadImg(baseUrlCloth + oneGoods.backthumb)">下载</Button></p>
						      	  <p class="hidden" v-else>无</p>
						        </Col>
						        <Col span="14">
						          <Row class="textCenter fiveColor">
						          	<Col span="4">
						          	  <span>{{oneGoods.style}}</span>
						            </Col>
						            <Col span="5">
						          	  <span>{{oneGoods.material}}</span>
						            </Col>
	                      <Col span="3">
	     
	                        <span>{{oneGoods.sex}}</span>
	                      </Col>
	                      <Col span="4">
						          	  <span>{{oneGoods.color}}</span>
						            </Col>
						            <Col span="4">
						          	  <span>{{oneGoods.size}}</span>
						            </Col>
						            <Col span="4">
						          	  <span>x{{oneGoods.number}}</span>
						            </Col>					         
						          </Row>
						        </Col>
						      </Row>
						    </div>
						    <div class="one-goods" v-if="item.ordertype == 2">
						      <Checkbox v-if="indexGoods == 0" v-model="item.isIn" class="check-box" @on-change="checkAllSelect"></Checkbox>
							    <Row class="one-goods-content">
							    	<Col span="24">
								      <Row>
								      	<Col span="4" class="one-goods-content-img">
								      	  <p class="title">内侧缩略图</p>
								      	  <div class="img-box">
								      	  	<img src="/static/images/shoes/nei.png" class="hidden">
								      	  	<div class="img-box-inner" @mouseenter="imgMouseEnter({type: item.ordertype,screenin: oneGoods.screenin}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
									      	  	<img :src="baseUrlShoes + oneGoods.screenin">
									      	  </div>
								      	  </div>
								        </Col>
								        <Col span="4" class="one-goods-content-img">
								      	  <p class="title">外侧缩略图</p>
								      	  <div class="img-box">
								      	  	<img src="/static/images/shoes/nei.png" class="hidden">
								      	  	<div class="img-box-inner" @mouseenter="imgMouseEnter({type: item.ordertype,screenin: oneGoods.screenout}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
									      	  	<img :src="baseUrlShoes + oneGoods.screenout">
									      	  </div>
								      	  </div>
								        </Col>
								        <Col span="4" class="one-goods-content-img">
								      	  <p class="title">鞋面缩略图</p>
								      	  <div class="img-box">
								      	  	<img src="/static/images/shoes/nei.png" class="hidden">
								      	  	<div class="img-box-inner" @mouseenter="imgMouseEnter({type: item.ordertype,screenin: oneGoods.screenfront}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
									      	  	<img :src="baseUrlShoes + oneGoods.screenfront">
									      	  </div>
								      	  </div>
								        </Col>
								        <Col span="4" class="one-goods-content-img">
								      	  <p class="title">后跟缩略图</p>
								      	  <div class="img-box">
								      	  	<img src="/static/images/shoes/nei.png" class="hidden">
								      	  	<div class="img-box-inner" @mouseenter="imgMouseEnter({type: item.ordertype,screenin: oneGoods.screenback}, $event)" @mouseleave="imgMouseLeave" @mousemove="imgMouseMove($event)">
									      	  	<img :src="baseUrlShoes + oneGoods.screenback">
									      	  </div>
								      	  </div>
								        </Col>
								      </Row>
								      <Row style="margin-top: 10px;" class="downloadBut">
								      	<Col span="7" class="one-goods-content-img">
								      	  <Button type="primary" @click="createImg('left', indexGoods, item)" :disabled="oneGoods.leftimg ? true : false">生成左脚鞋图片</Button>
	                        <Button type="primary" :disabled="!oneGoods.leftimg  ? true : false" @click="saveImg('left', indexGoods, item)">下载</Button>
								        </Col>
								        <Col span="7" class="one-goods-content-img">
								      	  <Button type="primary" @click="createImg('right', indexGoods, item)" :disabled="oneGoods.rightimg  ? true : false">生成右脚鞋图片</Button>
	                        <Button type="primary" :disabled="!oneGoods.rightimg  ? true : false" @click="saveImg('right', indexGoods, item)">下载</Button>
								        </Col>
								        <Col span="10" class="one-goods-content-img">
								          <Button type="primary" @click="createImg('all', indexGoods, item)" :disabled="oneGoods.aboutimg  ? true : false">生成左脚与右脚鞋图片</Button>
	                        <Button type="primary" :disabled="!oneGoods.aboutimg  ? true : false" @click="saveImg('all', indexGoods, item)">下载</Button>
								        </Col>
								      </Row>
								    </Col>
								    <Col span="8" class="shoe-info">
								      <Row>
								        <Col span="24">
								          <Row class="textCenter fiveColor">
								          	<Col span="8">
								          	  <span>{{'草鞋'}}</span>
								            </Col>
								            <Col span="8">
								          	  <span>{{oneGoods.shoes_size}}</span>
								            </Col>
			                      <Col span="8">		    
			                        <span>x{{oneGoods.number}}</span>
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
	                <p>电话：{{item.tel}}</p>
	                <p>地址：{{item.province + ' ' + item.city + ' ' + item.area + ' ' + item.detail}}</p>
			        	</div>
		          </Col>
		          <Col span="5" class="tbcenterbox textCenter">
		            <div class="tbcenter padding15">
			        	  <p>{{item.pay_type == 1 ? '支付宝' : '微信'}}</p>
			        	  <p>{{item.totalmoney}}元</p>
			        	</div>
		          </Col>
		          <Col span="3" class="tbcenterbox textCenter ">
		            <div class="tbcenter padding15">
			        	  {{item.extitle}}
			        	</div>
		          </Col>
		          <Col span="8" class="tbcenterbox textCenter">
		            <div class="tbcenter">
			        	  <Button type="warning" @click="push(item, index)">立即推送</Button>
			        	</div>
		          </Col>
		        </Row>
		      </Col>
		    </Row>
	    </div>
	  </div>
    <Row v-else class="bottomAll">
    	<Col span="24" style="font-size: 14px;text-align: center; padding: 10px;">
    	  暂无数据
      </Col>
    </Row>
    <Row  class="bottomAll" type="flex" align="middle" style="margin-top: 5px;padding: 10px" v-if="orderList && orderList.length > 0">
    	<Col span="4">
    	  <Checkbox v-model="allSelect" @on-change="selectAll">全选</Checkbox>    	  
      </Col>
      <Col span="16">
        <Page :current="currentPage" :total="totalNumber" style="text-align: center" @on-change="getDataPage"></Page>
      </Col>
      <Col span="4" style="text-align: right">
    	  <Button type="primary" @click="batchOperation">批量操作</Button> 	  
      </Col>
    </Row>
    <my-showbigimg :imginfo="imginfo" :left="ShowBigImgLeft"></my-showbigimg>
    <my-generatepicture :createimg="imgObj"></my-generatepicture>
	</div>
</template>
<script>
import config from '@/assets/myconfig/url.config.js'
import apiconfig from '@/assets/myconfig/url.myconfig.js'
import ShowBigImg from '../orderpublic/ShowBigImg'
import GeneratePicture from '../orderpublic/GeneratePicture.vue'
import myjs from '@/assets/myjs/myjs.js'
	export default {
		name: 'waitpushporder',
		data() {
			return {
				baseUrlShoes: config.imgurl1,
				baseUrlCloth: config.imgurl1,
				selectFactory: [],//推送的工厂列表
				upLoadList:[],//推送的订单列表
				upLoadOneIndex: -1,
				allSelect: false,//是否全选
        imgObj: null,//生成图片信息
        imginfo: null, //放大图片信息
        ShowBigImgLeft: 0,//放大图片left
        chooseFactory: false,//是否弹出工厂选择层
        totalNumber: 0,//订单总数
        currentPage: 1,//当前页
        factoryList: null,
        orderList: null
			}
		},
		components:{
			'my-showbigimg': ShowBigImg,
			'my-generatepicture': GeneratePicture
		},
		props:['passvalue'],
		watch: {
			passvalue() {
				if(this.passvalue){
					let loading = this.$Message.loading({
            content: 'Loading...',
            duration: 0
	        });
          this.getData(config.api + apiconfig.orderList,{page: 1, pagesize: 10, querytime: this.passvalue, status: 2, pushstatus: 0}).then((value) => {
          	loading();
						if(value.code == 200) {
							this.orderList = null;
							if(value.data.length > 0) {
                for(let ele of value.data) {
			      			ele.isIn = false;
			      		}
								this.orderList = value.data;
							  this.totalNumber = value.total;//订单总数
			          this.currentPage = value.page;
							}
						}else{
							this.$Message.info(value.msg);
						}
					})
				}
			},
			orderList() { 
			  this.checkAllSelect();                                                          	
			}
		},
		methods: {
			getData( url,option) {
        return new Promise((resove, reject) => {
          this.$http({
	          method:'POST',
	          url: url,
	          data: option,
	          responseType:'json'
	        }).then(function(response) {
	          resove(response.data);
	        }).catch(function(e){
	          reject(e);
	        });
        })
      },
      loadImg(url) {
        myjs.loadImg(url).then(function(value) {
        	if(value) {
        		let canvas = document.createElement('canvas');
        		canvas.width = value.width;
        		canvas.height = value.height;
        		let context = canvas.getContext('2d');
        		context.drawImage(value, 0, 0);
        		canvas.toBlob(function(blob) {
        			saveAs(blob, '爆造.png');
        		}, 'image/png')
        	}
        })
      },
			checkGenerateImg(list) {
        for(let i = 0; i <list.length; i++) {
          if(list[i].type == 'shoes') {
            for (let j = 0; j < list[i].goods.length; j++) {
            	if(!(list[i].goods[j].leftimg && list[i].goods[j].rightimg && list[i].goods[j].aboutimg)) {
            		return false;
            	}
            }
          }
        }
        return true;
			},
			batchOperation() {
				this.$Message.warning('预留功能,尚未开发');
        return
				let selectList = this.orderList.filter((ele) => {
					return ele.isIn
				})

				if(selectList.length <= 0) {
					this.$Notice.error({
            title: '错误提醒',
            desc: '未选择订单',
            duration: 2
          });
          return
				}

				/*if(!this.checkGenerateImg(selectList)){
          this.$Notice.error({
            title: '错误提醒',
            desc: '订单有未生成图片',
            duration: 2
          });
        	return;
				}*/
        this.showAlert(selectList);
			},
			push(item, index) {//推送单个订单
				/*if(!this.checkGenerateImg([item])){
          this.$Notice.error({
            title: '错误提醒',
            desc: '订单有未生成图片',
            duration: 2
          });
        	return;
				}*/
				this.upLoadOneIndex = index;//记录推送订单的index
        this.showAlert([item]);
			},
			showAlert(upList) {//弹出工厂选择框
				this.chooseFactory = true;
				this.selectFactory = [];//清空工厂选择
				this.upLoadList = JSON.parse(JSON.stringify(upList));//缓存即将推送的订单
			},
			pushOrder(url, option) {//上传推送订单
        return new Promise((resove, reject) => {
          this.$http({
	          method:'POST',
	          url: url,
	          data: option,
	          responseType:'json'
	        }).then(function(response) {
	          resove(response.data);
	        }).catch(function(e){
	          reject(e);
	        });
        })
			},
			ok() {
				let _this = this;
        if(this.selectFactory.length <= 0) {
        	this.$Notice.error({
            title: '错误提醒',
            desc: '未选择推送工厂',
            duration: 2
          });
        	return
        }
        let option = {
        	orderid: this.upLoadList[0].orderid, 
        	factoryid: JSON.parse(this.selectFactory[0]).factoryid
        }
        this.pushOrder(config.api + apiconfig.pushOrder,option).then((value) => {//上传推送订单
        	if(value.code == 200) {
            if(this.upLoadOneIndex == -1) {
		        	this.orderList = this.orderList.filter((ele) => {
		        		return !ele.isIn
		        	})
		        }else{
		        	this.orderList.splice(this.upLoadOneIndex, 1);
		        	this.upLoadOneIndex = -1;
		        }
		        this.upLoadList = [];
		        this.selectFactory = [];
        	}else{
        		this.$Message.info(value.msg);
        	}
        })
      },
      cancel() {
      	this.selectFactory = [];
      },
			saveImg(type, index, item) {
				if(type == 'left') {
					saveAs(item.goods[index].leftimg, item.ordersn + '左脚' +  item.goods[index].shoes_size + '.jpeg');
				}
				if(type == 'right') {
					saveAs(item.goods[index].rightimg, item.ordersn + '右脚' +  item.goods[index].shoes_size + '.jpeg');
				}
				if(type == 'all') {
					saveAs(item.goods[index].aboutimg, item.ordersn + '左右脚' +  item.goods[index].shoes_size + '.jpeg');
				}
			},			
			selectAll() {
        this.orderList = this.orderList.map((ele) => {
					ele.isIn = this.allSelect;
					alert(ele.isIn);
					return ele
				})    
			},
			checkAllSelect() {
				if(this.orderList.length <= 0) {
					this.allSelect = false
					return 
				}

        for(let i = 0; i < this.orderList.length; i++) {
        	if(!this.orderList[i].isIn){
        		this.allSelect = false
        		return 
        	}
        }

        this.allSelect = true
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
			},
			getDataPage() {
	      this.getData(config.api + apiconfig.orderList,{page: this.currentPage, pagesize: 10, status: 2, pushstatus: 0}).then((value) => {
					if(value.code == 200) {
						this.orderList = null;
						if(value.data.length > 0) {
              for(let ele of value.data) {
		      			ele.isIn = false;
		      		}
							this.orderList = value.data;
						  this.totalNumber = value.total;//订单总数
		          this.currentPage = value.page;
						}
					}else{
						this.$Message.info(value.msg);
					}
				})
			}
		},
		activated() {
			this.getData(config.api + apiconfig.orderList,{page: 1, pagesize: 10, status: 2, pushstatus: 0}).then((value) => {
				if(value.code == 200) {
					this.orderList = null;
					if(value.data.length > 0) {
            for(let ele of value.data) {
	      			ele.isIn = false;
	      		}
						this.orderList = value.data;
					  this.totalNumber = value.total;//订单总数
	          this.currentPage = value.page;
					}
				}else{
					this.$Message.info(value.msg);
				}
			})

			this.getData(config.api + apiconfig.factoryList, {}).then((value) => {
				if(value.code == 200) {
					this.factoryList = value.data.map((ele) => {
						ele.isIn = false;
						return ele
					});
				}else{
					this.$Message.info(value.msg);
				}
			})
		},
		mounted() {
		}
	}
</script>
<style scoped>
  @import url('../order.css');
</style>