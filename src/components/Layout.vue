<template>
<div class="layout">
  <Row type="flex">
    <div style="position:fixed;left:0; top:0;width:200px; min-height: 100%; background-color: #495060;z-index:1000;">
      <Menu :active-name="secondaryName" theme="dark" width="auto" ref="secondaryselect">
        <div class="layout-logo-left">
          <img src="static/images/ceshi/logo.png" alt="">  
        </div>        
        <Menu-item v-if="mainIndex && routerConfig && routerConfig[mainIndex] && routerConfig[mainIndex].children"  v-for="(item, index) in routerConfig[mainIndex].children" :name="item.name" class="secondary-link" :key="item.name"><router-link :to="item.url">{{item.label}}</router-link></Menu-item>
      </Menu>
    </div>
    <div style="box-sizing: border-box;width:100%;height:100%; padding-left: 200px;">
      <div class="layout-header" style="position: fixed;width: 100%; z-index:999;top: 0;left:0;padding-left: 200px;">
        <div class="layout-ceiling">
          <div class="layout-ceiling-main nav-top">
            <Button v-for="(item, index) in routerConfig" :type="mainName == item.name ? 'success': 'primary'" @click="changeIndex(item, index)" :key="item.name">{{item.label}}</Button>
          </div>
          <div class="layout-ceiling-main user-phone">
            <div class="u-phone">
              <div class="up">
                <img class="txk" v-if="false"  src="static/images/ceshi/txk.png" alt="">
                <img class="txw"  src="static/images/ceshi/txw.png" alt="">
              </div>
              
            </div>
            <div class="u-show">
              <b>显示登录昵称</b>
              
            </div>
            <div class="u-triangle">
              <b></b>
              
            </div>
          </div>
        </div>
        <div class="tan">
          <div class="tan-zx">
            <span @click='tanZx'>注销登录</span>
            <b></b>
          </div>
        </div> 
      </div>
      <div class="layout-content">
        <div class="layout-content-main">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
      <div class="layout-copy">
      </div>
    </div>
  </Row>
</div>
</template>
<script>
  import routerconfig from '../router/router.config.js'
  export default {
    name: 'layout',
    data() {
      return {
        mainIndex: 0,
        mainName: '',
        secondaryName: '',
        routerConfig: routerconfig
      }
    },
    watch: {
      '$route'(to, from){
        let pathList = to.path.split('/');
        this.mainName = pathList[2];
        this.routerConfig.forEach((ele, index) => {
          if(ele.name == this.mainName){
            this.mainIndex = index
          }
        });
        this.secondaryName = pathList[3];
        this.$nextTick(function(){
          this.$refs.secondaryselect.updateActiveName();
        })
      }
    },
    methods: {
      changeIndex(item, index) {
        this.mainIndex = index;
        this.mainName = item.name;
        this.$router.push(item.url);
      },
      tanZx:function(){
        alert('注销登陆');
      }

    },
    beforeMount(){
      /*if(false){
        this.$router.push('/login')
      }*/
    },
    mounted(){
      let pathList = this.$route.path.split('/');
      this.mainName = pathList[2];
      this.routerConfig.forEach((ele, index) => {
        if(ele.name == this.mainName){
          this.mainIndex = index
        }
      });
      this.secondaryName = pathList[3];
      this.$nextTick(function(){
        this.$refs.secondaryselect.updateActiveName();



        // 显示隐藏注销登录
        
        $(".u-triangle b,.tan").mouseenter(function(){
          $(".tan").stop().fadeIn();
        });
        $(".tan").mouseleave(function(){
          $(".tan").fadeOut(1500);
        });
      
      })
    }    
  }
  
</script>
<style >
  
  .border{
    background: black;
  }

  .layout-logo-left{
    margin: 0;
    width: 100%;
    height: 60px;
  }
  .layout-logo-left img{
    width: 100%;
   height: 60px;
   background: white;
  } 
  .user-phone{
    width: 200px;
    height: 100%;
    min-height: 1px;
    display: flex;
  }
 /* 头像 */
  .user-phone .u-phone{
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;  
  }
  .user-phone .u-phone .up{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 50px;
  }
 
  .user-phone .u-phone .up .txk{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .user-phone .u-phone .up .txw{
  
    width: 80%;
    height: 80%;
  }
  /* 昵称 */
  .user-phone .u-show{
    flex: 4;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  .user-phone .u-triangle{
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: center;
    

  }
  .user-phone .u-triangle b{
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid black;
  }
  .user-phone .u-triangle b:hover{
    transform: rotate(180deg);
  }

  /* 弹出框 */
  .tan{
    position: fixed;
    display:none;
    top: 20px;
    right: 16px;
    width: 130px;
    height: 65px;
    /* border: 1px solid red; */
    z-index: 9999;
  }
 .tan .tan-zx{
    position: absolute;
    bottom:0;
    right: 0;
    width: 130px;
    height: 35px;
    line-height: 20px;
    border: 1px solid #19be6b;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .tan .tan-zx span{
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-weight: 900;
    color: red;
    letter-spacing: 2px;
  }
  .tan .tan-zx b{
    display: block;
    position: absolute;
    top: -7px;
    right: 6px;
    width: 12px;
    height: 12px;
    border-left: 1px solid #19be6b;
    border-top: 1px solid #19be6b;
    transform: rotate(45deg);
    background-color: white;
  }
  
  
</style>
