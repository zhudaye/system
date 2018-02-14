<template>
  <div class="purhistory hy">
    <Row>
      <Col span="24">
        <h2 style="color:#495060">
            <span class="name">{{name}}</span>&nbsp;&nbsp;的购买记录
        </h2>
      </Col>
    </Row>
    <table id="tableExcel" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center;margin-top:20px;">
      <tr class="title">
       
        <th>订单号</th>
        <th>支付时间</th>
        <th>收件人</th>
        <th>联系电话</th>
        <th>状态</th>
        <th>支付类型</th>
        <th>金额</th>
        <th>操作</th>
      </tr>
      <tr class="sid" v-for="(user,index) in users" :id="user.id">
        
        <td>{{user.order}}</td>
        <td>{{user.time}}</td>
        <td>{{user.address}}</td>
        <td>{{user.link}}</td>
        <td>{{user.state}}</td>
        <td>{{user.type}}</td>
        <td>{{user.money}}</td>
        
        <td>       
          <router-link  :to="{ path:'/layout/order/generalsituationorder'}">
            <Button  type="primary" size="small" v-model="user.revisability" @click="hxgz($event, user, 'revisability')">
              <Icon type="arrow-right-a" style="width: 45px; color:white"/>
            </Button>           
          </router-link> 
        </td>
      </tr>
    </table>
    <div class="mtp10 ivu-row">
      <div class="ivu-col ivu-col-span-8">
        <Button class="dReturn" type="primary" @click="dReturn">返回上一步</Button>
        <!-- <Button type="error" @click="deleteOrderAll">批量取消关注</Button> -->
      </div>
      <Page style="position:absolute;margin-top:3px;" class="dbBtn-in" :total="40" size="small" placement="top"  @on-change='pageCur' @on-page-size-change='pageSize'  show-elevator show-sizer ></Page>
      <div class="ivu-col ivu-col-span-8" style="text-align: right;"></div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'attention',
  data() {
    return {
      name:'purhistory',  
      
      users:[
            {id:'001',order:'123',time:'2018-1-22',address:'hy',link:'13546186640',state:'已支付',type:'支付宝',money:'199' },
            {id:'002',order:'123',time:'2018-1-22',address:'hy',link:'13546186640',state:'已支付',type:'支付宝',money:'199'},
            {id:'003',order:'123',time:'2018-1-22',address:'hy',link:'13546186640',state:'已支付',type:'支付宝',money:'199'},
            {id:'004',order:'123',time:'2018-1-22',address:'hy',link:'13546186640',state:'已支付',type:'支付宝',money:'199'},
      ],
      allSelect: false,
      model1: "",
      model2: "",
      model3: "",
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
   
     //    点击表格中取消关注按钮
    hxgz: function (e, element, who) { 
        var cid = element.id;
        console.log(cid)
        // 向被跳转页面传值
        sessionStorage.setItem("cid",cid);
        
        // let _this = this;  
        // this.$Modal.confirm({
        //     content: `<p>确定取消关注吗？</p>`,
        //     onCancel() {
        //     },
        //     onOk() {
        //         console.log(element.id)
        //         _this.users.splice(e, 1);
                
        //     }
        // }) 
     
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
        this.$Modal.confirm({
          content: `<p>确定取消关注吗？</p>`,
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
            console.log(sz);  //群删除的id
            
            $("input:checkbox:checked").parents(".sid").remove();
            
            
      
          }
        })
      }
    },
     // 分页
     pageCur(numC){
        this.pageC=numC;
        console.log(this.pageC);
    
     },
    pageSize(numS){
        var pageS=numS;
        console.log(pageS);	    
    }, 

    // 后台
    port(){
       this.$http.post('').then(function(res){

       },function(res){
         
       })
    },

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