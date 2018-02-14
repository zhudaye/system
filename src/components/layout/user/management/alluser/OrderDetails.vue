<template>
 <div class="waitshiporder">
		<Row class="top-nav" style="background:white">
      <Col span="12" class="top-left"> 
      <h2 style="color:#495060">
       <strong style="color:#1c2437;font-size:22px;">用户昵称</strong>
	      的订单管理 - 已支付-未推送-详情   &nbsp;&nbsp;&nbsp;&nbsp; 账户ID：XXXXXX</h2>
	    </Col>
      <Col span="12" class="top-right">
        <DatePicker type="date" @on-change="datenum" placeholder="Select date" style="width: 40%"></DatePicker>
        <Button type="primary" @click="submit">搜索</Button>
      </Col>
    </Row>
    <component :is="currentComponent"></component>
	</div>

</template>
<script>
  import PushedOrder from '@/components/layout/order/waitshiporder/PushedOrder.vue'
  import WaitPushOrder from '@/components/layout/order/waitshiporder/WaitPushOrder.vue'
  	export default {
		name: 'orderdetails',
		components: {
			'my-waitpushorder': WaitPushOrder,
			'my-pushedorder': PushedOrder
		},
		data() {
			return {
        search: '',//搜索内容
        isPushed: false,
        currentComponent: 'my-waitpushorder'
			}
		},
		watch: {
      isPushed() {
        this.currentComponent = this.isPushed ? 'my-pushedorder' : 'my-waitpushorder'
      }
		},
    methods: {
      changePush(status) {
				if(this.isPushed == status) return;
				this.isPushed = status
      },
      datenum(){

      },
			submit() {
				
      },
    },
    created(){
      var a = sessionStorage.getItem('productid');
    }
	}
  //import PushedOrder from './PushedOrder'
</script>
<style scoped>
.topDesign,
.centerDesign {
  position: relative;
}
.leftDesign,
.rightDesign {
  position: absolute;
}

#cutbox img {
  display: block;
}

.lineImg {
  position: absolute;
  left: 0;
  top: 0;
}

.leftCloth,
.rightCloth {
  position: relative;
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  padding: 100px;
}

.allDesign {
  width: 100%;
  position: relative;
}

.allDesignInner {
  width: 100%;
  position: relative;
}

