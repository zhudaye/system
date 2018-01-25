<template>
  <div>
    <Row>
      <Col span="24">
      <h2 style="color:#495060">
        工物流管理信息
      </h2>
      </Col>
    </Row>
    <table id="tableExcel" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center;margin-top:20px;">
      <tr class="title">
        <th>
          <Checkbox v-model="allSelect" @on-change="selectAll"></Checkbox>
        </th>
        <th>物流名称</th>
        <th>首重费用</th>
        <th>加价费用</th>
        <th>加价件数</th>
        <th>缩写</th>
        <th>启用</th>
        <th>关闭</th>
        <th>顺序</th>
        <th>操作</th>
      </tr>
      <tr v-for="(todo, index) in todos" :key="todo.id">
        <td>
          <Checkbox v-model="todo.isIn" @on-change="changeAllSelect"></Checkbox>
        </td>
        <td><input type="text" :disabled='todo.revisability' v-model="todo.title"></td>
        <td><input type="text" :disabled='todo.revisability' v-model="todo.price"></td>
        <td><input type="text" :disabled='todo.revisability' v-model="todo.riseprice"></td>
        <td><input type="text" :disabled='todo.revisability' v-model="todo.risenumber"></td>
        <td><input type="text" :disabled='todo.revisability' v-model="todo.com"></td>
        <td>
          <Radio v-model="todo.useRadio" @on-change="radioChange($event, todo, 'useRadio')"></Radio>
        </td>

        <td>
          <Radio v-model="todo.unRadio" @on-change="radioChange($event, todo, 'unRadio')"></Radio>
        </td>
        <td><input type="text" :disabled='todo.revisability' v-model="todo.listorder" style="width:30px"></td>
        <td>
          <Button type="primary" size="small" v-model="todo.revisability" @click="changewuliu($event, todo, 'revisability')">
            {{todo.revisability ? '修改' : '保存'}}
          </Button>
          <Button type="error" size="small" @click="deleteOrder(index)" :id="todo.id">
            <i class="ivu-icon ivu-icon-trash-a" style="font-size:17px;line-height:18px;"></i>
          </Button>
        </td>
      </tr>
    </table>
    <div class="mtp10 ivu-row">
      <div class="ivu-col ivu-col-span-8">
        <Button type="primary" @click="addOrder">增加</Button>
        <Button type="error" @click="deleteOrderAll">删除</Button>
      </div>
      <div class="ivu-col ivu-col-span-8" style="text-align: right;">
      </div>
    </div>
  </div>

</template>
<script>

