<template>
	<div class="ForbidIP">
		<Row>
      <Col span="24">
        <h2 style="color:#495060">
            禁止IP
        </h2>
      </Col>
    </Row>
    <table id="tableExcel" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center;margin-top:20px;">
      <tr class="title">
        <th class="check">
          <!-- <Checkbox v-model="allSelect" @on-change="selectAll"></Checkbox> -->
        </th>
        <th>IP地址</th>
        <th>物理位置</th>
        <th>操作者</th>
        <th>起始时间</th>
        <th>终止时间</th>
      </tr>
      <tr class="sid" v-for="(user,index) in users" :id="user.id">
        <td class="check">
          <Checkbox v-model="user.isIn" @on-change="changeAllSelect"></Checkbox>
        </td> 
        <td>{{user.address}}</td>
        <td>{{user.site}}</td>
        <td>{{user.runer}}</td>
        <td>{{user.timeS}}</td>
        <td>{{user.timeE}}</td>
      </tr>

      <tr>
        <td><b>新增</b></td>
        <td class="textin" >
          <input maxlength="3" v-model="input1" type="text">一<input maxlength="3" v-model="input2" type="text">一<input maxlength="3" v-model="input3" type="text">一<input maxlength="3" v-model="input4" type="text">
        </td>
        <td class="lft">
          <b>有效期：</b>
          <input v-model="pushTime" type="text">
          <b>天</b>
        </td>
        <td><Button class="lft  long" @click="add" type="success" style="">添加</Button></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><Checkbox v-model="allSelect" @on-change="selectAll"></Checkbox></td>
        <td class="lft">全删除</td>
        <td></td>
        <td><Button class="lft long" @click="altidFun" type="success" style="">提交</Button></td>   
        <td></td>
        <td></td>
      </tr>
    </table>
    
    <div class="mtp10 ivu-row" >
      <div class="ivu-col ivu-col-span-8">
        <Button type="primary" @click="dReturn">返回上一步</Button>
        <!-- <Button type="error" @click="deleteOrderAll">批量取消关注</Button> -->
      </div>
     
      <Page   class="dbBtn-in" :total="40" size="small" placement="top"  @on-change='pageCur' @on-page-size-change='pageSize'  show-elevator show-sizer ></Page>
      <div class="ivu-col ivu-col-span-8" style="text-align: right;">
      </div>
    </div>

    <Modal class="myalert" width='240'   
    v-model="adda"
    @on-ok="oka"
    @on-cancel="cancela">
      <p>你确定添加IP吗？</p>		
    </Modal>

    <Modal class="myalert" width='240'   :id="altid"
    v-model="xiajia"
    @on-ok="ok"
    @on-cancel="cancel">
      <p>你确定禁止选中IP吗？</p>		
    </Modal>
    
	</div>
</template>
<script>
	export default{
		name: 'ForbidIP',
		data() {
			return {

				name:'hy',   
        users:[],
       
				allSelect: false,

        addCheck: false,

        
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        pushTime:'',

        // 弹窗
        xiajia:false,
        adda:false,
        adds:'', 

        altid: '', 
			
			}
		},
	
  
  watch: {
    users() {
      this.changeAllSelect();
    }
  },
  methods: {
    //   返回上一步
    dReturn(){
        this.$router.go(-1);
    },
    selectAll() {
      this.$nextTick(function () {
        this.users = this.users.map((ele) => {
          ele.isIn = this.allSelect;
          return ele;

        })
      })
    },
    
    
    changeAllSelect() {
      for (let i = 0; i < this.users.length; i++) {
        if (!this.users[i].isIn) {
          this.allSelect = false;
          return;
          
        }
      }
      this.allSelect = true;
    },
   
  
    //批量删除
    deleteOrderAll: function (data) {
      var orderid = data;
      var orderidTemp = "";
      $('input:checkbox[name="orderid"]:checked').each(function (i) {
        if (0 == i) {
          orderidTemp = $(this).val();
        } else {
          orderidTemp += ("," + $(this).val());
        }
      });
      
      //选取选中的数组 需要清空上一次的数组
      
       for(let i=0;i<this.users.length;i++){
         
         if (this.users[i].isIn) {
          // console.log(this.users[i].id)
             var a=this.users[i].id+",";
        //    console.log(a)
            
        }
       }
      //  alert($(".sid input:checkbox:checked").length)
      var data = { orderid: orderidTemp };
      if( $(".sid input:checkbox:checked").length != 0 ){            //当有复选框被选中
        this.$Modal.confirm({
          content: `<p>确定提交吗？</p>`,
          onCancel(index) {

          },
          onOk(index) {
            //传给后台的值 选中的推送工厂
            var data = { orderid: orderidTemp };
            //成功后操作
            var sz = [];
            $("input:checkbox:checked").parents(".sid").each(function(){
                  sz.push( $(this).attr("id") );
              
            });  
            // console.log(sz);  //群删除的id
            
            $("input:checkbox:checked").parents(".sid").remove();
            
            
      
          }
        })
      }
        
    } ,
    // 分页
     pageCur(numC){
        this.pageC=numC;
        // console.log(this.pageC);
    
     },
    pageSize(numS){
        var pageS=numS;
        // console.log(pageS);	    
    },
    // 添加IP
    add(){      
      this.adda=true;    
    },

    oka(){

    },
    cancela(){

    },

    // 提交IP
    altidFun(event){
        this.altid = event.target.id;
        this.xiajia=true;
    },
    ok(){
      var sz = [];
        $("input:checkbox:checked").parents(".sid").each(function(){
            sz.push( $(this).attr("id") );
          
        });  
        console.log(sz);  //群删除的id
        
        $("input:checkbox:checked").parents(".sid").remove();
    },
    cancel(){

    },

    // 后台
    port(){
      this.$http.post('').then(function(res){

      },function(res){

      });
    },
    
  },
  mounted(){

    this.users = [
      {id:'001',address:'111.111.111.111',site:'普通',runer:'hy',timeS:'2018-1-22',timeE:'2019-1-22'},
      {id:'002',address:'111.121.111.111',site:'普通',runer:'hy',timeS:'2018-1-22',timeE:'2019-1-22'},
      {id:'003',address:'111.131.111.111',site:'普通',runer:'hy',timeS:'2018-1-22',timeE:'2019-1-22'},
    ];
   
  },

  created() {
 
    
  }
}
	
