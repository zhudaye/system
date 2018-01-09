<template>
	<Row class="general-situation">
    <Col span="6">
		<span>0</span>
		<span>待处理订单</span>
    </Col>
    <Col span="6">
	    <span>0</span>
			<span>今日已处理订单</span>
    </Col>
    <Col span="6">
	    <span>0</span>
			<span>全部订单</span>
    </Col>
    <Col span="6">
	    <span>0</span>
			<span>历史未处理订单</span>
    </Col>
  </Row>
</template>
<script>
export default {

}
</script>
<style scoped>
  .general-situation>div{
  	padding: 40px 0;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    background-color: #fff;
  }

  .general-situation>div>span{
  	display: inline-block;
  	text-align: center;
  	width: 100%;
  }
</style>