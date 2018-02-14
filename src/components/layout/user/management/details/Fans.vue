<template>
  <div class="fans hy">
    <Row>
      <Col span="24">
        <h2 style="color:#495060">
            <span class="name">{{name}}</span>&nbsp;&nbsp;的粉丝
        </h2>
      </Col>
    </Row>
    <table id="tableExcel" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center;margin-top:20px;">
      <tr class="title">
        <th class="check">
          <Checkbox v-model="allSelect" @on-change="selectAll"></Checkbox>
        </th>
        <th>用户组</th>
        <th>用户昵称</th>
        <th>UID</th>
        <th>被关注的时间</th>
        <th>操作</th>
      </tr>
      <tr class="sid" v-for="(user,index) in users" :id="user.id">
        <td class="check">
          <Checkbox v-model="user.isIn" @on-change="changeAllSelect"></Checkbox>
        </td>
       
        <td>{{user.group}}</td>
        <td>{{user.nick}}</td>
        <td>{{user.uid}}</td>
        <td>{{user.time}}</td>
        <td>
            <Button  v-if="user.gz=='0'"  type="primary" size="small" v-model="user.revisability" @click="gz($event, user, 'revisability')">
                {{ user.gz? '关注' : '互相关注' }}
            </Button>
            <Button :id="user.id" v-if="user.gz=='1'"  type="primary" size="small" v-model="user.revisability" @click="hxgz($event, user, 'revisability')">
                互相关注
            </Button>
        </td>
      </tr>
    </table>
    <div class="mtp10 ivu-row" >
      <div class="ivu-col ivu-col-span-8">
        <Button type="primary" @click="dReturn">返回上一步</Button>
        <Button type="error" @click="deleteOrderAll">批量取消关注</Button>
      </div>
      <Page style="position:absolute;margin-top:3px;" class="dbBtn-in" :total="40" size="small" placement="top"  @on-change='pageCur' @on-page-size-change='pageSize'  show-elevator show-sizer ></Page>
      <div class="ivu-col ivu-col-span-8" style="text-align: right;">
      </div>
    </div>

    <!-- 单独删除的弹窗 -->
    <Modal class="myalert" width='240'   :id="altid"
    v-model="xiajia"
    @on-ok="ok"
    @on-cancel="cancel">
	    <p>确定取消关注吗？</p>		
    </Modal>
    <!-- 群删除的弹窗 -->
    <Modal class="myalert" width='240'   :id="altid"
    v-model="checkAll"
    @on-ok="okAll"
    @on-cancel="cancelAll">
	    <p>确定取消关注吗？</p>		
    </Modal>
  </div>
</template>

<script>

export default {
  name: 'fans',
  data() {
    return {
      name:'hy',   
      users:[],
      allSelect: false,
      model1: "",
      model2: "",
      model3: "",

      // 弹窗
      checkAll:false,
      xiajia:false,
      altid: '',
      idAll:'',

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
        this.$router.push('/layout/user/management/details');
    },
    selectAll() {
      this.$nextTick(function () {
        this.users = this.users.map((ele) => {
          ele.isIn = this.allSelect;
          return ele;

        })
      })
    },
    //    点击表格中关注按钮
    gz: function(e, element, who){
         if(element.gz=="0"){
             element.gz="1";
             console.log(element.id)
         }
    },
     //    点击表格中互相关注按钮
    hxgz: function (e, element, who) {         
                               
        this.altid = element.id;
        this.xiajia = true; 
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
       
      var data = { orderid: orderidTemp };
      if( $(".sid input:checkbox:checked").length != 0 ){
        this.checkAll = true;
      }
    } ,
    // 分页
     pageCur(numC){
        this.pageC=numC;
        console.log(this.pageC);
    
     },
    pageSize(numS){
        var pageS=numS;
        console.log(pageS);	    
    },
    

    // 弹出窗功能
    // altidFun(event){
    //     this.altid = event.target.id;
    //     this.xiajia=true;
    //     console.log(this.altid);
    // },
    ok(){
        var xd = this.altid;
        $("body").find("#"+xd).remove();
    },
    cancel(){

    },
    okAll(){
        // var xd = this.altid;
        // $("body").find("#"+xd).remove();
        var sz = [];
        $("input:checkbox:checked").parents(".sid").each(function(){
            sz.push( $(this).attr("id") );
          
        });  
        console.log(sz);  //群删除的id
        
        $("input:checkbox:checked").parents(".sid").remove();
    },
    cancelAll(){

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
      {id:'001',group:'普通',nick:'hy',uid:'222',time:'2018-1-22',gz:'0'},
      {id:'002',group:'普通',nick:'hy',uid:'222',time:'2018-1-22',gz:'1'},
      {id:'003',group:'普通',nick:'hy',uid:'222',time:'2018-1-22',gz:'0'},
      {id:'004',group:'普通',nick:'hy',uid:'222',time:'2018-1-22',gz:'1'},
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
/******** 名字 *********/
.name{
    color:#b83435;
}

</style>