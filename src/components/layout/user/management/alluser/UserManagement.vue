<template>
    <div>
        <Row class="postiFix2">
            <Col span="24">
            <h2 style="color:#495060">
                <strong style="color:#1c2437;font-size:22px;">用户昵称</strong>
                的订单管理 -
                <span style="color:#1c2437;" v-if="showTab == 0"> 已支付</span>
                <span style="color:#1c2437;" v-if="showTab == 1"> 待支付</span>
                <span style="color:#1c2437;" v-if="showTab == 2"> 已取消</span>
                <span style="color:#1c2437;" v-if="showTab == 3"> 已快递</span>
                <span style="color:#1c2437;" v-if="showTab == 4"> 已完成</span>
            </h2>
            </Col>
            <Col span="8">
            <strong style="font-size:15px;">状态：</strong>
  <button class="button" @click="onTab(index)" v-for="(tabs,index) in tabButton" :class="{bactive: showTab == index}" style="margin-right:10px">{{tabs}}<span style="float:right;font-weight:500">/</span></button>
            </Col>
            <Col span="8" style="text-align: center;"></Col>
            <Col span="8" style="text-align: right;">
            <strong style="font-size:15px;">下单时间：</strong>
            <DatePicker type="date" @on-change="datenum" placeholder="Select date" style="width: 60%"></DatePicker>
            <Button type="primary">搜索</Button>
            </Col>
        </Row>

        <div v-if="showTab == 1">
            <Row class="mtp57">
                <Col class="title1" span="24">
                <Button @click="onTab1(index)" v-for="(tabs1,index) in tabButton1" :class="{active: showTab1 == index}" style="margin-left:15px;" size="small">
                    {{tabs1}}
                </Button>
                </Col>
            </Row>
            <div v-if="showTab1 == 0">
                <table id="tableExcel" class="mtop0" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center" v-if="users && users.length > 0">
                    <tr>
                        <th>
                            <Checkbox v-model="allSelect" @on-change="selectAll"></Checkbox>
                        </th>
                        <th>订单号</th>
                        <th>支付时间</th>
                        <th>收货人</th>
                        <th>联系电话</th>
                        <th>状态</th>
                        <th>支付类型</th>
                        <th>金额</th>
                        <th>操作</th>
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
                        <td>{{user.phone}}</td>
                        <td>{{user.website}}</td>
                        <td>
                            <router-link class="ivu-btn ivu-btn-primary ivu-btn-small" v-bind:to="'/layout/user/management/orderdetails'">详情</router-link>
                            <Button @click="Handout(index)" class="ivu-btn-error ivu-btn-small" :id="user.id">
                                分发
                            </Button>
                        </td>
                    </tr>
                </table>
                <div class="mtp10 ivu-row">
                    <div class="ivu-col ivu-col-span-12">
                        <Button type="primary" @click="HandoutAll">分发</Button>
                    </div>

                    <div class="ivu-col ivu-col-span-12" style="text-align: right;">

                    </div>
                </div>
            </div>
            <!-- 已推送未推送 -->
            <div v-if="showTab1 == 1">
                <Table border :columns="columns6" :data="data6"></Table>
            </div>
        </div>

        <!-- 1 -->
        <div v-if="showTab == 0" class="mtp57">
            <Table border :columns="columns7" :data="data6" size="small"></Table>
        </div>
        <!-- 2 -->
        <div v-if="showTab == 2" class="mtp57">
            <Table border :columns="columns7" :data="data6" size="small"></Table>
        </div>
        <!-- 3 -->
        <div v-if="showTab == 3" class="mtp57">
            <Table border :columns="columns7" :data="data6" size="small"></Table>
        </div>
        <!-- 4 -->
        <div v-if="showTab == 4" class="mtp57">
            <Table border :columns="columns7" :data="data6" size="small"></Table>
        </div>

        <!-- 分页 -->
        <div class="ivu-col ivu-col-span-24" style="text-align:center;background: #f5f7f9;">
            <Page :total="40" size="small" show-elevator show-sizer @on-change="pagesize"></Page>
        </div>
    </div>
</template>

<script>

