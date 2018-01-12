<template>
	<div class="waitshiporder">
		<Row class="top-nav">
      <Col span="12" class="top-left"> 
	      <Button :type="isPushed ? 'default' : 'success'" @click="changePush(false)">未推送</Button> 
	      <Button :type="isPushed ? 'success' : 'default'" @click="changePush(true)">已推送</Button>
	    </Col>
      <Col span="12" class="top-right">
        <Input v-model="search" placeholder="按时间查询" style="width: 300px">
        </Input>
        <Button type="primary">搜索</Button>
      </Col>
    </Row>
    <component :is="currentComponent"></component>
	</div>
</template>
<script>
  import WaitPushOrder from './WaitPushOrder'
  import PushedOrder from './PushedOrder'
	export default {
		name: 'waitshiporder',
		components: {
			'my-waitpushorder': WaitPushOrder,
			'my-pushedorder': PushedOrder
		},
		data() {
			return {
        search: '',//搜索内容
        isPushed: false,
        currentComponent: 'my-waitpushorder'
			}
		},
		watch: {
      isPushed() {
        this.currentComponent = this.isPushed ? 'my-pushedorder' : 'my-waitpushorder'
      }
		},
    methods: {
      changePush(status) {
				if(this.isPushed == status) return;
				this.isPushed = status
			}
    }
	}
</script>
<style>
	.top-nav {
		padding: 10px 15px;
	}

  .top-nav .top-right{
  	text-align: right;
  }

  .table-title{
  	margin: 5px 0;
  }
</style>