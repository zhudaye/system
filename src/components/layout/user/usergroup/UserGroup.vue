<template>
	<div>
		<Row class="top-nav">
			<Col span="24" class="top-left mb20">
			<h2 style="color:#495060">
				<strong style="color:#1c2437;font-size:22px;margin-left:20px">管理用户组</strong>
			</h2>
			</Col>
		</Row>
		
		<table id="tableExcel" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:left;margin-top:0px;text-id">
			<tr class="title">
				<th>
					<div class="ivu-table-cell">
						<span>头衔</span>
					</div>
				</th>
				<th>
					<div class="ivu-table-cell">
						<span>权限</span>
					</div>
				</th>
				<th>
					<div class="ivu-table-cell">
						<span>排序</span>
					</div>
				</th>
			</tr>
			<tr>
				<td>
					<div style="padding-left:9px">
						<span>普通用户</span>
					</div>
				</td>
				<td>
 <div style="padding-left:10px">
 <router-link class="ivu-btn ivu-btn-primary ivu-btn-small" v-bind:to="'/layout/user/management/editoruser'">编辑</router-link>
 </div>
				</td>
				<td>
					<div style="padding-left:12px">
						<input style="width:40px; border: 1px solid #ff9900;text-align:center" type="text"  value="1"> 
					</div>
				</td>
			</tr>
		</table>

		<div class="mtp10 ivu-row">
			<div class="ivu-col ivu-col-span-12">
				<router-link class="ivu-btn ivu-btn-primary " v-bind:to="'/layout/user/management/alluser'">返回上一页</router-link>
			</div>

			<div class="ivu-col ivu-col-span-12" style="text-align: right;">

			</div>
		</div>
	</div>

</template>
<script>
export default {
	name: 'UserGroup',
	data() {
		return {
			columns1: [
				{
					align: 'center',
					title: '头衔',
					key: 'name'
				},
				{
					align: 'center',
					title: '权限',
					key: 'age'
				},
				{
					align: 'center',
					title: '排序',
					key: 'address'
				},
			],
			data1: [
				{
					name: '普通用户',
					age: 18,
					address: '设计师',
					date: '1'
				},
				{
					name: '设计师',
					age: 24,
					address: 'London No. 1 Lake Park',
					date: '2'
				},
				{
					name: 'Joe Black',
					age: 30,
					address: 'Sydney No. 1 Lake Park',
					date: '2016-10-02'
				},
			],
		}
	},
	created() {
		this.$http.get("http://jsonplaceholder.typicode.com/comments").then((data) => {
			// this.data1 = data.data;
		})
	}
}
</script>
<style scope>
body {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, \\5fae软雅黑, Arial, sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #495060;
}
#tableExcel {
  border: 1px solid #e9eaec;
}
 
.active {
    color: #fff!important;
    background-color: #19be6b!important;
    border-color: #19be6b!important;
}
.title {
  height: 32px !important;
  background-color: #f8f8f9 !important;
}
#tableExcel tr {
  background: white;
  line-height: 1.5;
  height: 40px;
}
#tableExcel td,
#tableExcel th {
  border-bottom: 1px solid #e9eaec;
}
 #tableExcel td:last-child{width:250px;}
</style>