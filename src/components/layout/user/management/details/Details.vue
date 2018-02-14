<template>
  <div class="hydetails  hy">
    <div class="details-name">
      编辑&nbsp;&nbsp;<span>{{name}}</span>&nbsp;&nbsp;的详情信息
    </div>
    <form action="" id="myForm">
      <ul>
        <li class="name">
          <h3>用户名：</h3>
          <Input  class='pl'    v-model="name" placeholder="请输入用户名" style="width: 300px;text-align:left !important"></Input>
        </li>
        <li class="sex">
           <h3>性别：</h3>
          <RadioGroup class='pl' v-model="sex">
              <Radio label="男"></Radio>
              <Radio label="女"></Radio>
          </RadioGroup>
        </li>
        <li class="head dl">
           <dl>
             <dd><h3 class="del">头像：</h3></dd>
             <dd><img src="static/images/ceshi/h_u2.png"  alt=""></dd>
             <dd><Checkbox class="del" v-model="bool1">删除头像</Checkbox></dd>
           </dl>       
        </li>
        <li class="group">
          <h3>所属用户组：</h3>
          <RadioGroup class='pl' v-model="group">
              <Radio label="普通用户"></Radio>
              <Radio label="设计师"></Radio>
              <Radio label="商户组"></Radio>
          </RadioGroup>
        </li>
        <li class="type">
          <dl>
            <dd> <h3>注册方式:</h3></dd>
            <dd><Input  class='pl phone' v-model="phone" placeholder="请输入手机号码" style="width: 300px"></Input></dd>
            <dd>
              <h3>
                  微信（<Icon v-if="correct1 == true"  type="checkmark"></Icon><Icon v-if="correct1 == false" type="close"></Icon>）&nbsp;&nbsp; 
                  QQ （<Icon v-if="correct2 == true" type="checkmark"></Icon><Icon v-if="correct2 == false" type="close"></Icon>）&nbsp;&nbsp; 
                  微博 （<Icon v-if="correct3 == true" type="checkmark"></Icon><Icon v-if="correct3 == false" type="close"></Icon>）
              </h3>
            
            </dd>
            <dd>
              <h3>
                 <span>注册时间：{{time}}</span>&nbsp;&nbsp;
                 <span>最后登陆时间：{{lastTime}}</span>
              </h3>
              
            </dd>
          </dl>       
        </li>
        <li class="statistics">
          <h3>统计信息:</h3>
          <h3>
            <!-- <router-link  :to="{ path:'/layout/order/generalsituationorder'}">
                    <Icon type="arrow-right-a" style="width: 45px; color:white"/>
            </router-link>  -->
            <span>
              <router-link class="" v-bind:to="'/layout/user/management/total'">全部作品({{a}})</router-link>&nbsp;&nbsp;
              <router-link class="" v-bind:to="'/layout/user/management/sale'">售卖中的作品({{b}})</router-link>&nbsp;&nbsp;
              <router-link class="" v-bind:to="'/layout/user/management/collect'">收藏({{c}})</router-link>&nbsp;&nbsp;
              <router-link class="" v-bind:to="'/layout/user/management/attention'">关注({{d}})</router-link>&nbsp;&nbsp;
              <router-link class="" v-bind:to="'/layout/user/management/fans'">粉丝({{e}})</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
              <router-link class="" v-bind:to="'/layout/user/management/purhistory'">购买记录({{f}})</router-link>&nbsp;&nbsp;
              <router-link class="" v-bind:to="'/layout/user/management/salhistory'">销售记录({{g}})</router-link>
            </span>
          </h3>
        </li>
        <li class="password">
          <h3>新密码：</h3>
          <Input  class='pl' v-model="password" placeholder="" style="width: 300px"></Input>
        </li>
        <li class="email">
          <h3>Email</h3>
          <!-- <Input  class='pl' v-model="email" placeholder="" style="width: 300px"></Input> -->
          <AutoComplete
              v-model="emailv"
              @on-search="emailon"
              placeholder="请输入邮箱"
              style="width:300px;padding-left:15px;margin:5px 0;">
              <Option v-for="item in emaildata" :value="item" :key="item">{{ item }}</Option>
          </AutoComplete>
         
        </li>
        <li class="daren">
          <h3>推荐达人：</h3>
          <RadioGroup class='pl' v-model="daren">
              <Radio label="是"></Radio>
              <Radio label="否"></Radio>
          </RadioGroup>
        </li>
        <li class="intro">
           <h3>个人简介：</h3>
           <Input  class='pl' v-model="intro" placeholder="" style="width: 300px"></Input>
        </li>
        <li class="ip dl">
          <dl>
            <dd><h3 class="del">IP推荐展示图：</h3></dd>
            <dd><img  src="static/images/ceshi/h_u2.png" alt=""></dd>
            <dd><Checkbox class="del" v-model="bool2">删除IP推荐图</Checkbox></dd>
          </dl>
           
        </li>
        <li class="imgShow dl">
          <dl>
            <dd><h3 class="del">个人店铺展示图：</h3></dd>
            <dd><img  src="static/images/ceshi/h_u2.png" alt=""></dd>
            <dd> <Checkbox class="del" v-model="bool3">删除个人店铺展示图</Checkbox></dd>
          </dl>
        </li>
        <li class="introduce">
            <h3>个人主页介绍</h3>
            <Input  class='pl' v-model="referral" placeholder="" style="width: 300px"></Input>
            
        </li>
      </ul>
    </form>
    <div class="footer">
      
   
      <Button size="large" class="btn" type="primary">取消</Button>
      <Button @click="checkMobile()" size="large" class="btn" type="primary" form="myForm">提交</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hydetails',
  data(){
    return {
      
      // 用户名
      name:'hy',

      // 性别
      sex:'男',
      // 头像
      img1:'',
      bool1:false,
      // 所属用户组
      group:'普通用户',
      // 注册方式
      phone:'',
      
      correct1: true,
      correct2: false,
      correct3: true,

      time:'',
      lastTime:'',
      // 统计信息
      a:'',
      b:'',
      c:'',
      d:'',
      e:'',
      f:'',
      g:'',
      // 新密码
      password:'',
      // Email

      emailv: '',
      emaildata: [],

      // 推荐达人
      daren:'是',
      // 个人简介
      intro:'',
      // IP推荐展示图
      img2:'',
      bool2:false,
      // 个人店铺展示图
      img3:'',
      bool3:false,
      // 个人主页介绍
      referral:'',
    
      
    }
  },
  methods:{

    emailon(value) {
    
      this.emaildata = !value || value.indexOf('@') >= 0 ? [] : [
          value + '@qq.com',
          value + '@sina.com',
          value + '@163.com',
          value + '@aliyun.com',
          value + '@sohu.com',
          value + '@outlook.com'   
      ];
    },


    // 后台
    port(){
      this.$http.post('').then(function(res){

      },function(){
        
      });
    },
    
    


  },
  mounted(){
    // 判断手机号
    $(".phone .ivu-input").blur(function(){
      var sMobile = this.phone;
      if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))){ 
        alert("不是完整的11位手机号或者正确的手机号前七位"); 
        return false; 
      } 
    });



  },
  watch:{
   
  },
}
</script>

