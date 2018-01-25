// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex'
import App from './App'
import router from './router'
import iView from 'iview'
import jquery from 'jquery'
import axios from 'axios'
Vue.prototype.$http=axios  
Vue.use(iView)
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});
Vue.config.productionTip = false


Date.prototype.Format = function (fmt) { //author: meizz 
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

Vue.filter('timeToSecond', function (value) {
  if (!value) return ''
  return new Date(value * 1000).Format("yyyy-MM-dd hh:mm:ss")
})

Vue.filter('timeToDay', function (value) {
  if (!value) return ''
  return new Date(value * 1000).Format("yyyy-MM-dd")
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted(){
    this.$store.commit('init');
  },
  watch: {
    '$route'(to, from){
      
    }
  }
})
