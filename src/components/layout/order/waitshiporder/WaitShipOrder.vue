<template>
	<div class="waitshiporder">
		<div class="top-header">		
			<div class="top-header-inner">
				<Row class="top-nav">
		      <Col span="12" class="top-left"> 
		        <Menu mode="horizontal" theme="light" :active-name="pushed == 'yes' ? 'yes' : 'no'"  @on-select="changePush">
		          <MenuItem name="no">
                未推送
              </MenuItem>
              <MenuItem name="yes">
                已推送
              </MenuItem>
            </Menu>
			    </Col>
		      <Col span="12" class="top-right">
		        <DatePicker v-model="search" type="date" placeholder="按时间查询" style="width: 200px"></DatePicker>
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
    <keep-alive><component :is="pushed == 'yes' ? 'my-pushedorder' : 'my-waitpushorder'" class="main-content" :passvalue="passvalue"></component></keep-alive>
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
		computed: {
			pushed () {
				return this.$store.state.order.isPushed
			}
		},
		data() {
			return {
        search: '',//搜索内容
        passvalue:''
			}
		},
		mounted(){
		},
    methods: {
      changePush(status) {
      	this.search = '';
				this.$store.commit('changeIsPush', status);
			},
			submit() {
				if(this.search == '' || this.passvalue == new Date(this.search).Format("yyyy-MM-dd")) {
					return
				}
				this.passvalue = new Date(this.search).Format("yyyy-MM-dd");
			}
    }
	}
</script>
<style scoped>
  @import url('../order.css');
  .top-left .ivu-menu-horizontal{
  	height: 32px;
  	line-height: 32px;
  }

  .top-left .ivu-menu-horizontal:after{
  	width: 0;
  }
</style>