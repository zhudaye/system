<template>
	<div class="determineorder">
    <div v-if="orderList && orderList.length > 0">
      <div class="one-order" v-for="(item, index) in orderList" :key="index">
      	<Row class="one-order-header">
      		<Col span="16" class="order-header-info"> 
  	        <span>用户完成支付时间：{{item.paytime | timeToSecond}}</span>
  	        <span> 订单号：{{item.ordersn}}</span>
  	        <span>账户ID：{{item.idnumber}}</span>
            <span>账户名：{{item.nickname}}</span>
  	      </Col>
  	      <Col span="8" class="one-order-header-right" style="text-align: right"> 
  		      订单推送时间：{{item.push_time | timeToSecond}}
  		    </Col>
      	</Row>
      	<Row class="one-order-body">
  	      <Col span="12" class="one-order-body-left">
  	        <Row> 
  	        	<Col span="24" v-for="(oneGoods, indexGoods) in item.goods" class="left-height" :key="indexGoods">
  	        	  <div class="one-goods" v-if="item.ordertype == 1">
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
  	          <Col span="8" class="tbcenterbox textCenter ">
  	            <div class="tbcenter padding15">
  		        	  <p>工厂名称：{{item.factory}}</p>
  		        	  <p>物流名称：{{item.extitle}}</p>
  		        	  <p>快递单号：{{item.excode}}</p>
  		        	  <p>工厂响应时间：{{item.delivertime | timeToSecond}}</p>
  		        	</div>
  	          </Col>
  	          <Col span="3" class="tbcenterbox textCenter">
  	            <div class="tbcenter padding15">
  		        	  <p>已确定</p>
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
    <Row  class="bottomAll" type="flex" align="middle" style="margin-top: 5px;padding: 10px" v-show="orderList && orderList.length > 0">
      <Col span="24">
        <Page :current="currentPage" :total="totalNumber" style="text-align: center" @on-change="getDataPage"></Page>
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
		name: 'determineorder',
		data() {
			return {
				baseUrlShoes: config.imgurl1,
				baseUrlCloth: config.imgurl1,
        imgObj: null,//生成图片信息
        imginfo: null, //放大图片信息
        ShowBigImgLeft: 0,//放大图片left
        totalNumber: 0,//订单总数
        currentPage: 1,//当前页
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
          this.getData(config.api + apiconfig.confirmOrderlist,{page: 1, pagesize: 10, querytime: this.passvalue}).then((value) => {
            loading();
            if(value.code == 200) {
              console.log(value)
              for(let ele of value.data) {
                ele.isIn = false;
              }
              this.orderList = value.data;
              this.totalNumber = value.total;//订单总数
              this.currentPage = value.page;
            }else{
              this.$Message.info(value.msg);
            }
          })
        }
      }
    },
		methods: {
      getDataPage() {
        this.getData(config.api + apiconfig.waitSend_notPush,{page: this.currentPage, pagesize: 10}).then((value) => {
          if(value.code == 200) {
            this.orderList = value.data.map((ele) => {
              ele.isIn = false;
              return ele
            });
            this.totalNumber = value.total;//订单总数
            this.currentPage = value.page;
          }else{
            this.$Message.info(value.msg);
          }
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
		},
		mounted() {
      this.getData(config.api + apiconfig.confirmOrderlist,{page: 1, pagesize: 10}).then((value) => {
      	console.log(value);
				if(value.code == 200) {
					this.orderList = value.data;
				  this.totalNumber = value.total;//订单总数
          this.currentPage = value.page;
				}else{
					this.$Message.info(value.msg);
				}
			})
		}
	}
</script>
<style scoped>
  @import url('../order.css')
</style>