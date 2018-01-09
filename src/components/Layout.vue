<template>
<div class="layout">
  <Row type="flex">
    <div style="position:fixed;left:0; top:0;width:200px; min-height: 100%; background-color: #495060;z-index:1000;">
      <Menu :active-name="secondaryName" theme="dark" width="auto" ref="secondaryselect">
        <div class="layout-logo-left"></div>        
        <Menu-item v-if="mainIndex && routerConfig && routerConfig[mainIndex] && routerConfig[mainIndex].children"  v-for="(item, index) in routerConfig[mainIndex].children" :name="item.name" class="secondary-link" :key="item.name"><router-link :to="item.url">{{item.label}}</router-link></Menu-item>
      </Menu>
    </div>
    <div style="box-sizing: border-box;width:100%;height:100%; padding-left: 200px;">
      <div class="layout-header" style="position: fixed;width: 100%; z-index:999;top: 0;left:0;padding-left: 200px;">
        <div class="layout-ceiling">
          <div class="layout-ceiling-main nav-top">
            <Button v-for="(item, index) in routerConfig" :type="mainName == item.name ? 'success': 'primary'" @click="changeIndex(item, index)" :key="item.name">{{item.label}}</Button>
          </div>
          <div class="layout-ceiling-main">
            <a href="#">注册登录</a> |
            <a href="#">帮助中心</a> |
            <a href="#">安全中心</a> |
            <a href="#">服务大厅</a>
          </div>
        </div>
      </div>
      <div class="layout-content" style='margin-top: 75px'>
        <div class="layout-content-main">
          <router-view/>
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
      })
    }    
  }
</script>
<style scoped>
</style>
