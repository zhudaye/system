<template>
<div class="img-out" v-if="imgInfo">
  <div class="img-inner">
    <div id="cutbox" :style="{width: imgInfo.type == 'all' ? 2 * setCanvas.width : setCanvas.width + 'px'}">
      <div class="leftCloth" v-if="imgInfo.type != 'right'" :style="{width: setCanvas.width + 'px'}">
      	<div class="topNumberTop">
      		<p class="topTitle">左前</p>
      		<p class="numberInfo">12123efdfrrerrfrfrrr</p>
      	</div>
      	<div class="topNumberCenter">
          <p class="topTitle">左后</p>
      		<p class="numberInfo">12123efdfrrerrfrfrrr</p>
      	</div>
      	<div class="topNumberLeft">
          <p class="topTitle">左内</p>
      		<p class="numberInfo">12123efdfrrerrfrfrrr</p>
      	</div>
      	<div class="topNumberRight">
          <p class="topTitle">左外</p>
      		<p class="numberInfo">12123efdfrrerrfrfrrr</p>
      	</div>
      	<div class="orderInfo">
        	<div class="orderTitle">
            <div class="dot"></div>
        		订单信息
        	</div>
        	<div class="orderBody">
        		<div class="oneInfo">          			
        			<p><label>订单日期：</label><span class="underline">{{imgInfo.item.ordertime}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>订单单号：</label><span class="underline">{{imgInfo.item.ordernumber}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>平台名称：</label><span class="underline">{{imgInfo.item.platformname}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>品牌名称：</label><span class="underline">{{imgInfo.item.brandname}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>货品名称：</label><span class="underline">{{imgInfo.item.goodsname}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>货品号码：</label><span class="underline">{{shoesSize(imgInfo.item.goods[imgInfo.index].sizeTitle)}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>客户名称：</label><span class="underline">{{imgInfo.item.name}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>联系电话：</label><span class="underline">{{imgInfo.item.phonenumber}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>物流地址：</label><span>{{imgInfo.item.address}}</span></p>
        		</div>
          </div>
        </div>
        <div class="bottomLogo">
          <span class="logoTitle">后跟标信息</span>
          <span class="logo">爆款制造</span>
          <span class="logoSize">爆造后跟底帮15mmx33mm</span>
        </div>
        <div class="allDesign" :style="{transform: 'scale(' + shoesScale(imgInfo.item.goods[imgInfo.index].sizeTitle) + ')'}">
      		<div class="allDesignInner">
            <div class="topDesign">
            	<img class="bgImg" :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].cutfront">
            	<img class="lineImg" src="static/images/shoes/1-1.png">
            </div>
            <div class="centerDesign">
            	<img class="bgImg" :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].cutback">
            	<img class="lineImg" src="static/images/shoes/2-2.png">
            </div>
            <div class="bottomBox">
	            <div class="leftDesign">
	            	<img class="bgImg" :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].cutin">
	            	<img class="lineImg" src="static/images/shoes/3-3.png">
	            </div>
	            <div class="rightDesign">
	            	<img class="bgImg" :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].cutout">
	            	<img class="lineImg" src="static/images/shoes/4-4.png">
	            </div>
		        </div>
			    </div>
	      </div>
        <div class="bottomImgBox">
          <div class="thumbnailBox"> 
            <div class="left-front"><span>左前</span><img :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].screenfront"></div>
            <div class="right-front"><span>右前</span><img :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].screenfront"></div>
            <div class="backer"><span>后跟</span><img :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].screenback"></div>
            <div class="outer"><span>外侧</span><img :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].screenout"></div>
            <div class="inner"><span>内侧</span><img :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].screenin"></div>            
          </div>
        </div>
      </div>
      <div class="rightCloth" v-if="imgInfo.type != 'left'" :style="{width: setCanvas.width + 'px'}">
      	<div class="topNumberTop">
      		<p class="topTitle">右前</p>
      		<p class="numberInfo">12123efdfrrerrfrfrrr</p>
      	</div>
      	<div class="topNumberCenter">
          <p class="topTitle">右后</p>
      		<p class="numberInfo">12123efdfrrerrfrfrrr</p>
      	</div>
      	<div class="topNumberLeft">
          <p class="topTitle">右外</p>
      		<p class="numberInfo">12123efdfrrerrfrfrrr</p>
      	</div>
      	<div class="topNumberRight">
          <p class="topTitle">右内</p>
      		<p class="numberInfo">12123efdfrrerrfrfrrr</p>
      	</div>
      	<div class="orderInfo">
        	<div class="orderTitle">
            <div class="dot"></div>
        		订单信息
        	</div>
        	<div class="orderBody">
        		<div class="oneInfo">          			
        			<p><label>订单日期：</label><span class="underline">{{imgInfo.item.ordertime}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>订单单号：</label><span class="underline">{{imgInfo.item.ordernumber}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>平台名称：</label><span class="underline">{{imgInfo.item.platformname}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>品牌名称：</label><span class="underline">{{imgInfo.item.brandname}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>货品名称：</label><span class="underline">{{imgInfo.item.goodsname}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>货品号码：</label><span class="underline">{{shoesSize(imgInfo.item.goods[imgInfo.index].sizeTitle)}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>客户名称：</label><span class="underline">{{imgInfo.item.name}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>联系电话：</label><span class="underline">{{imgInfo.item.phonenumber}}</span></p>
        		</div>
        		<div class="oneInfo">	            			
        			<p><label>物流地址：</label><span>{{imgInfo.item.address}}</span></p>
        		</div>
          </div>
        </div>
        <div class="bottomLogo">
          <span class="logoTitle">后跟标信息</span>
          <span class="logo">爆造制造</span>
          <span class="logoSize">爆造后跟底帮15mmx33mm</span>
        </div>
      	<div class="allDesign" :style="{transform: 'scale(' + shoesScale(imgInfo.item.goods[imgInfo.index].sizeTitle) + ')'}">
      		<div class="allDesignInner">
            <div class="topDesign">
            	<img class="bgImg" :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].cutfront">
            	<img class="lineImg" src="static/images/shoes/1-1.png">
            </div>
            <div class="centerDesign">
            	<img class="bgImg" :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].cutback">
            	<img class="lineImg" src="static/images/shoes/2-2.png">
            </div>
            <div class="bottomBox">
	            <div class="leftDesign">
	            	<img class="bgImg" :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].cutin">
	            	<img class="lineImg" src="static/images/shoes/3-3.png">
	            </div>
	            <div class="rightDesign">
	            	<img class="bgImg" :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].cutout">
	            	<img class="lineImg" src="static/images/shoes/4-4.png">
	            </div>
		        </div>
			    </div>
	      </div>
        <div class="bottomImgBox">
          <div class="thumbnailBox"> 
            <div class="left-front"><span>左前</span><img :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].screenfront"></div>
            <div class="right-front"><span>右前</span><img :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].screenfront"></div>
            <div class="backer"><span>后跟</span><img :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].screenback"></div>
            <div class="outer"><span>外侧</span><img :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].screenout"></div>
            <div class="inner"><span>内侧</span><img :src="baseUrlShoes + imgInfo.item.goods[imgInfo.index].screenin"></div>            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
	export default {
    name: 'GeneratePicture',
    props:['createimg'],
    data() {
    	return {
    		baseUrlShoes: '/baseUrlShoes',
    		setCanvas: {
    			width: 2200
    		},
    		imgInfo: null,
    		load: false
    	}
    },
    watch: {
      createimg() {
      	this.imgInfo = this.createimg;

      	if(this.createimg && this.load){
      		this.$nextTick(function() {
		        this.createCanvas()
		      })
      	} 
      }
    },
    methods: {
      shoesScale(size) {
        switch(size) {
          case 44:
            return 1;
          case 43:
            return 0.9882;
          case 42:
            return 0.9685;
          case 41:
            return 0.9559; 
          case 40:
            return 0.9337;
          case 39:
            return 0.9244;
          case 38:
            return 0.8989;
          case 37:
            return 0.8920;
          case 36:
            return 0.8693;
          case 35:
            return 0.8561;
        }
      },
      shoesSize(size) {
        switch(size) {
          case 44:
            return '44# (USA10.5#)';
          case 43:
            return '43# (USA10.0#)';
          case 42:
            return '42# (USA9.0#)';
          case 41:
            return '41# (USA8.5#)'; 
          case 40:
            return '40# (USA7.5#)';
          case 39:
            return '39# (USA7.0#)';
          case 38:
            return '38# (USA6.0#)';
          case 37:
            return '37# (USA5.5#)';
          case 36:
            return '36# (USA4.5#)';
          case 35:
            return '35# (USA4.0#)';
        }
      },
      createCanvas() {
      	let _this = this;
      	this.$Spin.show({
		      render: (h) => {
		        return h('div', [
	            h('Icon', {
	              'class': 'demo-spin-icon-load',
	              props: {
	                type: 'load-c',
	                size: 30
	              }
	            }),
		          h('div', 'Loading')
		        ])
		      }
		    });
		    Promise.all([
          loadImg(_this.baseUrlShoes + _this.imgInfo.item.goods[_this.imgInfo.index].cutfront),
          loadImg(_this.baseUrlShoes + _this.imgInfo.item.goods[_this.imgInfo.index].cutback),
          loadImg(_this.baseUrlShoes + _this.imgInfo.item.goods[_this.imgInfo.index].cutin),
          loadImg(_this.baseUrlShoes + _this.imgInfo.item.goods[_this.imgInfo.index].cutout),
          loadImg(_this.baseUrlShoes + _this.imgInfo.item.goods[_this.imgInfo.index].screenfront),
          loadImg(_this.baseUrlShoes + _this.imgInfo.item.goods[_this.imgInfo.index].screenback),
          loadImg(_this.baseUrlShoes + _this.imgInfo.item.goods[_this.imgInfo.index].screenin),
          loadImg(_this.baseUrlShoes + _this.imgInfo.item.goods[_this.imgInfo.index].screenout)
		    ]).then(function(){
          html2canvas(document.querySelector("#cutbox"), {width: document.querySelector("#cutbox").clientWidth, height: document.querySelector("#cutbox").clientHeight,useCORS: true}).then(function(canvas){
	          canvas.toBlob(function(blob) {
	          	if(_this.imgInfo.type == 'left'){
	          		_this.imgInfo.item.goods[_this.imgInfo.index].leftshoe = blob;
	          	};

	          	if(_this.imgInfo.type == 'right'){
	          		_this.imgInfo.item.goods[_this.imgInfo.index].rightshoe = blob;
	          	}

	          	if(_this.imgInfo.type == 'all'){
	          		_this.imgInfo.item.goods[_this.imgInfo.index].allshoe = blob;
	          	}
	          	_this.$Spin.hide();
	          	_this.imgInfo = null;
		            /*download.addEventListener('click', function(){
		              saveAs(blob, "爆造.jpeg");
		            })
		            var formData = new FormData();
		            formData.append('thumb', blob);
		            $.ajax({
		              url: '',
		              type: "POST",
		              data: formData,
		              cache:false,
		              processData: false,  // 告诉jQuery不要去处理发送的数据
		              contentType: false ,  // 告诉jQuery不要去设置Content-Type请求头
		              success: function(msg){
		                if(msg.code=='200'){
		                }else {

		                }
		              },
		              error: function(e){
		                console.log(e);
		              }
		            });*/
		        },'image/jpeg');
			    })	      
		    })
	    }
    },
    mounted() {
    	this.load = true;
    }
	}
