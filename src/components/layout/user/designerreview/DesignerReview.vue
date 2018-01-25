<template>
    <div>
        <Row class="postiFix2">
            <Col span="24">
            <h2 style="color:#495060">
                审核设计师 -
                <span style="color:#1c2437;" v-if="showTab === 0"> 待审核</span>
                <span style="color:#1c2437;" v-if="showTab === 1"> 清理等待验证的用户</span>
                <span style="color:#1c2437;" v-if="showTab === 2"> 已拒绝</span>
                <span style="color:#1c2437;" v-if="showTab === 3"> 已通过</span>
            </h2>
            </Col>
            <Col span="8">
            <strong style="font-size:15px;">状态：</strong>
            <button class="button" @click="onTab(index)" v-for="(tabs,index) in tabButton" :class="{bactive: showTab == index}">{{tabs}}</button>
            </Col>
            <Col span="8" style="text-align: center;"></Col>
            <Col span="8" style="text-align: right;">
            </Col>
        </Row>
        <div v-if="showTab === 0" class="mtp57">
            <table id="tableExcel" class="mtop0" width="100%" border="1" cellspacing="0" cellpadding="0" style="text-align:center">
                <tr>
                    <th>
                        <Checkbox v-model="allSelect" @on-change="selectAll"></Checkbox>
                    </th>
                    <th>用户名</th>
                    <th>UID</th>
                    <th>作品总数</th>
                    <th>出售的作品</th>
                    <th>销售记录</th>
                    <th>提交的申请时间</th>
                    <th>姓名</th>
                    <th>常用邮箱</th>
                    <th>手机号</th>
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
                    <td>{{user.phone}}</td>
                    <td>{{user.website}}</td>
                    <td>
                        <Button @click="deleteSuccse" class="ivu-btn-primary ivu-btn-small">详情</Button>
                        <Button @click="deleteFaile(index)" class="ivu-btn-error ivu-btn-small" :id="user.id">
                            分发
                        </Button>
                    </td>
                </tr>
            </table>
        </div>
        <!-- 1 -->
        <div v-if="showTab === 1" class="mtp57">
            <Input type="password"></Input>
            <Input type="password"></Input>
            <Input type="text"></Input>
        </div>
        <!-- 2 -->
        <div v-if="showTab === 2" class="mtp57">
            <Table border :columns="columns7" :data="data6" size="small"></Table>
        </div>
        <!-- 3 -->
        <div v-if="showTab === 3" class="mtp57">
            <Table border :columns="columns6" :data="data6" size="small"></Table>
        </div>
        <!-- 分页 -->
        <div class="ivu-col ivu-col-span-24" style="text-align:center;background: #f5f7f9;">
            <Page :total="40" size="small" show-elevator show-sizer @on-change="pagesize"></Page>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DesignerReview',
    data() {
        return {
            tabButton: ['待审核', '清理', '已拒绝', '已通过'],
            showTab: 0,
            users: [],
            comments: [],
            todos: [],
            pushs: [],
            allSelect: false,
            columns7: [
                {
                    align: 'center',
                    title: '用户名',
                    key: 'id'
                },
                {
                    align: 'center',
                    title: 'UID',
                    key: 'uid'
                },
                {
                    align: 'center',
                    title: '作品总数',
                    key: 'title'
                },
                {
                    align: 'center',
                    title: '出售的作品',
                    key: 'phone'
                },
                {
                    align: 'center',
                    title: '销售记录',
                    key: 'address'
                },
                {
                    align: 'center',
                    title: '提交申请时间',
                    key: 'address'
                },
                {
                    align: 'center',
                    title: '提交申请时间',
                    key: 'address'
                },
                {
                    align: 'center',
                    title: '拒绝的时间',
                    key: 'address'
                },
                {
                    align: 'center',
                    title: '姓名',
                    key: 'address'
                },
                {
                    align: 'center',
                    title: '常用邮箱',
                    key: 'address'
                },
                {
                    align: 'center',
                    title: '拒绝的理由',
                    key: 'address'
                },
            ],
            columns6: [

                {                    align: 'center',
                    title: '用户名',
                    key: 'id'
                },
                {                    align: 'center',
                    title: 'UID',
                    key: 'uid'
                },
                {                    align: 'center',
                    title: '作品总数',
                    key: 'title'
                },
                {                    align: 'center',
                    title: '出售的作品',
                    key: 'phone'
                },
                {                    align: 'center',
                    title: '销售记录',
                    key: 'address'
                },
                {                    align: 'center',
                    title: '提交申请时间',
                    key: 'address'
                },
                {                    align: 'center',
                    title: '提交申请时间',
                    key: 'address'
                },
                {                    align: 'center',
                    title: '拒绝的时间',
                    key: 'address'
                },
                {                    align: 'center',
                    title: '姓名',
                    key: 'address'
                },
                {                    align: 'center',
                    title: '常用邮箱',
                    key: 'address'
                },
                {                    align: 'center',
                    title: '用户组',
                    key: 'address'
                },
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
        deleteFaile: function (index) {
            let _this = this;
            this.$Modal.confirm({
                title: '请输入失败原因',
                content: `<Input type="text" id="result" placeholder="" style="width: 300px"></Input>`,
                onCancel() {

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