.leftCloth .allDesign .allDesignInner {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.img-out {
  z-index: -1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.img-inner {
  width: 100%;
  height: 100%;
  overflow: scroll;
  opacity: 0;
}

#cutbox {
  width: 4400px;
  overflow: hidden;
}

.topNumberTop,
.topNumberCenter,
.topNumberLeft,
.topNumberRight {
  z-index: 100;
  padding: 5px;
  border-radius: 4px;
  position: absolute;
  text-align: center;
  background-color: #fff;
  color: #ff0000;
}

.topTitle {
  font-weight: bold;
}

.topDesign,
.centerDesign {
  -webkit-transform: rotateZ(180deg);
  -moz-transform: rotateZ(180deg);
  -ms-transform: rotateZ(180deg);
  -o-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
  position: relative;
  margin: 0 auto;
}

.centerDesign {
  margin-top: -1500px;
}

.topNumberTop,
.topNumberCenter {
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

.topNumberTop {
  top: 3%;
}

.topNumberCenter {
  top: 42%;
}

.bottomBox {
  position: relative;
  width: 100%;
  margin-top: -1600px;
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.bottomBox:after {
  display: block;
  content: "";
  clear: both;
}

.leftDesign {
  position: relative;
  float: left;
  margin-left: -500px;
  -webkit-transform: rotateZ(90deg) rotateX(180deg);
  -moz-transform: rotateZ(90deg) rotateX(180deg);
  -ms-transform: rotateZ(90deg) rotateX(180deg);
  -o-transform: rotateZ(90deg) rotateX(180deg);
  transform: rotateZ(90deg) rotateX(180deg);
}

.rightDesign {
  position: absolute;
  right: -500px;
  top: 0;
  -webkit-transform: rotateZ(-90deg) rotateX(180deg);
  -moz-transform: rotateZ(-90deg) rotateX(180deg);
  -ms-transform: rotateZ(-90deg) rotateX(180deg);
  -o-transform: rotateZ(-90deg) rotateX(180deg);
  transform: rotateZ(-90deg) rotateX(180deg);
}

.topNumberLeft {
  left: 32%;
  top: 68%;
  -webkit-transform: rotateZ(81deg);
  -moz-transform: rotateZ(81deg);
  -ms-transform: rotateZ(81deg);
  -o-transform: rotateZ(81deg);
  transform: rotateZ(81deg);
}

.topNumberRight {
  right: 32%;
  top: 68%;
  -webkit-transform: rotateZ(-81deg);
  -moz-transform: rotateZ(-81deg);
  -ms-transform: rotateZ(-81deg);
  -o-transform: rotateZ(-81deg);
  transform: rotateZ(-81deg);
}

.orderInfo {
  position: absolute;
  left: 50%;
  top: 60%;
  border-radius: 4px;
  z-index: 99999;
  box-sizing: border-box;
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  border: 2px solid #666;
  background-color: #fff;
}

.bottomLogo {
  position: absolute;
  left: 50%;
  top: 75%;
  width: 390px;
  text-align: center;
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

.logoTitle {
  padding: 10px 0;
  width: 100%;
  font-size: 56px;
  font-weight: bold;
  display: inline-block;
}

.logo {
  background-color: #fff;
  border: 2px solid #666;
  height: 176px;
  letter-spacing: 5px;
  line-height: 168px;
  font-size: 80px;
  font-weight: bold;
  display: inline-block;
  width: 100%;
}

.logoSize {
  display: inline-block;
  padding-top: 10px;
  font-size: 24px;
  letter-spacing: 2px;
}

.bottomImgBox {
  position: relative;
  width: 100%;
  margin-top: 100px;
}

.bottomImgBox > .thumbnailBox {
  position: relative;
  width: 1504px;
  margin: 0 auto;
  border: 2px solid #666;
  overflow: hidden;
}

.bottomImgBox > .thumbnailBox:after {
  position: absolute;
  z-index: 999999;
  right: 15px;
  top: 15px;
  content: "";
  width: 15px;
  height: 15px;
  border: 2px solid #000;
  border-radius: 50%;
}

.bottomImgBox > .thumbnailBox > div {
  float: left;
  width: 300px;
  position: relative;
  border: 2px solid #666;
}

.bottomImgBox > .thumbnailBox > div > img {
  width: 100%;
}

.bottomImgBox > .thumbnailBox > div > span {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 999;
}

.bottomImgBox > .thumbnailBox > .left-front > img {
  -webkit-transform: rotateX(180deg) rotateZ(90deg);
  -moz-transform: rotateX(180deg) rotateZ(90deg);
  -ms-transform: rotateX(180deg) rotateZ(90deg);
  -o-transform: rotateX(180deg) rotateZ(90deg);
  transform: rotateX(180deg) rotateZ(90deg);
}

.bottomImgBox > .thumbnailBox > .right-front > img {
  -webkit-transform: rotateZ(90deg);
  -moz-transform: rotateZ(90deg);
  -ms-transform: rotateZ(90deg);
  -o-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}

.orderInfo p {
  margin-top: 5px;
  line-height: 24px;
}

.oneInfo {
  width: 250px;
}

.orderInfo p span.underline {
  width: calc(100% - 80px);
  position: relative;
  display: inline-block;
}

.orderTitle {
  position: relative;
  text-align: center;
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
}

.orderTitle:after,
.orderInfo p span.underline:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #999;
}

.orderTitle .dot {
  position: absolute;
  content: "";
  left: 10px;
  top: 50%;
  border: 2px solid #e60012;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  z-index: 99999;
  -webkit-transform: translate(0, -50%);
  -moz-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

.orderBody {
  font-size: 16px;
  padding: 10px;
}
</style>