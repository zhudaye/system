<template>
	<div class="pushsearch">
		<Row class="pushrow" style="width:90px;">      
      <Col span="24">
        <h2 style="color:#495060">
            消息推送
        </h2>
      </Col> 
      <ul class="pushcheck">
        <li  class="cur" style="opacity:1">1.选取目标用户</li>
        <li  class="cur">2.填写通知内容</li>
      </ul>           
    </Row>
      
    
    <form action="" id="myForm">
      <ul>
        <li class="name">
          <h3>用户名：</h3>
          <Input v-model="userName" placeholder="请输入要查询的用户昵称" style="width: 180px;"></Input>
        </li>
        <li class="UID">
          <h3>用户UID</h3>
          <Input v-model="userUID" placeholder="请输入要查询的用户UID" style="width: 180px"></Input>
        </li>
        <li class="group">
          <h3>用户组：</h3>
          <select v-model="userGroup" @click="group" name="" id="" style="width:180px;border:1px solid #dddee1;border-radius:4px;padding-top:3px;padding-bottom:3px;" size="5" multiple>
            <option value="1">&nbsp;普通</option>
            <option value="2">&nbsp;认证</option>
            <option value="3">&nbsp;商户</option>
          </select>
        </li>
        <li>
          <Button @click="search" type="success" style="width:180px;font-size:14px;">搜索</Button>
        </li>
      </ul>
    </form>

    
	</div>
</template>
<script>
	export default{
		name: 'pushsearch',
		data() {
			return {  
        userName: "",
        userUID:"",
        userGroup: [],


        // 弹窗
        xiajia:false,
        altid: '',
      }
  },
	
  
  watch: {
   
  },
  methods: {
    //   返回上一步
    dReturn(){
        this.$router.go(-1);
    },
    
    //  提交数据
    group(){
      console.log( this.userGroup.toString() )
    },
    
    

    // 弹出窗功能
    altidFun(event){
        // this.altid = event.target.id;
        this.xiajia=true
    },
    ok(){
        this.$router.push('/layout/user/pushmessage/pushbar');
        
    },
    cancel(){

    },
    search(){
        this.$router.push('/layout/user/pushmessage/pushcontent');
    },

    // 后台
    port(){
       this.$http.post('').then(function(res){

       },function(res){

       });
    },
    
  },
  mounted(){
    // this.userName=sessionStorage.getItem('userName' );
    // this.userUID=sessionStorage.getItem('userUID');
    // this.userGroup=JSON.parse(sessionStorage.getItem('userGroup'));
   
  },

  created() {
    // this.$http.get("http://192.168.2.239/bzadmin/public/index.php/expressList.html").then((data) => {
    //    this.users = data.data.data.map((ele) => {
    //     ele.isIn = false;
    //     //命名revisability
    //     ele.revisability = true;
    //     return ele;
    //   });
    // })
 
    
  }
}
	
</script>
<style scoped>

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



/* form表单 */
  .PushMessage .pushShow{
    display: block;
  }
  .PushMessage form{
    width: 100%;
    height: auto;
  }
  .PushMessage form ul{
    width: 100%;
    height: auto;
    
  }
  .PushMessage form ul li{
    width: 100%;
    height: auto;
    padding: 5px 0;
    padding:  5px 0;
    display: table;
     margin-top: 20px;     
  }
  
 .PushMessage form ul li h3{
   padding: 5px 0;
   /* float: left; */
 }


 option{
   font-size:13px;
 }


/* 页面切换 */
 .cur{
   cursor: pointer;
   opacity: .6;
 }
 

.pushrow{
  position: relative;
}
 .pushcheck{
    position: absolute;
    left: 100px;
    top: 5px;
    width: 500px;
  }
 .pushcheck li{
   float: left;
   font-weight: 500;
   padding-right: 25px;
  
 }


 .PushMessage input[type=text] {
   text-align: left !important; 
 }
</style>