export default {
    name: 'usermanagement',
    data() {
        return {
            tabButton: ['待支付', '已支付', '已取消', '已快递', '已完成'],
            tabButton1: ['未推送', '已推送'],
            showTab: 1,
            showTab1: 0,
            users: [],
            comments: [],
            todos: [],
            pushs: [],
            allSelect: false,
            columns7: [

                {
                    align: 'center',
                    title: '订单号',
                    key: 'id'
                },
                {
                    align: 'center',
                    title: '推送时间',
                    key: 'uid'
                },
                {
                    align: 'center',
                    title: '收件人',
                    key: 'title'
                },
                {
                    align: 'center',
                    title: '联系电话',
                    key: 'phone'
                },
                {
                    align: 'center',
                    title: '支付类型',
                    key: 'address'
                },
                {
                    align: 'center',
                    title: '收件人',
                    key: 'address'
                },
                {
                    title: 'Action',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        console.log('df');
                                        this.$router.push('/layout/user/management/orderdetails');

                                    }
                                }
                            }, '详情'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '删除aa')
                        ]);
                    }
                }
            ],
            columns6: [

                {
                    align: 'center',
                    title: '订单号',
                    key: 'id'
                },
                {
                    align: 'center',
                    title: '推送时间',
                    key: 'uid'
                },
                {
                    align: 'center',
                    title: '收件人',
                    key: 'title'
                },
                {
                    align: 'center',
                    title: '联系电话',
                    key: 'phone'
                },
                {
                    align: 'center',
                    title: '支付类型',
                    key: 'address'
                },
                {
                    align: 'center',
                    title: '收件人',
                    key: 'address'
                },
                {
                    title: 'Action',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '详情'),

                        ]);
                    }
                }
            ],
            data6: []
        }
    },
    watch: {
        users() {
            this.changeAllSelect();
        }
    },
    methods: {
        selectAll() {
            this.$nextTick(function () {
                this.users = this.users.map((ele) => {
                    ele.isIn = this.allSelect;
                    return ele;
                })
            })
        },
        onTab(index) {
            this.showTab = index;
            sessionStorage.setItem('showTab', this.showTab)
            //缓存
            console.log(this.showTab);
        },
        onTab1(index) {
            this.showTab1 = index;
        },
        changeAllSelect() {
            for (let i = 0; i < this.users.length; i++) {
                if (!this.users[i].isIn) {
                    this.allSelect = false;
                    return;
                }
            }
            this.allSelect = true;
        },
        method5(table) {
            method5(table);
        },
        chkAll(obj) {
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
        Handout: function (index) {
            let _this = this;
            this.$Modal.confirm({
                title: '选择推送工厂',
                scrollable: false,
                content: `<input name="Fruit" type="radio" value="1" checked/>一伙人（香港）服装有限公司</br></br>
                          <input name="Fruit" type="radio" value="2" />XXXXXXXXXXXXXXXXX公司`,
                onCancel() {
   
                },
                onOk() {
                    var factory = $('input[name="Fruit"]:checked').val();
                    alert(factory);
                    _this.users.splice(index, 1);

                }
            })
        },
        pagesize(num) {
            //页码数
            var that = num;
            alert(that)
        },
        datenum(number) {



            var dataa = number;

//  var aaatime=new Date(parseInt(number) * 1000).toLocaleString().replace(/:::/g, " ").replace(/日/g, " "); 
             var datee = new Date(Date.parse(dataa.replace(/-/g, "/")));
            var year = datee.getYear();
            var month = datee.getMonth() + 1;
            var date = datee.getDate();
            var hour = datee.getHours();
            var minute = datee.getMinutes();
            var second = datee.getSeconds();
           
            alert( year+":"+month+":"+date+" "+hour+":"+minute+":"+second)
        },

        //单独处理成功
        deleteSuccse: function (event) {
            this.$Modal.confirm({
                title: '提示',
                content: `请确认已成功转账到用户指定账号！`,
                onCancel() {

                },
                onOk() {
                    // _this.data.splice(index, 1);
                    // _this.data.splice(index, 1);
                    if (event) {
                        var id = event.target.id;
                        var order = event.target;
                        //  console.log(id);
                        $(order).parent().parent().parent().remove();
                    }
                }
            })
        },

        //批量分发
        HandoutAll: function (data) {
            var orderid = data;
            var orderidTemp = "";
            $('input:checkbox[name="orderid"]:checked').each(function (i) {
                if (0 == i) {
                    orderidTemp = $(this).val();
                } else {
                    orderidTemp += ("," + $(this).val());
                }

            });

            var data = { orderid: orderidTemp };
            this.$Modal.confirm({
                title: '选择推送工厂',
                content: `<input name="Fruit" type="radio" value="1" checked/>一伙人（香港）服装有限公司</br></br>
                          <input name="Fruit" type="radio" value="2" />XXXXXXXXXXXXXXXXX公司`,
                onCancel(index) {

                },
                onOk(index) {
                    //传给后台的值 选中的推送工厂
                    var factory = $('input[name="Fruit"]:checked').val();

                    //成功后操作
                    $("input:checkbox:checked").parent().parent().parent().parent().remove();
                }
            })
        },
    },
    created() {
        //缓存tab
        this.showTab = sessionStorage.getItem('showTab');
        this.$nextTick(function () {
            this.$http.get("http://jsonplaceholder.typicode.com/users").then((data) => {
                // console.log(data.data);
                // console.log(JSON.stringify(data.data));
                data.data = data.data.map((ele) => {
                    ele.isIn = false;
                    return ele;
                })
                this.users = data.data;
                console.log(this.users);
            })
        })
        this.$http.get("http://jsonplaceholder.typicode.com/comments").then((data) => {
            this.comments = data.data;
        })
        this.$http.get("http://jsonplaceholder.typicode.com/todos").then((data) => {
            this.data6 = data.data;
        })
    }
}

function chkAll(obj) {
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
        base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) },
        format = function (s, c) {
            return s.replace(/{(\w+)}/g,
                function (m, p) { return c[p]; })        }
    return function (table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
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
  color: #fff !important;
  background-color: #19be6b !important;
  border-color: #19be6b !important;
}
.title {
  height: 32px !important;
  background-color: #f8f8f9 !important;
  line-height: 32px;
}
.title1 {
  border: 1px solid #e9eaec !important;
  background: #ebebeb !important;
  line-height: 32px;
  border-bottom: hidden;
}
#tableExcel tr {
  background: white;
  line-height: 1.5;
  height: 40px;
}
#tableExcel tr:hover {
  background: #f0f8ff;
}
#tableExcel td,
#tableExcel th {
  border-bottom: 1px solid #e9eaec;
}
#tableExcel td:last-child {
  width: 150px;
}
#tableExcel tr:first-child {
  background-color: #f8f8f9;
}
</style>