<style scoped>
 


  /* form表单 */
  .hydetails form{
    width: 100%;
    height: auto;
    margin-top: 20px;   
    background: white;  
  }
  .hydetails form ul{
    width: 100%;
    height: auto;
    /* padding-left: 20px; */
  }
  .hydetails form ul li{
    width: 100%;
    height: auto;
    padding: 10px 0;
    border-bottom: 1px solid gainsboro;
    display: table;
  }
  
 
  .hydetails .ivu-radio-group,.hydetails .ivu-input-type{
    margin:  5px 0 !important;
  }
  .hydetails  dl{
    width: 100%;
    height: 100%;
  }
  .hydetails  dl dd{
    display: inline-block;
    width: auto;
    height: 100%;
    float: left;
    margin-right: 25px;
  }
  /* 链接 */
  .hydetails .type dd{
    height: 43px;
    line-height: 43px;
  }
  /* 图片 */
  .hydetails  .head dl,.hydetails  .head dd{
  
    /* width: 95px; */
    height: 95px;
    line-height: 95px;
  }
  .hydetails  .ip dl,.hydetails  .ip dd{
    
    /* width: 299px; */
    height: 134px;
    line-height: 134px; 
  }
  .hydetails .imgShow dl,.hydetails .imgShow dl{
      /* width: 386px; */
      height: 252px;
      line-height: 252px;
  }
 
  .hydetails  .head img{
  
    width: 95px;
    height: 95px;
  }
  .hydetails .ip img{
    
    width: 299px;
    height: 134px;
   
  }
  .hydetails .imgShow img{
      width: 386px;
      height: 252px;

  }

 
  
  /* 底部 */
  .hydetails .footer{
    /* padding-left: 20px; */
  }
.hydetails .footer .btn{
  margin-top: 20px;
  margin-right:20px;
  padding-left: 40px;
  padding-right: 40px;
}
  /* 文本框 */
  .hydetails input[type=text]{
    text-align: left;
  }

  
 h3,.pl{
    padding-left: 15px;
  }
  
  
 
</style>
