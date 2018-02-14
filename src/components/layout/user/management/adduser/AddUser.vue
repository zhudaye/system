<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="90" style="width:25%">
       <h1>添加用户</h1>
		  <FormItem label="登陆账号：" prop="phone">
            <Input v-model="formValidate.phone" placeholder="请输入规定字符的手机号"></Input>
        </FormItem>
        <FormItem label="登陆昵称：" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入规定格式的昵称"></Input>
        </FormItem>
		   <FormItem label="用户密码：" prop="password" >
        <Input type="password" v-model="formValidate.password" placeholder="请输入规定格式的密码">
            </Input>
        </FormItem>
        <FormItem label="性别：" prop="sex">
            <RadioGroup v-model="formValidate.sex">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="用户组：" prop="usertype">
				<RadioGroup v-model="formValidate.usertype">
                <Radio label="male">设计师</Radio>
                <Radio label="female">普通用户</Radio>
                <Radio label="indefi">商户组</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
			<router-link class="ivu-btn"  v-bind:to="'/layout/user/Management'">取消</router-link>
            <!-- <Button type="ghost"   @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button> -->
        </FormItem>
    </Form>
</template>
<script>
    export default {
		  name: 'adduser',
        data () {
            return {
                formValidate: {
                    name: '',
                    phone: '',
                    sex: '',
                    usertype: '',
                    password: '',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输入规定字符的手机号', trigger: 'blur' },
                    ],
                    sex: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    usertype: [
                    { required: true, message: '请选择用户类型', trigger: 'change' }
                    ],
                     password: [
                        { required: true, message: '请输入规定格式的密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '请输入规定格式的密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('成功!');
                    } else {
                        this.$Message.error('错误!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            
        }
    }
</script>
<style>
.layout-content{background: #f5f7f9!important}
</style>