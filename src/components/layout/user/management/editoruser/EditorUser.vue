<template>
   <Form ref="formValidate" :model="formValidate"  :label-width="90" style="width:25%; ">
      <h1 >编辑
         <span style="color:#ff9900">普通用户组</span>
      </h1>
      <FormItem label="用户组头衔" prop="name" style="margin-top:20px">
         <Input v-model="formValidate.name" placeholder="请输入规定格式的昵称"></Input>
      </FormItem>
      <FormItem label="访问权限：" prop="sex">
         <RadioGroup v-model="disabledGroup">
            <Radio label="正常访问"></Radio>
            <Radio label="禁止访问"></Radio>
         </RadioGroup>
      </FormItem>
      <FormItem>
         <router-link class="ivu-btn" v-bind:to="'/layout/user/usergroup/editoruser'">返回上一步</router-link>
         <Button type="primary" @click="handleSubmit('formValidate')">确定</Button>
         
      </FormItem>
   </Form>
</template>
<script>
export default {
   name: 'adduser',
   data() {
      return {

         disabledSingle: true,
         disabledGroup: '正常访问',

         formValidate: {
            name: '',
            phone: '',
            sex: '',
            usertype: [],
            password: '',
         },

      }
   },
   methods: {
      handleSubmit(name) {
         this.$refs[name].validate((valid) => {
            if (valid) {
               this.$Message.success('成功!');
            } else {
               this.$Message.error('错误!');
            }
         })
      },
      handleReset(name) {
         this.$refs[name].resetFields();
      },

   }
}
</script>
<style>
.layout-content {
  background: #f5f7f9 !important;
}
</style>