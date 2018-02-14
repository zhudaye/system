<template>
	<div class="mytotal hy">
		<div class="details-name">
			<span>{{this.nickname}}</span>&nbsp;&nbsp;的全部宝贝 
		</div>
		<div class="details-check">
			<ul >
				<li   @click="checkall"  :class="{checkactive:cka}">全部宝贝</li>
				<li v-for="(check,index) in cate"  @click="dCheck(check)" :class="{checkactive:activeName == check}">{{ check.title}}</li>

				<li  class='management'   @click='managementC'>{{management}}</li>
				<li class='management lens' @click="clear" :style='{display:md}'>取消</li>
				<li class='management lens' @click="all" :style='{display:md}'>全选</li>
			</ul>
		</div>
		<!-- <ul class='d-content' v-if="dcs"> -->
		<ul class='d-content'>
			<template   v-for='(dc,index) in dcs'  > 
			<li class="a"  :key="index" :id="dc.productid" :data-category="dc.category">
				<div class='dImg'>
					<img class='img1' v-if="dc.productthumb != null " v-bind:src="imgs+dc.productthumb" alt="">
					<img class='img1' v-if="dc.productthumb == null " src="" alt="">
					<!-- 拼合图片时用到 -->
					<!-- <img class="img2" :src="'static/images/ceshi/'+dc.Img2+'.png'" alt="">  -->   
				
					<span  :style="{display: management == '管理宝贝' ? 'none' : 'inline' , color: dc.isIn ? '#ed3f14' : '#bbbec4'}"  @click='fonC(dc)' class='fon  iconfont  icon-select_full' ></span>
				</div>
				<img class='img3' v-if=' dc.template === 0 ' src="static/images/ceshi/logo.png" alt="">
				<img class='img3' v-if=' dc.template === 1 ' src="static/images/ceshi/h_u2.png" alt="">
				<div class='zp'>
					
					<span class='dmc' v-if='dc.title != null'>作品名称：{{dc.title}}</span>
					<span class='dmc' v-if='dc.title == null'>作品名称：未命名</span>
					<span class='dsj'>创建时间：<i>{{dc.inputtime | timeToSecond }}</i></span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

					<!-- 可修改 -->
					<!-- 此处缺失键值对（template）,否则未0 -->
					<template v-if="dc.template!==1">   
						<div :id="dc.productid"  data-id="key" class='sells' v-if='dc.is_sell === 0' @click='ljSell(dc)'>立即出售</div>
						<div :id="dc.productid"  data-id="key" class='sells' v-if='dc.is_sell === 1' @click='xgSell(dc)'>立即下架</div>
					</template>	
					<!-- 不可修改 -->
					<template v-if="dc.template===1">
						<div class='sells'>不可修改</div>
					</template>	
				
					
					
				</div>
				
			</li>
			</template>
		</ul>
		
		<div  class="dbBtn" >
			<!-- <div class="dReturn" @click='dReturn'>返回上一页 </div> -->
			<Button class="dReturn" type="primary" @click="dReturn" style="position:absolute">返回上一页</Button>
			<Page class="dbBtn-in" :total=" this.totalNum " size="small" placement="top"  @on-change='pageCur' @on-page-size-change='pageSize'  show-elevator show-sizer ></Page>
			
		</div>
		
		<div class="forms" v-if="show">
			<form :id="this.fid">
				
				<div class="f-top" >
					<span>{{cs}}</span>
					&nbsp;
					<b>(统一定价)</b>
					<!-- 删除× -->
					<div class='del' @click="xiangxiang">
						<Icon   type="close-round" ></Icon>
					</div>
				</div>
				<div class="f-middle">
					<div class="f-middle-left">
						<div class="f-left-content">
							<div class="dImg f-dImg">
								<img class="img1" src="static/images/ceshi/aa.png" alt="">
								<img class="img2" src="static/images/ceshi/qqc.png" alt="">
							</div>
						</div>
							
						
						<p><b>￥</b>{{pricea}}</p>
					</div>
					<div class="f-middle-right">
						<ul class="f-mr-ul">
							<li><span><b>*</b>名称：</span></li>
							<li>
								<Input v-model="zname" placeholder="请输入作品名称" ></Input>
							</li>
						</ul>					
						
						<ul  class="f-mr-ul">
							<li><span><b>*</b>分类：</span></li>
							<li>
								<Select v-model="modelf" placeholder="爱好职业">
									<Option v-for="item in inte"  :value="item.producttype"  :key="item.value">{{ item.title }}</Option>
								</Select>
							</li>
						</ul>
						<template v-if="this.checkstyle<3">   
							<ul v-show="ifcaizhi" class="f-mr-ul">
								<li><span><b>*</b>材质：</span></li>
								<li>
									<Select v-model="modelc" @on-change="caizhic" >
										<Option v-for="item in tanmscmat.material" :value="item.material"  :key="item.material">{{ item.materialtitle }}</Option>
									</Select>
								</li>
							</ul>			
							<ul v-show="ifsex" class="f-mr-ul" >
								<li><span><b>*</b>性别：</span></li>
								<li >
									<CheckboxGroup  v-model="sex" >
										<Checkbox   v-show=" sexs.indexOf(1) !== -1 " label="man">
											<Icon class="iconfont icon-57"></Icon>
											<!-- <Icon  color="#5cadff" type="man"></Icon> -->
											<span>男款</span>
										</Checkbox>
									
										<Checkbox v-show="sexs.indexOf(2) !== -1" label="women">
											<Icon class="iconfont icon-87"></Icon>
											<!-- <Icon color="#5cadff" type="woman"></Icon> -->
											<span>女款</span>
										</Checkbox>
										<Checkbox  v-show="sexs.indexOf(3) !== -1 " label="child">
											<Icon class="iconfont icon-ertong"></Icon>
											<!-- <Icon size="16" color="#5cadff" type="social-snapchat"></Icon>-->		
											<span>童装</span>
										</Checkbox>
																			
								</CheckboxGroup>
							
							</li>
							</ul>					
							<ul v-show="ifman"  class="f-mr-ul">
								<li><span><b>*</b>男款：</span></li>
								<li>
									<div class="color" >									
										<b  @click="colorClicka(1)"  v-show=" colora.indexOf(1) !== -1 " class="color1"  style="background-color: #fff;border:2px solid Lavender">
											<i style="background-color: #fff;"></i>
										</b>
									</div>
								</li>
							</ul>					
							<ul v-show="ifwomen" class="f-mr-ul">
								<li><span><b>*</b>女款：</span></li>
								<li>
									<div class="color">
										<b class="color1" @click="colorClickb(1)"  v-show=" colorb.indexOf(1) !== -1 "  style="background-color: #fff;border:2px solid Lavender">
											<i style="background-color: #fff;"></i>
										</b>

										<b class="color2" @click="colorClickb(2)"  v-show=" colorb.indexOf(2) !== -1 " style="background-color: #000;border:2px solid #000">
											<i  style="background-color: #000"></i>
										</b> 
										<b class="color2" @click="colorClickb(3)"  v-show=" colorb.indexOf(3) !== -1 " style="background-color: #2b3a6d;border:2px solid #2b3a6d">
											<i  style="background-color: #2b3a6d"></i>
										</b> 
										<b class="color2 reds" @click="colorClickb(4)" v-show=" colorb.indexOf(4) !== -1 "  style="background-color: #ff0000;border:2px solid #ff0000">
											<i  style="background-color: #ff0000"></i>
										</b> 
										<b class="color2" @click="colorClickb(5)"  v-show=" colorb.indexOf(5) !== -1 " style="background-color: #eee;border:2px solid #eee">
											<i  style="background-color: #eee"></i>
										</b> 
									</div>
								</li>
							</ul>
							<template v-show="sexs.indexOf(3) !== -1">
								<ul v-show="ifchild"  class="f-mr-ul">
									<li><span><b>*</b>童装：</span></li>
									<li>
										<div class="color">
											<b class="color1" @click="colorClickc(1)"  v-show=" colorc.indexOf(1) !== -1 "  style="background-color: #fff;border:2px solid Lavender">
												<i style="background-color: #fff;"></i>
											</b>

											<b class="color2" @click="colorClickc(2)"  v-show=" colorc.indexOf(2) !== -1 " style="background-color: #000;border:2px solid #000">
												<i  style="background-color: #000"></i>
											</b> 
											<b class="color2" @click="colorClickc(3)"  v-show=" colorc.indexOf(3) !== -1 " style="background-color: #2b3a6d;border:2px solid #2b3a6d">
												<i  style="background-color: #2b3a6d"></i>
											</b> 
											<b class="color2 reds" @click="colorClickc(4)"  v-show=" colorc.indexOf(4) !== -1 " style="background-color: #ff0000;border:2px solid #ff0000">
												<i  style="background-color: #ff0000"></i>
											</b> 
											<b class="color2" @click="colorClickc(5)"  v-show=" colorc.indexOf(5) !== -1 " style="background-color: #eee;border:2px solid #eee">
												<i  style="background-color: #eee"></i>
											</b> 
										</div>
									</li>
								</ul>	
							</template>
						</template>	
						 				
						<ul v-show="ifprice" class="f-mr-ul">
							<li><span><b>*</b>定价：</span></li>
							<li class="price">
								<div>
									<span class="price-a">
										<!-- <Input-number :min="50" :max="999" :value="50" size="small"></Input-number> -->
										{{pricea}}
										<b>(原价)</b>
									</span>
									<span class="price-b">
										<Input-number v-model="priceb" :min="0" :max="999" :value="priceb" size="small"></Input-number>
										<b>(售价)</b>
									</span>
									<span class="price-c">
										<!-- <Input-number :min="50" :max="999" :value="50" size="small"></Input-number> -->
										{{pricec}}
										<b>(利润)</b>
									</span>
								</div>
							</li>
						</ul>	
												
								
						<ul class="f-mr-ul miao">
							<li><span>描述：</span></li>
							<li>
								<div>
									<i-input v-model="textarea" :maxlength="10" type="textarea" :rows="4" placeholder="88字以内（写下你的设计初衷，让它变成有故事的‘单品名’）"></i-input>
								</div>
							</li>
						</ul>					
						
						<div class="ty">
							<Checkbox v-model="tya">
								<span class="ty-w">我已阅读并同意</span>
			
							</Checkbox>
							<b @click="xy">《爆造宝贝出售协议》</b>
						</div>					
					</div>
				</div>
				<div class="f-bottom">
					<Button @click="chushou" type="primary" size="large">立即出售</Button>
					<Button @click="xiangxiang" type="primary" size="large">再想想</Button>
				</div>
			</form>
			<div class="shadow"></div>
		</div>
		<!-- 下架提示 -->
		<Modal class="myalert" width='240'   :id="altid"
		v-model="xiajia"
		@on-ok="ok"
		@on-cancel="cancel">
			<p>你确定下架该作品吗？</p>
			
		</Modal>

	</div>   