function loadImg(url) {
  return new Promise (function(resolve, reject) {
  	let img = new Image();
  	img.src = url;
  	img.onload = function(img){
      resolve();
  	}
  	img.onerror = function(){
      reject();
  	}
  })
}
</script>
<style scoped>
  .topDesign,.centerDesign{
   	position: relative;
  }
  .leftDesign,.rightDesign{
   	position: absolute;
  }

  #cutbox img{
   	display: block;
  }

  .lineImg{
   	position: absolute;
   	left: 0;
   	top: 0;
  }

  .leftCloth,.rightCloth{
   	position: relative;
   	float: left;
   	box-sizing: border-box;
   	overflow: hidden;
   	padding: 100px;
  }

  .allDesign{
   	width: 100%;
   	position: relative;
  }

  .allDesignInner{
   	width: 100%;
   	position: relative;
  }

  .leftCloth .allDesign .allDesignInner{
    -webkit-transform: rotateY(180deg);
   	-moz-transform: rotateY(180deg);
   	-ms-transform: rotateY(180deg);
   	-o-transform: rotateY(180deg);
   	transform: rotateY(180deg);
  }

  .img-out{
   z-index: -1;
   position: fixed;
   left: 0;
   top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .img-inner{
    width: 100%;
    height: 100%;
    overflow: scroll;
    opacity: 0;
  }

  #cutbox{
   	overflow: hidden;
  }

  .topNumberTop,.topNumberCenter,.topNumberLeft,.topNumberRight{
   	z-index: 100;
   	padding: 5px;
   	border-radius: 4px;
   	position: absolute;
   	text-align: center;
   	background-color: #fff;
   	color: #ff0000;
  }

  .topTitle{
   	font-weight: bold;
  }

  .topDesign,.centerDesign{
    -webkit-transform: rotateZ(180deg);
    -moz-transform: rotateZ(180deg);
    -ms-transform: rotateZ(180deg);
    -o-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
    position: relative;
    margin: 0 auto;
  }

  .centerDesign{
    margin-top: -1500px;
  }
   
  .topNumberTop,.topNumberCenter{
    left: 50%;
    -webkit-transform: translate(-50%,0);
    -moz-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    -o-transform: translate(-50%,0);
    transform: translate(-50%,0);
  }

  .topNumberTop{
   	top: 3%;
  }

  .topNumberCenter{
    top: 42%;
  }

  .bottomBox{
   	position: relative;
   	width: 100%;
    margin-top: -1600px;
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  .bottomBox:after{
    display: block;
    content: '';
    clear: both;
  }

  .leftDesign{
   	position: relative;
   	float: left;
    margin-left: -500px;
    -webkit-transform: rotateZ(90deg) rotateX(180deg);
    -moz-transform: rotateZ(90deg) rotateX(180deg);
    -ms-transform: rotateZ(90deg) rotateX(180deg);
    -o-transform: rotateZ(90deg) rotateX(180deg);
    transform: rotateZ(90deg) rotateX(180deg);
  }

  .rightDesign{
    position: absolute;
    right: -500px;
    top: 0;
    -webkit-transform: rotateZ(-90deg) rotateX(180deg);
    -moz-transform: rotateZ(-90deg) rotateX(180deg);
    -ms-transform: rotateZ(-90deg) rotateX(180deg);
    -o-transform: rotateZ(-90deg) rotateX(180deg);
    transform: rotateZ(-90deg) rotateX(180deg);
  }

  .topNumberLeft{
    left: 32%;
    top: 68%;
    -webkit-transform: rotateZ(90deg);
    -moz-transform: rotateZ(90deg);
    -ms-transform: rotateZ(90deg);
    -o-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }

  .topNumberRight{
    right: 32%;
    top: 68%;
    -webkit-transform: rotateZ(-90deg);
    -moz-transform: rotateZ(-90deg);
    -ms-transform: rotateZ(-90deg);
    -o-transform:rotateZ(-90deg);
    transform: rotateZ(-90deg);
  }

  .orderInfo{
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

  .bottomLogo{
    position: absolute;
    left: 50%;
    top: 75%;
    width: 198px;
    text-align: center;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }

  .logoTitle{
    padding: 5px 0;
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
  }

  .logo{
    background-color: #fff;
    border: 2px solid #666;
    height: 90px;
    letter-spacing: 5px;
    line-height: 88px;
    font-size: 38px;
    font-weight: bold;
    display: inline-block;
    width: 100%;
  }

  .logoSize{
    display: inline-block;
    padding-top: 5px;
    font-size: 14px;
    letter-spacing: 1px;
  }

  .bottomImgBox{
    position: relative;   
    width: 100%;
    margin-top: 100px;
  }

  .bottomImgBox>.thumbnailBox{
    position: relative;
    width: 1504px;
    margin: 0 auto;
    border:2px solid #666;
    overflow: hidden;
  }

  .bottomImgBox>.thumbnailBox:after{
    position: absolute;
    z-index: 999999;
    right: 15px;
    top: 15px;
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid #000;
    border-radius: 50%;
  }

  .bottomImgBox>.thumbnailBox>div{
    float: left;
    width: 300px;
    position: relative;
    border:2px solid #666;
  }

  .bottomImgBox>.thumbnailBox>div>img{
    width: 100%;
  }

  .bottomImgBox>.thumbnailBox>div>span{
    position: absolute;
    font-size: 22px;
    top: 10px;
    left: 10px;
    z-index: 999;
  }

  .bottomImgBox>.thumbnailBox>.left-front>img{
    -webkit-transform: rotateX(180deg) rotateZ(90deg);
    -moz-transform: rotateX(180deg) rotateZ(90deg);
    -ms-transform: rotateX(180deg) rotateZ(90deg);
    -o-transform: rotateX(180deg) rotateZ(90deg);
    transform: rotateX(180deg) rotateZ(90deg);
  }

  .bottomImgBox>.thumbnailBox>.right-front>img{
    -webkit-transform: rotateZ(90deg);
    -moz-transform: rotateZ(90deg);
    -ms-transform: rotateZ(90deg);
    -o-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }

  .orderInfo p{
    font-size: 18px;
   	margin-top: 5px;
   	line-height: 24px;
  }

  .oneInfo{
   	width: 296px;
  }

  .orderInfo p span.underline{
   	width: calc(100% - 90px);
   	position: relative;
   	display: inline-block;
  }

  .orderTitle{
   	position: relative;
   	text-align: center;
   	padding: 10px 0;
   	font-size: 22px;
   	font-weight: bold;
  }

  .orderTitle:after, .orderInfo p span.underline:after{
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #999;
  }

  .orderTitle .dot{
   	position: absolute;
   	content: '';
    left: 10px;
    top: 50%;
    border: 2px solid #e60012;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 99999;
    -webkit-transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }

  .orderBody{
    font-size: 16px;
   	padding: 10px;
  }
</style>