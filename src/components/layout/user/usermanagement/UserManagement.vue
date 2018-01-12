<template>
    <div>
        <Row class="postiFix2">
           <Col span="24">
           <h2 style="color:#495060">
              <strong style="color:#1c2437;font-size:22px;">用户昵称</strong>
              的订单管理 - 
              <span style="color:#1c2437;"  v-if="showTab === 0"> 待支付</span>
               <span style="color:#1c2437;"  v-if="showTab === 1"> 已支付</span>
                <span style="color:#1c2437;"  v-if="showTab === 2"> 已取消</span>
                 <span style="color:#1c2437;"  v-if="showTab === 3"> 已快递</span>
                  <span style="color:#1c2437;"  v-if="showTab === 4"> 已完成</span>
              </h2>
              </Col>
        <Col span="8">
  <Button @click="onTab(index)" v-for="(tabs,index) in tabButton" :class="{active: showTab == index}" style="margin-right:10px">{{tabs}}</Button>
            </Col>
            <Col span="8" style="text-align: center;">
             
            </Col>
            <Col span="8" style="text-align: right;">
            <Input placeholder="按时间查询" style="width:55%"></Input>
            <Button type="primary">搜索</Button>
            </Col>
        </Row>
        
<div v-if="showTab === 0">
   
        <table id="tableExcel" class="mtp57" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center">
            <tr class="title">
                <th> <Checkbox v-model="allSelect" @on-change="selectAll"></Checkbox></th>
                <th>用户昵称</th>
                <th>用户ID</th>
                <th>提现金额</th>
                <th>支付宝信息</th>
                <th>申请时间</th>
                <th>状态</th>
            </tr>
            <tr v-for="(user, index) in users" :key="user.id">
                <td>
                  <Checkbox v-model="user.isIn" @on-change="changeAllSelect"></Checkbox>
                </td>
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.phone}}</td>
                <td>{{user.website}}</td>
                <td>
                    <Button @click="deleteSuccse" class="ivu-btn-primary ivu-btn-small">成功</Button>
                    <Button @click="deleteFaile(index)" class="ivu-btn-error ivu-btn-small" :id="user.id">
                        失败
                    </Button>
                </td>
            </tr>
        </table>
        <div class="mtp10 ivu-row">
            <div class="ivu-col ivu-col-span-12">
                <Button type="ghost" @click="deleteSuccseAll">批量处理成功</Button>
            </div>
            <div class="ivu-col ivu-col-span-12" style="text-align: right;">
                <Button type="ghost"  @click="deleteFaileAll">批量处理失败</Button>
            </div>
        </div>
</div>
<div  v-if="showTab === 1">  
     <table id="tableExcel" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center">
            <tr class="title">
                <th>用户昵称</th>
                <th>用户ID</th>
                <th>提现金额</th>
                <th>支付宝信息</th>
                <th>申请时间</th>
                <th>状态</th>
            </tr>
            <tr v-for="comment in comments">
                <td>{{comment.id}}</td>
                <td>{{comment.name}}</td>
                <td>{{comment.email}}</td>
                <td>{{comment.email}}</td>
                <td>{{comment.email}}</td>
                <td>  提现成功 </td>
            </tr>
        </table>
        </div>
<div  v-if="showTab === 2">
     <table id="tableExcel" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center">
            <tr class="title">
                <th>用户昵称</th>
                <th>用户ID</th>
                <th>提现金额</th>
                <th>支付宝信息</th>
                <th>申请时间</th>
                <th>失败原因</th>
            </tr>
            <tr v-for="todo in todos">
                <td>{{todo.id}}</td>
                <td>{{todo.userId}}</td>
                <td>{{todo.userId}}</td>
                <td>{{todo.userId}}</td>
                <td>{{todo.title}}</td>
                <td>{{todo.title}} </td>
            </tr>
        </table>
</div>
    </div>
</template>

<script>

