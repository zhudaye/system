<template>
	<div class="determineorder">
		<div class="top-header">		
			<div class="top-header-inner">
				<Row class="top-nav">
		      <Col span="24" class="top-right">
		        <DatePicker v-model="search" type="date" placeholder="按时间查询" style="width: 200px"></DatePicker>
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
		          <Col span="8">
		            物流
		          </Col>
		          <Col span="3">
		            状态
		          </Col>
		        </Row>
		      </Col>
		    </Row>
		  </div>
	  </div>
    <my-determune class="main-content" :passvalue="formatdate"></my-determune>
	</div>
</template>
<script>
  import Determune from './Determine'
	export default {
		name: 'determineorder',
		components: {
			'my-determune': Determune
		},
		data() {
			return {
        search: ''
			}
		},
		computed: {
			formatdate() {
				if(!this.search) return false
				return new Date(this.search).Format("yyyy-MM-dd")
			}
		},
    methods: {
      changePush(status) {
				this.$store.commit('changeIsPush', status);
			}
    }
	}
</script>
<style scoped>
  @import url('../order.css')
</style>