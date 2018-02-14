<template>
    <div>
        <Row class="postiFix">
        <Col span="5">
        <button class="button" @click="onTab(index)" v-for="(tabs,index) in tabButton"  :class="{bactive: showTab == index}" style="margin-right:10px">
            <span style="float:right;font-weight:500">/</span>{{tabs}}</button>
            </Col>
            <Col span="3">
            <Button type="primary" size="default" @click="method5('tableExcel')">
                <Icon type="ios-download-outline"></Icon>
                导出excel表
            </Button>
            </Col>
            <Col span="8" style="text-align: center;">
            <Input placeholder="请输入要查询的商户昵称和UID" style="width:55%"></Input>
            <Button type="primary">搜索</Button>
            </Col>
            <Col span="8" style="text-align: center;">
            <Input placeholder="按时间查询" style="width:55%"></Input>
            <Button type="primary">搜索</Button>
            </Col>
        </Row>
<div v-if="showTab === 0">
        <table id="tableExcel" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center">
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
                <td>{{user.nickname}}</td>
                <td>{{user.idnumber}}</td>
                <td>{{user.money/100}}</td>
                <td>{{user.alipay}}</td>
                <td>{{user.inputtime}}</td>
                <td>
                    <Button @click="deleteSuccse(index)" class="ivu-btn-primary ivu-btn-small">成功</Button>
                    <Button @click="deleteFaile(index)" class="ivu-btn-error ivu-btn-small">
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
    name: 'withdrawal',
    data() {
        return {
            tabButton: ['待审核','成功','失败'],
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
          let _fail = this;
           var withdrawid=_fail.users[index].withdrawid;
         
         
       this.$Modal.confirm({
        title: '请输入失败原因',
         content: `<Input type="text" id="result" placeholder="" style="width: 300px;border:1px solid grey"></Input>`,
        onCancel(){

        },
        onOk() {
          _fail.users.splice(index, 1);
          var desc=$("#result").val();
          $.ajax({
                type:"POST",
                url:'http://192.168.2.239/bzadmin/public/index.php/withdrawFail.html',
                data: {withdrawid:withdrawid,desc:desc},
                dataType:"json",
                success: function(msg){
                     if(msg.code=='200'){
                        return;
                    }
                    if(msg.code=='401'){
                        //状态码401  未登录  跳转到登录页面
                        login401();
                        return;
                    }  else {
                        alert(msg.msg);
                    }
                }
            });
        }
      })
    },
    //单独处理成功
      deleteSuccse: function (index) {
          let _this = this;
          var withdrawid=_this.users[index].withdrawid;
          var j = parseInt(withdrawid);
          this.$Modal.confirm({
        title: '提示',
        content: `请确认已成功转账到用户指定账号！`,
        onCancel(){

        },
        onOk() {
          _this.users.splice(index, 1);
             $.ajax({
                type: "POST",
                url:'http://192.168.2.239/bzadmin/public/index.php/withdrawSuccess.html',
                data: {withdrawid:j},
                success: function(msg){
                    if(msg.code=='200'){
                        return;
                    }
                    if(msg.code=='401'){
                        //状态码401  未登录  跳转到登录页面
                        login401();
                        return;
                    }  else {
                        alert(msg.msg);
                    }
                }

            });
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
    this.$http.get("http://192.168.2.239/bzadmin/public/index.php/withdrawList.html").then((data) => {
      // console.log(data.data);
      // console.log(JSON.stringify(data.data));
      this.users = data.data.data;
      this.users = this.users.map((ele) => {
        ele.isIn = false;
        return ele;
      })
    }),
    this.$http.get("http://192.168.2.239/bzadmin/public/index.php/withdrawList.html").then((data) => {
      this.comments = data.data.data;
    }),
      this.$http.get("http://192.168.2.239/bzadmin/public/index.php/withdrawList.html").then((data) => {
      this.todos = data.data.data;
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