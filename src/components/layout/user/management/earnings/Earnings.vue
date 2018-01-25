<template>
   <div>
      <Row class="top-nav">
         <Col span="24" class="top-left mb20">
         <h2 style="color:#495060">
            普通用户
            <strong style="color:#1c2437;font-size:22px;">用户昵称</strong>
            的收益管理
            <span class="notice">（注：以人民币为单位）</span>
         </h2>
         </Col>
      </Row>
      <Table border :columns="columns1" :data="data1"></Table>
      <h2 style="color:#495060">
         <strong style="color:#1c2437;font-size:22px;">用户昵称</strong> 的提现记录
      </h2>
      <Table border :columns="columns2" :data="data2"></Table>
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
   name: 'earnings',
   data() {
      return {
         columns1: [
            {               align: 'center',
               title: '总收益（元）',
               key: 'name'
            },
            {               align: 'center',
               title: '当前余额（元）',
               key: 'age'
            },
            {               align: 'center',
               title: '已提现（元）',
               key: 'address'
            },
            {               align: 'center',
               title: '已卖出（件）',
               key: 'address'
            },
            {               align: 'center',
               title: '产品收益（元）',
               key: 'address'
            }
         ],
         columns2: [
            {               align: 'center',
               title: '支付宝名称',
               key: 'name'
            },
            {               align: 'center',
               title: '支付宝账户',
               key: 'age'
            },
            {               align: 'center',
               title: '手机号',
               key: 'address'
            },
            {               align: 'center',
               title: '提现金额',
               key: 'address'
            },
            {               align: 'center',
               title: '提现状态',
               key: 'address'
            },
            {               align: 'center',
               title: '申请提现时间',
               key: 'address'
            },
            {               align: 'center',
               title: '完成提现时间',
               key: 'address'
            }
         ],
         data1: [],
         data2: [],
      }
   },
   created() {
      this.$http.get("http://jsonplaceholder.typicode.com/comments").then((data) => {
         // this.data1 = data.data;
      }),
         this.$http.get("http://jsonplaceholder.typicode.com/todos").then((data) => {
            // this.data2 = data.data;
         })
   }
}
</script>