</template>


<script scoped>
export default{
	name: 'mytotal',

	data() {
		return {
			memberid: 3,     //用户id，接取上页缓存
			usertype: 2,	 //用户分组，接取上页缓存
			nickname:'上页缓存',	  //用户昵称，接取上页缓存

			loading: true,
		
			imgs:'http://192.168.2.239/apipic.boomake.com/',   //网上图片前缀
			name: 'ForbidIP',
			Total:'',
			cate:[],    //分类的内容
			cka: true,
			activeName:'',
			cateName: '0',

			md:'none',
			management:'管理宝贝',
			// mcolor: 'background-color:#2d8cf0',
			fon:'none',
			dcs:[],
			dcs2:'',
			isIn:null,
			pageC: '1',
			pageS: '10',
			totalNum:0,
			
			

			show:false,
			fid:'',

			ifcaizhi:false,
			ifsex:false,
			ifcolor:false,
			ifprice:false,
			
			// 选性别，出颜色
			ifman:false,
			ifwomen:false,
			ifchild:false,



			// 修改出售
			cs:'',
			
			colors:[
				{color:1},
				{color:2},
				{color:3},
				{color:4},
				{color:5},
			],
			// 男款颜色
			colora:[],
			colorNuma:[],
			// 女款颜色
			colorb:[],
			colorNumb:[],
			// 儿童颜色
			colorc:[],
			colorNumc:[],

			gongying:'',
			shoujia:'',
			lirun:'',

			textarea:'',

			

			
		
		// 弹窗的材质、颜色、内容
			// 接取数据
			tanmsc:[],
			tanmscmat:[],
			tanmscsex:[],
			// 选中项目的样式
			checkstyle: 0,
			checkmat: 0,
			checksex: 0,


			zname:'',
            modelc: '',
           
			modelf: '',

			// 复选框
			sex: [],
			sexs:[],
			// 价格
			pricea: 189,
			priceb: 0,
			pricec: 189,
			// 协议中圆圈
			tya: true,
			

			dd:[],

			// 下架
			xiajia:false,
			altid:'',


			tanmm:'',
			
        }
			
				
		
	},
	watch:{
		// 选中材质后出现性别选择
		modelc(now,old){			
			this.tanmscbtn();
		},
		// 选中性别出现颜色
		sex(now,old){
			this.tanmscbtn();
			if( now.indexOf('man') !== -1 ){
				this.ifman = true;
			}else{
				this.ifman = false;
			};
			if( now.indexOf('women') !==-1 ){
				this.ifwomen = true;
			}else{
				this.ifwomen = false;
			};
			if( now.indexOf('child') !==-1 ){
				this.ifchild = true;
			}else{
				this.ifchild = false;
			};
			// console.log(this.sex)
		},
		// 价格
		priceb(now,old){
			this.pricec = this.pricea + now;

		},
	},
	methods:{
		caizhic: function(){
				this.ifsex=true;
				// 只有棉有红色
				if(this.modelc!=='棉'){
				$(".reds").css("display","none ");
				}else{
					$(".reds").css("display","block ");
				}
				
			
		},
		checkall: function(){                       //选择全部宝贝
			this.cka = true;
			this.activeName = false;

			this.cateName = '';
			this.chuan();
		},
		dCheck: function(check){                     //选择某类宝贝
			this.activeName = check;
			this.cka = false;

			this.cateName = check.category;
			// console.log(check.category)

			this.chuan();
		},
	
		pageCur(numC){
			this.pageC=numC;
			// console.log('page'+this.pageC);
			
			this.topage();	
		},
		pageSize(numS){
			this.pageS=numS;
			// console.log(this.pageS);
			this.topage();	
		},
		dReturn(){
			this.$router.push('/layout/user/management/details');
		},
		managementC(e){
			if( this.management == '管理宝贝' ){
				this.management = '确定删除';
				this.md = 'block';
			}else{
				this.management='管理宝贝';	
				this.md = 'none';
				this.delet = this.dcs.filter(function(ele) {
					return ele.isIn
				});
				let idList = this.delet.map((ele) => {
					return ele.id
				});
				// console.log(idList)
				this.dcs = this.dcs.filter((ele) => {
					return !ele.isIn
				});
			}
		},
		fonC(item){
			item.isIn = !item.isIn;
			this.dcs = [].concat(this.dcs);  //更新this.dcs
			
		},
		all(){
			for(let v of this.dcs){
				v.isIn = true;
				this.dcs = [].concat(this.dcs);  //更新this.dcs;
			}
		},
		clear(){
			for(let v of this.dcs){
				v.isIn = false;
				this.dcs = [].concat(this.dcs);  //更新this.dcs;
			}
		},
		ljSell(item){
			this.cs = "宝贝出售";
			this.zname = item.title;

			this.modelc='';
			
			// 点击弹出分类
			
			this.checkstyle = item.category - 1; //category 是编号，checkstyle是下标
			this.tanmscmat = this.tanmsc[this.checkstyle];
			
			
			
			

			this.fid = item.productid;
			// alert(item.title)
			if(item.category != 4 ){      //立即出售非帆布鞋
					this.ifcaizhi=true;
					this.ifprice=true;  				                 
					
				
			}else{							//立即出售帆布鞋
				this.ifprice=true;
			}
			this.show = true;

		
			// this.category = this.
		},
		xgSell(item){
			this.altid = event.target.id;
			this.xiajia=true
			
		},
		ok(){
			var xd = this.altid;
			alert(xd)
			// $("body").find("#"+xd).remove();
			// 向后台传入xd,使由立即下架状态其变为立即出售状态
		},
		cancel(){

		},

		xy(){

		},
		xiangxiang(){
			
			this.show = false;
			
			
		},
		chushou(){
			// alert(this.modelc)
			// console.log(this.tya)
			if( this.tya == true){
				this.$Message.success('嚯嚯，如你所愿！');
				this.show = false;
			}else{
				this.$Message.config({
					top: 0,
					duration: 3,
					
				});
				this.$Message.warning('请先同意出售协议哦！');
				
			};
			// 不为棉时去除红色
			if(this.modelc !== "棉"){
				this.colorNuma=this.colorNuma.filter(function(cet){
					return (cet === 1);
				});
			}
			// console.log('非棉颜色'+this.colorNuma)
			
			console.log(this.checkmat)
		},

		// 选择颜色 男
		colorClicka(event){
			if(this.colorNuma.indexOf(event) === -1){
				
				this.colorNuma.push(event);
				
			}else{
				
				this.colorNuma=this.colorNuma.filter(function(cet){
					return (cet !== event);
				});
				
			}
			
			// console.log("男："+"["+this.colorNuma.sort()+"]");
			
			
		},
		// 选择颜色 女
		colorClickb(event){
			if(this.colorNumb.indexOf(event) === -1){
				
				this.colorNumb.push(event);
				
			}else{
				
				this.colorNumb=this.colorNumb.filter(function(cet){
					return (cet !== event);
				});
				
			}
			
			// console.log("女："+"["+this.colorNumb.sort()+"]");
		},
		// 选择颜色 儿童
		colorClickc(event){
			if(this.colorNumc.indexOf(event) === -1){
				
				this.colorNumc.push(event);
				
			}else{
				
				this.colorNumc=this.colorNumc.filter(function(cet){
					return (cet !== event);
				});
				
			}
			
			console.log("儿童："+"["+this.colorNumc.sort()+"]");
		},

		// 翻页
		topage(){
		 
			this.chuan();
	
			for(let v of this.dcs){
				v.isIn = true;
				this.dcs = [].concat(this.dcs);  //更新this.dcs;
			}
		},
		chuan(){
			var _this=this;
				
	        //  页面跳转，每页数目,用户情况
			
			this.$http.get('http://192.168.2.239/bzadmin/public/index.php/productList.html?memberid='+this.memberid+'&&page='+this.pageC+'&&pagesize='+this.pageS+'&&category='+this.cateName).then(function(res){
				_this.dcs = res.data.data;
				// console.log(_this.dcs);	
				_this.totalNum = res.data.total;		
								
			},function(res){

			});
		},
		tocategory(){													// 衣鞋分类
			var _this = this;
			this.$http.post('http://192.168.2.239/bzadmin/public/index.php/categoryTitle.html' ).then(function(res){
				_this.cate = res.data.data;		
			},function(res){

			});
		},
		interest(){														//弹窗爱好分类
			var _this = this;
			this.$http.post('http://192.168.2.239/bzadmin/public/index.php/productType.html' ).then(function(res){
				// _this.inte = res.data.data;		
				_this.inte = res.data.data;	
				// console.dir(_this.inte)	
			},function(res){

			});
		},
		// 材质，颜色，性别
		tanmscbtn(){
			
			this.checkmat = this.modelc-21;	
			this.sexs = this.sexs;	
			// 性别的长度			
			this.tanmm = this.tanmscmat.material[this.checkmat].sex.length;
			console.log( this.tanmm )
			//接取 性别
			this.sexs=[];
			for(var i=0;i<this.tanmm;i++){
				this.sexs.push(this.tanmscmat.material[this.checkmat].sex[i].sex)
			}
		
			// console.log(this.colora);
		},
	},
	mounted(){
		var _this = this;

	
			
		this.topage();      //表框显示
		this.tocategory();	//衣鞋分类
		this.interest();    //弹出窗分类


		//材质,性别,颜色
		this.$http.post('http://192.168.2.239/m/public/index.php/clothStock.html' ).then(function(res){
			_this.tanmsc = res.data.data;		
			
		},function(res){

		});

		
		// 材质不为空则性别选择显示
		if(this.modelc===''){
			this.ifsex=false;
		}else{
			
			// 显示
			this.ifsex=true;
		}
		//初始显示颜色
		if( this.sex.indexOf('man') !== -1 ){
			this.ifman = true;
		}else{
			this.ifman = false;
		};
		if( this.sex.indexOf('women') !==-1 ){
			this.ifwomen = true;
		}else{
			this.ifwomen = false;
		};
		if( this.sex.indexOf('child') !==-1 ){
			this.ifchild = true;
		}else{
			this.ifchild = false;
		};
		// 创建性别数组
		var tanmm = this.tanmm;
		
		
		
		
		

		// 点击弹窗中颜色选项（白色的处理和其他色不同，所以有两个）
        $('body').on('click', '.color2', function(){
			if($(this).hasClass('activeCol')){
				$(this).removeClass('activeCol');
			}else{
                $(this).addClass('activeCol');
			}
		});
       $('body').on('click', '.color1',function(){
			if($(this).children().hasClass('activeCol2')){
				$(this).children().removeClass('activeCol2');
				
			}else{
				$(this).children().addClass('activeCol2');
			
			}
		});
		

		// 获取种类
		// this.category 
		
       
	
		for(let v of this.dcs){
			v.isIn = false
		}

	
		
	
	},
	created(){
		 
 
	}

}
 

