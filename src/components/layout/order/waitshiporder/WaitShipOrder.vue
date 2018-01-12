<template>
	<div class="waitshiporder">
		<div class="top-header">		
			<div class="top-header-inner">
				<Row class="top-nav">
		      <Col span="12" class="top-left"> 
			      <Button :type="isPushed ? 'default' : 'success'" @click="changePush(false)">未推送</Button> 
			      <Button :type="isPushed ? 'success' : 'default'" @click="changePush(true)">已推送</Button>
			    </Col>
		      <Col span="12" class="top-right">
		        <Input v-model="search" placeholder="按时间查询" style="width: 300px">
		        </Input>
		        <Button type="primary" @click="submit">搜索</Button>
		      </Col>
		    </Row>
		    <Row class="table-title">
		      <Col span="12"> 
			      宝贝
			    </Col>
		      <Col span="12">
		        <Row>
		        	<Col span="8">
		        	  收货人
		          </Col>
		          <Col span="5">
		            支付方式及金额
		          </Col>
		          <Col span="3">
		            物流
		          </Col>
		          <Col span="8">
		            状态
		          </Col>
		        </Row>
		      </Col>
		    </Row>
		  </div>
	  </div>
    <component :is="currentComponent" class="main-content"></component>
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
			},
			submit() {
				
			}
    }
	}
</script>
<style>
  .top-header{
    position: fixed;
    left: 0;
    top: 60px;
    width: 100%;
    padding-left: 207px;
    padding-right: 7px;
    z-index: 998;
  }

  .top-header .top-header-inner{
  	width: 100%;
  	padding-top: 5px;
  	 background-color: #f5f7f9;
  }

  .top-header .top-header-inner>div{
  	background-color: #fff;
  	box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }

  .top-header .top-header-inner>div:not(:first-child){
  	margin-top: 5px;
  }

  .main-content{
  	margin-top: 167px;
  }

	.top-nav {
		padding: 10px 15px;
	}

  .top-nav .top-right{
  	text-align: right;
  }

  .table-title{
  
  }
</style>