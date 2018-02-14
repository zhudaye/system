<template>
	<div class="pushcontent">
		<Row class="pushrow" style="width:90px;">      
      <Col span="24">
        <h2 style="color:#495060">
            消息推送
        </h2>
      </Col> 
      <ul class="pushcheck">
        <li  class="cur">1.选取目标用户</li>
        <li  class="cur" style="opacity:1">2.填写通知内容</li>
      </ul>           
    </Row>
      
    
    

    <form  action="">
      <ul>
        <li >
          <h3>通知会员：&nbsp;&nbsp;共搜索到{{ 2 }}名符合条件的用户</h3>
    
        </li>
        <li class="UID">
          <h3>通知标题：</h3>
          <Input v-model="nictitle"  placeholder="请输入通知的标题" style="width: 500px"></Input>
        </li>
        <li class="group">
          <h3>通知内容：</h3>
          <Input v-model="niccontent" :autosize="{minRows: 5,maxRows: 10}" type="textarea"  placeholder="请输入通知的内容" style="width: 500px;"></Input>
        </li>
        <li>
          <h3>通知发送方式：</h3>
          <RadioGroup v-model="nictype" vertical>
            <Radio label="1">
               <span>app消息推送</span>
            </Radio>
            <Radio label="2">
                <span>手机短信推送</span>
            </Radio>
            <Radio label="3">
                <span>邮箱推送</span>
            </Radio>
          </RadioGroup>
        </li>
        <li>
          <h3>分批发送数量：</h3>
          <InputNumber @on-change="fenfa" :max="999999" :min="0" :step="10" v-model="nicnum"></InputNumber>
        </li>
        <li>
          <Button @click="altidFun"  type="success" style="width:180px;font-size:14px;">提交</Button>
        </li>
      </ul>
    </form>
   
  
    <Modal class="myalert" width='240'   :id="altid"
    v-model="xiajia"
    @on-ok="ok"
    @on-cancel="cancel">
      <p>你确定推送消息吗？</p>		
    </Modal>
	</div>
</template>
<script>
	export default{
		name: 'pushcontent',
		data() {
			return {
        nictitle: "",   //通知标题
        niccontent: "", //通知内容
        nictype:"1",     //通知方式
        nicnum:0,

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
    // 分批发送数量
    fenfa(){
      console.log(this.nictitle)
      console.log(this.niccontent)
      console.log(this.nictype)
      console.log(this.nicnum)
      
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

    // 后台
    port(){
      this.$http.post('').then(function(res){

      },function(res){

      })
    },
    
  },
  mounted(){

    
    
    
   
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