</script>
<style scoped>
	body {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, \\5fae软雅黑, Arial, sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #495060;
}
#tableExcel {
  border: 1px solid #e9eaec;
}
input {
  border: 1px solid #eded;
  width: 70px;
  text-align: center;
  height: 27px;
}

.active {
  color: #fff !important;
  background-color: #19be6b !important;
  border-color: #19be6b !important;
}
.title {
  height: 32px !important;
  background-color: #f8f8f9 !important;
}
#tableExcel tr {
  background: white;
  line-height: 1.5;
  height: 40px;
}
#tableExcel td,
#tableExcel th {
  border-bottom: 1px solid #e9eaec;
}
#tableExcel td:last-child {
  width: 250px;
}
input:disabled {
  border: hidden;
  background-color: #fff;
  color: #000;
}



/* 底部按钮 */
	.dbBtn{
		position: relative;
		text-align: center;
		line-height: 48px;
		width: 100%;
		height: 50px;
	}
	.dReturn{
		position: absolute;
		left: 20px;
		width: 80px;
		height: 30px;
    cursor: pointer;
    text-align: left;
	}
	.dbBtn-in{
	
		display: inline-block;
		
	}

 

/******** 复选框宽度 ************/
.check{
  width: 30px;
}
.ivu-checkbox-wrapper{
  margin-right: 0;
}



.sid:hover{
    background: 	#F0F8FF !important;
}
/* 分页 */
.mtp10{
	margin-top: 10px;
} 

/* 添加 提交 */

/* input框 */
.textin{
  color: #eded;
}
.textin input{
  width: 40px;
  color: black;
}

.lft{
  text-align: left;
}

/* 按钮长度 */
.long{
  padding-left: 60px;
  padding-right: 60px;
}

/* 修改弹窗 */

 .ivu-icon-help-circled{
    visibility: hidden;
 }
 .ivu-modal{
    width: 230px !important; 
    top: 50%;
    margin-top: -200px;
    letter-spacing: 1px;
    font-weight: 400px;
}
 .ivu-modal-confirm{
    padding: 0;
    border-radius: 4px;
    overflow: hidden;
}
 .ivu-modal-confirm-head{
    display: none;
}
 .ivu-modal-body{
    padding: 0; 
}
 .ivu-modal-confirm-body{
    position: relative;
}
 .ivu-modal-confirm-body p{
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
}
 .ivu-modal-confirm-footer{
    display: flex;
    border-top: 1px solid gainsboro;
}
 .ivu-modal-confirm-footer button{
    flex: 1;
    background: white;
    color: #2d8cf0;
    border: none;
    border-radius: 0;
}
 .ivu-modal-confirm-footer button+button{
    margin: 0;
}
 .ivu-modal-confirm-footer button:first-child{
    border-right: 1px solid gainsboro;
}
/******** 复选框宽度 ************/
.check{
  width: 30px;
}
.ivu-checkbox-wrapper{
  margin-right: 0;
}

/* 字体粗细 */
b{
  /* font-weight: 500; */
}
</style>