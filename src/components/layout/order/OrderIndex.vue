<template>
	<div class="OrderIndex">
    <router-view/>
	</div>
</template>
<script>
export default {
    name: 'Marketing',
    data() {
      return {
        name:'OrderIndex'
      }
    },
    methods: {
    },
    mounted(){
      
    },
    watch: {
    '$route'(to, from){
      if(to.path == '/layout/order/waitshiporder'){
        this.$store.commit('changeIsPush', 'no');
      }
    }
  }    
  }
</script>