export default {
  name: 'Logistic',
  data() {
    return {
      todos: [],
      allSelect: false,
      username: "",
      uid: "",
      date: "",
      model1: "",
      model2: "",
      model3: "",
    }
  },
  watch: {
    todos() {
      this.changeAllSelect();
    }
  },
  methods: {
    radioChange(e, element, who) {
      // 单选框改变时
      console.log(who.value)
      console.log(element.unRadio)
      if (who === 'useRadio') {
        element.unRadio = false
      } else if (who === 'unRadio') {
        element.useRadio = false
      }
    },
    selectAll() {
      this.$nextTick(function () {
        this.todos = this.todos.map((ele) => {
          ele.isIn = this.allSelect;
          return ele;

        })
      })
    },
    changeAllSelect() {
      for (let i = 0; i < this.todos.length; i++) {
        if (!this.todos[i].isIn) {
          this.allSelect = false;
          return;

        }
      }
      this.allSelect = true;
    },
    //单独处理失败
    deleteOrder: function (index) {
      let _this = this;
      var id = _this.todos[index].id;
      this.$Modal.confirm({
        title: '提示',
        content: `请确认是否删除该物流`,
        onCancel() {

        },
        onOk() {
          _this.todos.splice(index, 1);
          $.ajax({
            type: "POST",
            url: 'http://192.168.2.239/bzadmin/public/index.php/expressDel.html',
            data: { id: id },
            dataType: "json",
            success: function (msg) {
              if (msg.code == '200') {
                return;
              }
              if (msg.code == '401') {
                //状态码401  未登录  跳转到登录页面
                login401();
                return;
              } else {
                alert(msg.msg);
              }
            }
          });
        }
      })
    },
    //修改保存
    changewuliu: function (e, element, who) {
      //是否为新增

      element.revisability = !element.revisability;
      //传给后台的值
      let status;

      if (element.title == null || element.risenumber == null) {
        this.$Message.warning('请完善信息');
      }
      if (element.useRadio === null || element.unRadio === null) {
        this.$Message.error('请选择是否启用');
      } else if (element.useRadio == true) {
        status = 1
      } else {
        status = 0
      } if (element.isNew == false) {
        var data = { id: element.id, title: element.title, com: element.com, price: element.price, risenumber: element.risenumber, riseprice: element.riseprice, status: status, listorder: element.listorder };

        console.log(element.title)
        $.ajax({
          type: "POST",
          url: 'http://192.168.2.239/bzadmin/public/index.php/expressEdit.html',
          data: data,
          dataType: "json",
          success: function (msg) {
            if (msg.code == '200') {
              return;
            }
            if (msg.code == '401') {
              //状态码401  未登录  跳转到登录页面
              login401();
              return;
            } else {
              // alert(msg.msg);
            }
          }

        });
      } else if (element.isNew == true) {
        var dataNew = { title: element.title, com: element.com, price: element.price, risenumber: element.risenumber, riseprice: element.riseprice, status: status, listorder: element.listorder };
        $.ajax({
          type: "POST",
          url: 'http://192.168.2.239/bzadmin/public/index.php/expressAdd.html',
          data: dataNew,
          dataType: "json",
          success: function (msg) {
            if (msg.code == '200') {
              return;
            }
            if (msg.code == '401') {
              //状态码401  未登录  跳转到登录页面
              login401();
              return;
            } else {
              // alert(msg.msg);
            }
          }

        });

      }

    },

    //批量删除
    deleteOrderAll: function (data) {
      var orderid = data;
      var orderidTemp = "";
      $('input:checkbox[name="orderid"]:checked').each(function (i) {
        if (0 == i) {
          orderidTemp = $(this).val();
        } else {
          orderidTemp += ("," + $(this).val());
        }
      });

      //选取选中的数组 需要清空上一次的数组
      for (let i = 0; i < this.todos.length; i++) {

        if (this.todos[i].isIn) {
          // console.log(this.todos[i].id)
          var a = this.todos[i].id + ",";
          console.log(a)

        }
      }
      //llllllllllllllllllllxxxxxxxxxxxddddd
      var data = { orderid: orderidTemp };
      this.$Modal.confirm({
        title: '提示',
        content: `是否删除该物流方式`,
        onCancel(index) {

        },
        onOk(index) {
          //传给后台的值 选中的推送工厂
          var data = { orderid: orderidTemp };
          //成功后操作
          $("input:checkbox:checked").parent().parent().parent().parent().remove();
        }
      })
    },
    addOrder() {
      let member = { ...this.todos[0] }
      for (const key in member) {
        if (member.hasOwnProperty(key)) {
          member[key] = null;
          member.isNew = true;
        }
      }
      this.todos.push(member)
    }
  },
  created() {
    //http://jsonplaceholder.typicode.com/todos
    //http://192.168.2.239/bzadmin/public/index.php/expressList.html
    this.$http.get("http://192.168.2.239/bzadmin/public/index.php/expressList.html").then((data) => {
      // this.todos = data.data; // 这一句就是废话，虽然不知道为什么，但是有这句话后下面的遍历没有加上监听器，视图就没有更新
      this.todos = data.data.data.map((ele) => {
        if (ele.status == 0) {
          ele.useRadio = false;
          ele.unRadio = true;
        }
        else if (ele.status == 1) {
          ele.useRadio = true;
          ele.unRadio = false;
        }
        ele.isNew = false;
        ele.isIn = false;
        //命名revisability
        ele.revisability = true;
        ele.price = ele.price / 100;
        ele.riseprice = ele.riseprice / 100;
        return ele;
      });
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
input {
  border: 1px solid #eded;
  width: 70px;
  text-align: center;
  height: 27px;
}

.active {
  color: #fff !important;
  background-color: #19be6b !important;
  border-color: #19be6b !important;
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
#tableExcel td:last-child {
  width: 250px;
}
input:disabled {
  border: hidden;
  background-color: #fff;
  color: #000;
}
</style>