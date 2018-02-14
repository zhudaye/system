<template>
  <div class="pushbar  hy">
     <div class="pbimg">
         <ul>
             <li class="lia"><h1>发送站点通知：正在处理 从 1 到 100</h1></li>
             <li class="lib"><Progress :percent="45" status="active"  style="width:380px"></Progress></li>
             <li class="lic"><router-link v-bind:to="'/layout/user/pushmessage/pushcontent'"><h3>如果浏览器在没能自动跳转回上级页面，请点击这里</h3></router-link></li>
         </ul>
     </div>
  </div>
</template>

<script>
export default {
  name: 'pushbar',
  data () {
     return {

     }
  },
  methods:{



    port(){
      this.$http.post('').then(function(res){

      },function(res){

      });  
    }
  },
}
</script>

<style scoped>
    .pbimg{
        position: relative;
        width: 965px;
        height: 170px;
        background: #99cc99;
        margin-top: 100px;
    }
    ul{
        position: absolute;
        height: 110px;
        top: 30px;
        width: 100%;
    }
    ul li{
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
    }
     ul .lia{
         top: 0;
     }
    ul .lib{
        top: 50px;
    }
    ul .lic{
        bottom: 0;
    }
</style>
