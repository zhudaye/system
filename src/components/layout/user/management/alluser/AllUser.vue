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
          <strong>&nbsp;&nbsp;注册时间：</strong>
          <DatePicker type="date" @on-change="datenum" placeholder="Select date" style="width:55%" v-model="date"></DatePicker>
          </Col>
        </Row>
        <Row class="Row45">
          <Col span="8">
          <strong> 推&nbsp;&nbsp;&nbsp;荐：</strong>
          <Select v-model="model1" style="width:55.5%" placeholder="点击是否推荐">
            <Option v-for="item in recommend" :value="item.value" :key="item.value">
              {{ item.label }}
            </Option>
          </Select>
          </Col>
          <Col span="8" style="text-align: center;">
          <strong> &nbsp;用&nbsp;户&nbsp;组&nbsp;：</strong>
          <Select v-model="model2" style="width:55%" placeholder="选择用户组">
            <Option v-for="item in usertype" :value="item.value" :key="item.value">
              {{ item.label }}
            </Option>
          </Select>
          </Col>
          <Col span="8" style="text-align: center;">
          <strong> 禁止用户组：</strong>
          <Select v-model="model3" style="width:55%" placeholder="选择是否禁止">
            <Option v-for="item in ban" :value="item.value" :key="item.value">
              {{ item.label }}</Option>
          </Select>

          </Col>
        </Row>
      </div>
      <div class="userTiltleRi" style="text-align:center">
        <Button type="primary" icon="ios-search" size="large" @click="serch" style="float:left; top:34%; left:81%; position:absolute;">Search</Button>
      </div>
    </div>
    <table id="tableExcel" class="mtp57" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center">
      <tr class="title">
        <th>
          <Checkbox v-model="allSelect" @on-change="selectAll"></Checkbox>
        </th>
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
        <td>{{todo.memberid}}</td>

        <td v-if="todo.usertype==1">
          <span>普通</span>
        </td>
        <td v-if="todo.usertype==2">设计师</td>
        <td v-if="todo.usertype==3">商户</td>
        <td>{{todo.nickname}}</td>
        <td>{{todo.idnumber}}</td>

        <td v-if="todo.sex==1">男</td>
        <td v-if="todo.sex==2">女</td>

        <td>{{todo.phone}}</td>
        <td v-if="todo.wxid!=null">
          <Icon type="close"></Icon>
        </td>
        <td v-else>
          <Icon type="checkmark"></Icon>
        </td>
        <td v-if="todo.qqid!=null">
          <Icon type="close"></Icon>
        </td>
        <td v-else>
          <Icon type="checkmark"></Icon>
        </td>
        <td v-if="todo.sinaid!=null">
          <Icon type="close"></Icon>
        </td>
        <td v-else>
          <Icon type="checkmark"></Icon>
        </td>
        <td v-if="todo.master==0">
          <Icon type="close"></Icon>
        </td>
        <td v-else>
          <Icon type="checkmark"></Icon>
        </td>
        <td>{{todo.inputtime}} </td>
        <td>{{todo.lasttime}} </td>
        <td>
  <router-link class="ivu-btn ivu-btn-primary ivu-btn-small" :to="{ path:'/layout/user/management/usermanagement', query: { num:  1} }"
         >管理</router-link>
          <router-link class="ivu-btn ivu-btn-success ivu-btn-small" v-bind:to="'/layout/user/management/earnings'">收益</router-link>
          <!-- <Button type="warning" size="small">IP</Button>
          <Button type="info" size="small">详情</Button> -->
           <!-- 禁止用户 -->
          <router-link class="ivu-btn ivu-btn-warning ivu-btn-small" v-bind:to="'/layout/user/management/banusers'">IP</router-link>
          <!-- hy -->
          <router-link class="ivu-btn ivu-btn-info ivu-btn-small" v-bind:to="'/layout/user/management/details'">详情</router-link>
          <Button type="error" size="small" @click="deleteOrder(index)" :id="todo.id">
            <i class="ivu-icon ivu-icon-trash-a" style="font-size:17px;line-height:18px;"></i>
          </Button>
        </td>
      </tr>
    </table>
    <div class="mtp10 ivu-row">
      <div class="ivu-col ivu-col-span-8">
        <!-- <Button type="primary" @click="addOrder">添加</Button> -->
        <router-link class="ivu-btn ivu-btn-primary" v-bind:to="'/layout/user/management/adduser'">添加</router-link>
        <Button type="error" @click="deleteOrderAll">删除</Button>
      </div>
      <div class="ivu-col ivu-col-span-8">
        <!--  -->
        <!-- <Page :total="40" size="small" show-elevator show-sizer @on-change="pagesize"></Page> -->
          <Page class="dbBtn-in" :total=" this.totalNum " size="small" placement="top" @on-change='pageCur' @on-page-size-change='pageSize' show-elevator show-sizer></Page>
      </div>
      <div class="ivu-col ivu-col-span-8" style="text-align: right;"> </div>
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
      model2: "",
      model3: "",
      pageC: '1',
      pageS: '10',
      totalNum: 0,
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
  mounted: function () {
    this.$nextTick(function () {
      //保证this.$el已经插入文档
      this.chuan();
    })
  },
  methods: {
    selectAll() {
      this.$nextTick(function () {
        this.todos = this.todos.map((ele) => {
          ele.isIn = this.allSelect;
          return ele;

        })
      })

    },
    topage() {
      this.chuan();
    },
    chuan() {
      var _this = this;
     this.$http.get("http://192.168.2.239/bzadmin/public/index.php/memberList.html?page="+this.pageC+'&&pagesize='+this.pageS+'&&category='+this.cateName).then((data) => {
      _this.todos = data.data.data;
      _this.totalNum = data.data.total;
      _this.todos = this.todos.map((ele) => {
        ele.isIn = false;
        return ele;
      });
    })
      //  页面跳转，每页数目,用户情况

      // this.$http.post("http://192.168.2.239/bzadmin/public/index.php/memberList.html?page=" + this.pageC + '&&pagesize=' + this.pageS + '&&category=' + this.cateName).then(function (res) {
      //   _this.todos = res.data.data;
      //   _this.totalNum = res.data.total;
      //   _this.totalNum = res.data.total;
      //   console.log("chuan么她")
      // }, function (res) {

      // });
    },
    pageCur(numC) {
      this.pageC = numC;
      console.log('page' + this.pageC);
      this.topage();
    },
    pageSize(numS) {
      this.pageS = numS;
      console.log(this.pageS);
      this.topage();
    },
    dReturn() {
      this.$router.go(-1);
    },
    // pagesize(num){
    //   //页码数
    //   var that=num;
    //   alert(that);
    // },

    datenum(number) {
      var dataa = number;
      alert(dataa);
    },
    serch() {
      alert(this.username + this.uid + this.model1);
    },
    onTab(index) {
      this.showTab = index;
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
      this.$Modal.confirm({
        title: '提示',
        content: `是否确认删除该用户`,
        onCancel() {

        },
        onOk() {
          _this.todos.splice(index, 1);

        }
      })
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
      //选取选中的数组
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].isIn) {
          console.log(this.todos[i].id);
          this.todos[i].id.splice(1, 1);
        }
      }
      
      var data = { orderid: orderidTemp };
      this.$Modal.confirm({
        title: '提示',
        content: `是否确认删除该用户`,
        onCancel(index) {  },
        onOk(index) {
          //传给后台的值 选中的推送工厂
          var data = { orderid: orderidTemp };
          //成功后操作
          $("input:checkbox:checked").parent().parent().parent().parent().remove();
        }
      })
    }
  },
  created() {
    this.chuan();
    // this.$http.get("http://192.168.2.239/bzadmin/public/index.php/memberList.html?page="+this.pageC+'&&pagesize='+this.pageS+'&&category='+this.cateName).then((data) => {
    //   this.todos = data.data.data;
    //   this.totalNum = data.data.total;
    //   this.todos = this.todos.map((ele) => {
    //     ele.isIn = false;
    //     return ele;
    //   });

    // })
    //缓存tab等于1
    sessionStorage.setItem('showTab', 1)
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
</style>