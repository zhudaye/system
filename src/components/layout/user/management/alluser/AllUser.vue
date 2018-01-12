<template>
    <div>
      <div class="userTiltle">
      <div class="userTiltleLe">
        <Row class="Row45">
        <Col span="8">
       <strong> 用户名：</strong>
         <Input placeholder="请输入要查询的用户昵称" style="width:55%" v-model="username"></Input>
            </Col>
            <Col span="8" style="text-align: center;">
         <strong> 用户UID：</strong>
            <Input placeholder="请输入要查询的用户UID" style="width:55%" v-model="uid"></Input>
            </Col>
            <Col span="8" style="text-align: center;">
             <strong>注册时间：</strong> 
             <DatePicker type="date" placeholder="Select date" style="width:55%" v-model="date"></DatePicker>
            </Col>
            </Row>
             <Row class="Row45">
             <Col span="8">
            <strong>推荐：</strong>
            <Select v-model="model1" style="width:57%" placeholder="点击是否推荐">
                <Option v-for="item in recommend" :value="item.value" :key="item.value">
                  {{ item.label }}
              </Option>
            </Select>
            </Col>
            <Col span="8" style="text-align: center;">
            <strong> 用户组：</strong>
        <Select v-model="model2" style="width:57%" placeholder="选择用户组">
        <Option v-for="item in usertype" :value="item.value" :key="item.value" >
          {{ item.label }}</Option>
          </Select>
            </Col>
            <Col span="8" style="text-align: center;">
           <strong> 禁止用户组：</strong>
           <Select v-model="model3" style="width:57%" placeholder="选择是否禁止">
         <Option v-for="item in ban" :value="item.value" :key="item.value">
          {{ item.label }}</Option>
          </Select>
         
            </Col>
        </Row>
        </div>

        <div class="userTiltleRi" style="text-align:center">
          <Button type="primary" icon="ios-search" size="large" @click="serch" 
          style="float:left; top:34%; left:81%; position:absolute;">Search</Button>
        </div>
        </div>
        <table id="tableExcel" class="mtp57" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center">
            <tr class="title">
                <th><Checkbox v-model="allSelect" @on-change="selectAll"></Checkbox></th>
                <th>ID</th>
                <th>用户组</th>
                <th>昵称</th>
                <th>UID</th>
                <th>性别</th>
                <th>手机号</th>
                <th>微信</th>
                <th>QQ</th>
                <th>微博</th>
                <th>推荐达人</th>
                <th>注册时间</th>
                <th>最后登录时间</th>
                <th>操作</th>
            </tr>
            <tr v-for="(todo, index) in todos" :key="todo.id">
                <td>
                  <Checkbox v-model="todo.isIn" @on-change="changeAllSelect"></Checkbox>
                </td>
                <td>{{todo.id}}</td>
                <td>{{todo.id}}</td>
                <td>{{todo.completed}}</td>
                <td>{{todo.id}}</td>
                <td>{{todo.userId}}777</td>
                <td>{{todo.id}}18883536</td>
                 <td v-if="todo.completed"><Icon type="close"></Icon></td>
                 <td v-else><Icon type="checkmark"></Icon></td>
                 <td v-if="todo.completed"><Icon type="close"></Icon></td>
                 <td v-else><Icon type="checkmark"></Icon></td>
                 <td v-if="todo.completed"><Icon type="close"></Icon></td>
                 <td v-else><Icon type="checkmark"></Icon></td>
                 <td v-if="todo.completed"><Icon type="close"></Icon></td>
                 <td v-else><Icon type="checkmark"></Icon></td>
                 <td>{{todo.userId}}20-12-=12 16:00:00</td>
                 <td>{{todo.id}}20-12-=12 16:00:00</td>
                 <td>
                  <Button type="primary" size="small">管理</Button>
                  <Button type="success" size="small">收益</Button>
                  <Button type="warning" size="small">IP</Button>
                  <Button type="info" size="small">详情</Button>
                  <Button type="error" size="small" @click="deleteOrder(index)" :id="todo.id"><i class="ivu-icon ivu-icon-trash-a" style="font-size:17px;line-height:18px;"></i></Button>
                 </td>
            </tr>
        </table>
        <div class="mtp10 ivu-row">
            <div class="ivu-col ivu-col-span-8">
                <!-- <Button type="primary" @click="addOrder">添加</Button> -->
        <router-link class="ivu-btn ivu-btn-primary" v-bind:to="'/layout/user/adduser'">添加</router-link>
                <Button type="error"  @click="deleteOrderAll">删除</Button>
            </div>
            <div class="ivu-col ivu-col-span-8">
               <Page :total="40" size="small" show-elevator show-sizer @on-change="pagesize"></Page>
             </div>
            <div class="ivu-col ivu-col-span-8" style="text-align: right;">
              
            </div>
             
        </div>
        
</div>
 
</template>

<script>

export default {
    name: 'Management',
    data() {
        return {
           todos: [],
           allSelect: false,
           username: "",
           uid: "",
           date: "",
           model1: "",
            recommend: [
                    {
                        value: '1',
                        label: '已推荐'
                    },
                    {
                        value: '2',
                        label: '未推荐'
                    },
                ],
                usertype: [
                    {
                        value: '1',
                        label: '商户'
                    },
                    {
                        value: '2',
                        label: '普通商户'
                    },
                      {
                        value: '3',
                        label: '设计师'
                    },
                ],
               ban: [
                    {
                        value: '1',
                        label: '禁止'
                    },
                    {
                        value: '2',
                        label: '未禁止'
                    },
                ],
                
        }
    },
    watch: {
      todos() {
        this.changeAllSelect();
      }
    },
    methods: {      
      selectAll() {
        this.$nextTick(function(){
          this.todos = this.todos.map((ele) => {
            ele.isIn = this.allSelect;
            return ele;
          })
        })
      },
      serch(){
        alert(this.username+this.uid+this.model1);
      },
       onTab(index) {
       this.showTab = index;
      },
        changeAllSelect(){
            for(let i=0; i< this.todos.length; i++){
              if(!this.todos[i].isIn){
                this.allSelect = false;
                return;
              }
            }
            this.allSelect = true;
        },
          //单独处理失败
       deleteOrder: function (index) {
       let _this = this;
       this.$Modal.confirm({
        title: '请输入失败原因',
         content: `<Input type="text" id="result" placeholder="" style="width: 300px"></Input>`,
        onCancel(){

        },
        onOk() {
         _this.todos.splice(index, 1);
          
        }
       })
      },
      //添加
        addOrder() {
     

        }
    },
  created() {
    this.$http.get("http://jsonplaceholder.typicode.com/todos").then((data) => {
      this.todos = data.data;
      this.todos = this.todos.map((ele) => {
        ele.isIn = false;
        return ele;
      })
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