</script>
<style>


    
	/* 宝贝分类 */

	.management{
		float: right !important;
		/* background: #fafafc; */
	}
	.d-content{
		margin-top: 20px;
		width: 101.5%;
		display: table;
		background: #fffffe;
		padding: 20px;
		padding-bottom: 5px;
	}
	.d-content>li{
		position: relative;
		float: left;
		width: 18.5%;
		height: 29%;
		margin-right: 1.5%;
		margin-bottom: 20px;
		background: white;
		border: 1px solid #dfe0e1;
		box-shadow: 0 0 4px 0  rgba(0,0,0,.1)

	}
	.dImg{
		position: relative;
		padding-bottom: 100%;
		min-width: 40px;
		margin: 20px auto;
	}
	.img1{
		position: absolute;
		left: 0;
		right: 0;
		height: 100%;
		margin:0 auto;
		
	}
	.img2{
		position: absolute;
		top: 20%;
		left: 0;
		right: 0;
		width: 40%;
		margin: 0 auto;
	}
	.d-content  .img3{
		position: absolute;
		top: 0;
		left: -5px;
		width: 35%;
		/* height: 15%; */
		background: #b83435;
		box-shadow: 2px 2px  2px #80848f ;
	}
	.d-content .dImg  .fon{
		font-size: 25px;
		position: absolute;
		top: -17px;
		right: 10px;

	}

	
	.zp{
		position: relative;
		width: 100%;
		border-top: 1px solid #dfe0e1;
		padding: 10px;
	}
	.zp span{
		display: block;
		width: calc(100% - 40px);
		height: 25px;
		line-height: 25px;
		font-weight: 900;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		
	}
	.zp span i{
		
		font-weight: 400;
		font-style: normal;
	}
	.zp .sells{
		
		position: absolute;
		width: 40px;
		height: 40px;
		letter-spacing: 2px;
		top: 0;
		bottom:0;
		right: 10px;
		margin: auto 0;
		border-radius: 5px;
		background: #5cadff;
		color:white;
		text-align: center;
		cursor: pointer;
		padding: 5px;
		line-height: 15px;
	}

	
	/* 弹出窗 */
	.forms{}
	.forms .shadow{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #000;
		opacity: 0.6;
		z-index: 999990;
	}
	.forms form{
		width: 740px;
		height: auto;
		min-height: 300px;
		position: fixed;
		top: 50%;
		left: 0;
		right: 0;
		margin:auto;
		padding: 20px;
		background: white;
		display: inline-block;
		/* margin-top: -387.5px; */
		transform: translateY(-50%);
		border-radius: 8px;
		z-index: 999991;
	}
	/* 头部 */
	form .f-top{
		position:relative;
		width: 100%;
		height: 30px;
		line-height: 26px;
		
	}
	form .f-top span{
		font-size: 20px;
		font-weight: 900;
	}
	form .f-top b{
		font-size: 12px;
		font-weight: 900;
	}
	form .f-top .del{
		position:absolute;
		cursor: pointer;
		right:0;
		top:0;
		width: 16px;
		height: 16px;
		color:#686868;
		font-weight:900;
		font-size:16px;
		transition: ease 1.5s;
	}
	form .f-top .del i{
		position:absolute;
		right:0;
		top:0;
		color:#686868;
		font-weight:900;
		font-size:16px;
		transition: ease 1.5s;
	}
	form .f-top .del i:hover{
		transform: rotate(360deg);
	}
	/* 中间 */
	form .f-middle{
		width: 100%;
		height:auto;
		display: table;
	}
	/* 左边 */
	form .f-middle .f-middle-left{
		position: relative;
		float: left;
		width: 220px;
	}
	form .f-middle .f-middle-left .f-left-content{
		position: relative;
		background: white;
		border: 1px solid #dfe0e1;
		box-shadow: 0 0 4px 0  rgba(0,0,0,.1);
		margin-bottom: 20px;
	}
	
	form .f-middle .f-middle-left p{
		bottom: 0;
		width: 100%;
		text-align: center;
		font-size: 20px;
		font-weight: 700;
		color: #b83435
	}
	/* 右边 */
	form .f-middle .f-middle-right{
		float: left;
		width: calc(100% - 220px);
		min-height: 10px;
	}

	form .f-mr-ul{
		width: 100%;
		min-height: 10px;
		/* margin-bottom: 20px; */
		display: table;
	}
	form  .f-mr-ul li{
		float: left;
	}
	form .f-mr-ul li:first-child{
		width: 20%;
	}
	form .f-mr-ul li:first-child span{
		display: inline-block;
		float: right;
		line-height: 30px;
	}
	form .f-mr-ul li:first-child span b{
		display: inline-block;
		vertical-align: middle;
		color: #b83435;
		width: 12px;
	}
	form .f-mr-ul li:last-child{
		width: 80%;
		margin-bottom: 15px;
		
	}
	form .f-mr-ul li:last-child>*{
		width: 100%;
		height: 30px;
		line-height: 30px;
	}


	/* 性别选择图片 */
	.iconfont{
		color:#5cadff;
	}
