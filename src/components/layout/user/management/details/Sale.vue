<template>
	<div class="sale hy">
		<div class="details-name">
			<span>{{name}}</span>&nbsp;&nbsp;正在售卖的作品
		</div>
		<div class="details-check">
			<ul >
				<li   @click="checkall"  :class="{checkactive:cka}">全部宝贝</li>
				<li v-for="(check,index) in cate"  @click="dCheck(check)" :class="{checkactive:activeName == check}">{{ check.title}}</li>
			</ul>
		</div>
		<ul class='d-content' v-if="dcs">
			<li  :id="dc.id"   v-for='(dc,index) in dcs' v-if=' index<nnum&&index>=pnum ' :key="index" >
				<div class='dImg'>
					<img class='img1' :src="'static/images/ceshi/'+dc.Img1+'.png'" alt="">
					<img class="img2" :src="'static/images/ceshi/'+dc.Img2+'.png'" alt="">
				</div>
				<img class='img3'   src="static/images/ceshi/logo.png" alt="">
				
				<div class='zp'>
					<span class='dmc'>作品名称：{{dc.dmc}}</span>
					<span class='dsj'>创建时间：<i>{{dc.dsj}}</i></span>

					<div :id="dc.id"  class='sells'  @click='altidFun' >下架</div>
					
				</div>
				
			</li>
			
		</ul>
		<div class="dbBtn">
			<!-- <div class="dReturn" @click='dReturn'>返回上一页</div> -->
			<Button class="dReturn" type="primary" @click="dReturn" style="position:absolute">返回上一页</Button>
			<Page class="dbBtn-in" :total="40" size="small" placement="top"  @on-change='pageCur' @on-page-size-change='pageSize'  show-elevator show-sizer ></Page>
		</div>
		
		<Modal class="myalert" width='240'   :id="altid"
		v-model="xiajia"
		@on-ok="ok"
		@on-cancel="cancel">
			<p>你确定下架该作品吗？</p>
			
    	</Modal>
		
	</div>   
</template>