export default {
    name: 'UserManagement',
    data() {
        return {
            tabButton: ['待支付','已支付','已取消','已快递','已完成'],
            showTab : 0,
           users: [],
           comments: [],
           todos: [],
          allSelect: false,
        }
    },
    watch: {
      users() {
        this.changeAllSelect();
      }
    },
    methods: {      
      selectAll() {
        this.$nextTick(function(){
          this.users = this.users.map((ele) => {
            ele.isIn = this.allSelect;
            return ele;
          })
        })
      },
       onTab(index) {
       this.showTab = index;
      },
        changeAllSelect(){
            for(let i=0; i< this.users.length; i++){
              if(!this.users[i].isIn){
                this.allSelect = false;
                return;
              }
            }
            this.allSelect = true;
        },
        method5(table) {
            method5(table);
        },
        chkAll(obj){
            chkAll(obj)
        },
        method6() {
            $("#tableExcel").table2excel({
                exclude: ".noExl", //过滤位置的 css 类名
                filename: "你想说啥" + new Date().getTime() + ".xls", //文件名称
                name: "待审核.xlsx",
                exclude_img: true,
                exclude_links: true,
                exclude_inputs: true
            });
        },
          //单独处理失败
       deleteFaile: function (index) {
         let _this = this;
       this.$Modal.confirm({
        title: '请输入失败原因',
         content: `<Input type="text" id="result" placeholder="" style="width: 300px"></Input>`,
        onCancel(){

        },
        onOk() {
         _this.users.splice(index, 1);
          
        }
      })
    },
    //单独处理成功
      deleteSuccse: function (event) {
       this.$Modal.confirm({
        title: '提示',
        content: `请确认已成功转账到用户指定账号！`,
        onCancel(){

        },
        onOk() {
          // _this.data.splice(index, 1);
          // _this.data.splice(index, 1);
          if (event) {
          var id = event.target.id;
          var order=event.target;
          //  console.log(id);
          $(order).parent().parent().parent().remove();
          }
        }
      })
    },
        //批量处理失败
        deleteFaileAll: function (data) {
            var orderid = data;
            var orderidTemp = "";
            $('input:checkbox[name="orderid"]:checked').each(function (i) {
                if (0 == i) {
                    orderidTemp = $(this).val();
                } else {
                    orderidTemp += ("," + $(this).val());
                }

            });
            //成功后操作
            $("input:checkbox:checked").parent().parent().parent().parent().remove();
            var data = { orderid: orderidTemp };
            this.$Modal.confirm({
                title: '请输入失败原因',
                content: `<Input type="text" id="result" placeholder="" style="width: 300px"></Input>`,
                onCancel(index) {

                },
                onOk(index) {

                }
            })
        },
        //批量处理成功
        deleteSuccseAll() {
            this.$Modal.confirm({
                title: '提示',
                content: `请确认已成功转账到用户指定账号！`,
                onCancel() {

                },
                onOk() {

                }
            }
            )
        },
    },
  created() {
    this.$http.get("http://jsonplaceholder.typicode.com/users").then((data) => {
      // console.log(data.data);
      // console.log(JSON.stringify(data.data));
      this.users = data.data;
      this.users = this.users.map((ele) => {
        ele.isIn = false;
        return ele;
      })
    }),
    this.$http.get("http://jsonplaceholder.typicode.com/comments").then((data) => {
      this.comments = data.data;
    }),
      this.$http.get("http://jsonplaceholder.typicode.com/todos").then((data) => {
      this.todos = data.data;
    })
  }
}
 
   function chkAll(obj){ 
      var objs = document.getElementsByName('sports[]');
    for (var i = objs.length - 1; i >= 0; i--) {
      objs[i].checked = obj.checked;
    };
  }

 function method5(tableid) {
    tableToExcel(tableid);
    
}
var tableToExcel = (function tableToExcel() {
    var uri = 'data:application/vnd.ms-excel;base64,',
    template = '<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>',
    base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) },
            format = function(s, c) {
                return s.replace(/{(\w+)}/g,
                        function(m, p) { return c[p]; }) }
    return function(table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
        window.location.href = uri + base64(format(template, ctx))
    }
})()
 
   
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
#tableExcel td:last-child{width:150px;}
</style>