/* 颜色 */
/* 颜色选择 */
	.hy .activeCol{
		background: white !important;
	}
	.hy .activeCol2{
		border:2px solid Lavender;
	}
	 /* 颜色 */
	form .f-mr-ul  .color b {
		display: block;
		float: left;
		padding: 3px;
		border-radius: 50%;
		cursor:pointer;
		margin: 5px 0;
		margin-right: 10px;
	}
	form .f-mr-ul  .color b i{	
		display: block;
		width: 14px;
		height: 14px;
		border-radius: 50%;		
	}
	
	/* 售价 */
	form .price span{
		display: inline-block;
		width: 32%;
		vertical-align: top;
	}
	form .price b{
		font-size: 12px !important;
		font-weight: 400;
		color: #b83435;
		
	}
	form .price .price-a{
		text-align: left;
	}
	form .price .price-b{
		text-align: center;
	}
	form .price .price-c{
		text-align: right;
	}
	form .price  span .ivu-input-number-small{	
		width: 55px;
		
	}
	/* 描述 */
	form .miao{
		height: auto;
	}
	form .miao li:last-child{
		height: auto;
	}
	form .miao div{
		height: auto  !important;
	}
	form .miao div textarea{
		resize: none;
		width: 100%;
		
	}


	/* 同意协议 */
	form .ty{
		padding-left: 20%;
		margin: 30px 0;
		font-weight: 400;
	}
	form .ty b{
		font-weight: 400;
		color: #AEB8FC;
	}
	form .ty   .ty-w{
		margin-left: 5px;
		margin-right: 0;
	} 
	form .ty  .ivu-checkbox .ivu-checkbox-inner {
		border-radius: 50%;
		overflow: hidden;
	}
	


	/* 底部 */
	form .f-bottom{
		width: 100%;
		height: auto;	
	}
	form .f-bottom>*{
		float: right;
		width: 98px;
		margin-left: 20px;	
	}

	/* 全局弹出提示 */
	/* 最外层 */
	.ivu-message{
		z-index: 999996;
		height: 50px;
	}
	/* 文字 */
	.ivu-message .ivu-message-notice-content{
		font-size: 18px;
		padding: 12px 28px;
		color: white;
		font-weight: 400;
		background: #000;
	}
	/* 图片 */
	.ivu-message .ivu-icon{
		font-size: 22px;
	}
	/*弹窗分类下拉框 */
	.forms ul.ivu-select-dropdown-list li.ivu-select-item{
		float: left;
		clear:none;
		border: 1px solid #dddee1;
		margin-left: 15px;
		margin-top: 15px;
		
	}
	ul.ivu-select-dropdown-list li.ivu-select-item:first-child{
		width: auto;
	}
	ul.ivu-select-dropdown-list li.ivu-select-item:last-child{
		width: auto;
		margin-bottom: 15px;
	}
	
</style>