<script>
export default{
	name: 'sale',
	data() {
		return {			
			loading: true,
			pnum: 0,
			nnum: 10,
			// 衣鞋分类
			cate:[],
			cka:true,

			name: 'ForbidIP',
			checks: ['全部宝贝','T恤','卫衣','帽衫','帆布鞋'],
			activeName:'',
			md:'none',
			dcs:null,
			pageC:'',
			show:false,	
			xiajia:false,
			altid: '',
			
        }									
	},
	watch:{
		pageC(){
			this.pnum = (this.pageC - 1)*10;
			this.nnum = (this.pageC)*10;
			alert(this.pnum+' '+this.nnum)
		}
	},
	methods:{
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
			console.log(check.category)

			this.chuan();
		},
	
	
		pageCur(numC){
			this.pageC=numC;
			alert(this.pageC);
			
		},
		pageSize(numS){
			var pageS=numS;
			alert(pageS);	
		},
		dReturn(){
			this.$router.push('/layout/user/management/details');
		},
		
		// 弹出窗功能
		altidFun(event){
			this.altid = event.target.id;
			this.xiajia=true
		},
		ok(){
			var xd = this.altid;
			$("body").find("#"+xd).remove();
		},
		cancel(){

		},
		tocategory(){													// 衣鞋分类
			var _this = this;
			this.$http.post('http://192.168.2.239/bzadmin/public/index.php/categoryTitle.html' ).then(function(res){
				_this.cate = res.data.data;		
			},function(res){

			});
		},
		
		
	},
	mounted(){
		
		this.tocategory();

		this.activeName = '全部宝贝';
        this.dcs = [
			{id:'001',Img1:'aa',Img2:'qqc',dmc:'泻立停01号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'002',Img1:'aa',Img2:'qqc',dmc:'泻立停02号',dsj:'2017-05-11',sell:'0',sellShe:'',sellCloth:'',sj:'1'},
			{id:'003',Img1:'aa',Img2:'qqc',dmc:'泻立停03号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'004',Img1:'aa',Img2:'qqc',dmc:'泻立停04号',dsj:'2017-05-11',sell:'0',sellShe:'',sellCloth:'',sj:'0'},
			{id:'005',Img1:'aa',Img2:'qqc',dmc:'泻立停05号',dsj:'2017-05-11',sell:'0',sellShe:'',sellCloth:'',sj:'1'},
			{id:'006',Img1:'aa',Img2:'qqc',dmc:'泻立停06号',dsj:'2017-05-11',sell:'0',sellShe:'',sellCloth:'',sj:'1'},
			{id:'007',Img1:'aa',Img2:'qqc',dmc:'泻立停07号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'008',Img1:'aa',Img2:'qqc',dmc:'泻立停08号',dsj:'2017-05-11',sell:'0',sellShe:'',sellCloth:'',sj:'1'},
			{id:'009',Img1:'aa',Img2:'qqc',dmc:'泻立停09号',dsj:'2017-05-11',sell:'2',sellShe:'',sellCloth:'',sj:'1'},
			{id:'010',Img1:'aa',Img2:'qqc',dmc:'泻立停10号',dsj:'2017-05-11',sell:'0',sellShe:'',sellCloth:'',sj:'1'},
			{id:'011',Img1:'aa',Img2:'qqc',dmc:'泻立停11号',dsj:'2017-05-11',sell:'2',sellShe:'',sellCloth:'',sj:'1'},
			{id:'012',Img1:'aa',Img2:'qqc',dmc:'泻立停12号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'1'},
			{id:'013',Img1:'aa',Img2:'qqc',dmc:'泻立停13号',dsj:'2017-05-11',sell:'0',sellShe:'',sellCloth:'',sj:'1'},
			{id:'014',Img1:'aa',Img2:'qqc',dmc:'泻立停14号',dsj:'2017-05-11',sell:'0',sellShe:'',sellCloth:'',sj:'1'},
			{id:'015',Img1:'aa',Img2:'qqc',dmc:'泻立停15号',dsj:'2017-05-11',sell:'2',sellShe:'',sellCloth:'',sj:'0'},
			{id:'016',Img1:'aa',Img2:'qqc',dmc:'泻立停16号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'017',Img1:'aa',Img2:'qqc',dmc:'泻立停17号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'018',Img1:'aa',Img2:'qqc',dmc:'泻立停18号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'019',Img1:'aa',Img2:'qqc',dmc:'泻立停19号',dsj:'2017-05-11',sell:'2',sellShe:'',sellCloth:'',sj:'0'},
			{id:'020',Img1:'aa',Img2:'qqc',dmc:'泻立停20号',dsj:'2017-05-11',sell:'0',sellShe:'',sellCloth:'',sj:'0'},
			{id:'021',Img1:'aa',Img2:'qqc',dmc:'泻立停21号',dsj:'2017-05-11',sell:'2',sellShe:'',sellCloth:'',sj:'0'},
			{id:'022',Img1:'aa',Img2:'qqc',dmc:'泻立停22号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'023',Img1:'aa',Img2:'qqc',dmc:'泻立停23号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'024',Img1:'aa',Img2:'qqc',dmc:'泻立停01号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'025',Img1:'aa',Img2:'qqc',dmc:'泻立停01号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'026',Img1:'aa',Img2:'qqc',dmc:'泻立停01号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'027',Img1:'aa',Img2:'qqc',dmc:'泻立停01号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'},
			{id:'028',Img1:'aa',Img2:'qqc',dmc:'泻立停01号',dsj:'2017-05-11',sell:'1',sellShe:'',sellCloth:'',sj:'0'}
		];
		// _this = this;
	}

}
</script>
<style scoped>

	/* 宝贝分类 */

	.Management{
		background: #fafafc;
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
		background: #ed3f14;
		box-shadow: 2px 2px  2px #80848f ;
	}
	
	.zp{
		position: relative;
		width: 100%;
		border-top: 1px solid #dfe0e1;
		padding: 10px;
	}
	.zp span{
		display: block;
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-weight: 900;
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
		line-height:30px;
		font-size: 1em;
	}

	
	

	
	
</style>
