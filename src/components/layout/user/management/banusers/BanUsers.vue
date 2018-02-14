<template>
	<div class="banusers">
		<Row>
      <Col span="24">
        <h2 style="color:#495060">
            禁止用户---{{this.name}}    <!-- 昵称+UID -->
        </h2>
      </Col>
    </Row>
    <form action="">
      <ul>
        <li>
          <dl>
            <dt> <h3>禁止的用户名：</h3> </dt>
            <dd>
              <Input v-model="banname" placeholder="请填入用户名" style="width: 200px"></Input>
            </dd>
          </dl>
        </li>
        <li>
          <dl class="nowstate">
            <dt> <h3>当前状态：</h3> </dt>
            <dd :class="{stateActive: this.state == 1}" > <h3>正常状态</h3> </dd>
            <dd :class="{stateActive: this.state == 2}" > <h3>禁止自做</h3> </dd>
            <dd :class="{stateActive: this.state == 3}" > <h3>禁止访问</h3> </dd>
            <dd :class="{stateActive: this.state == 4}" > <h3>锁定用户</h3> </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt> <h3>禁止类型：</h3> </dt>
            <dd  class="type">
              <RadioGroup v-model="state" vertical>
                <Radio label="1">                  
                  <span>&nbsp;&nbsp;正常状态</span>
                </Radio>
                <Radio label="2">                 
                  <span>&nbsp;&nbsp;禁止自做</span>
                </Radio>
                <Radio label="3">
                  <span>&nbsp;&nbsp;禁止访问</span>
                </Radio>
                <Radio label="4">
                  <span>&nbsp;&nbsp;锁定用户</span>
                </Radio>
              </RadioGroup>

              <!-- 右侧下拉框 -->
              <div class="time">
                <div>
                  <Select size="small" v-model="time1" style="width:300px">
                    <Option  v-for="item in timetype" :value="item.value" :key="item.value">{{item.label}}</Option>    
                  </Select>
                </div>
                <div>
                  <Select size="small" v-model="time2" style="width:300px">
                    <Option  v-for="item in timetype" :value="item.value" :key="item.value">{{item.label}}</Option>    
                  </Select>
                </div>
              </div>
            </dd>
           
          </dl>
        </li>
        <li>
          <dl>
            <dt> <h3>清空当前用户相关内容：</h3> </dt>
            <dd>
              <div style="margin-bottom:6px;">
                  <Checkbox
                  :indeterminate="indeterminate"
                  :value="checkAll"
                  @click.prevent.native="handleCheckAll">
                    全选
                  </Checkbox>
              </div>
              <CheckboxGroup  v-model="checkAllGroup" @on-change="checkAllGroupChange">
                  <Checkbox label="1">&nbsp;&nbsp;作品&nbsp;&nbsp;</Checkbox>
                  <Checkbox label="2">&nbsp;&nbsp;评论&nbsp;&nbsp;</Checkbox>
                  <Checkbox label="3">&nbsp;&nbsp;头像&nbsp;&nbsp;</Checkbox>
              </CheckboxGroup>
            </dd>
            
          </dl>
        </li>
      </ul>
    </form>
    <div class="mtp10 ivu-row">
      <div class="ivu-col ivu-col-span-8">
        <!-- <Button class="dReturn" type="error" @click="dReturn"><b style="visibility:hidden">占</b> 返回<b style="visibility:hidden">位</b></Button>
        <Button type="error" @click="sub"> <b style="visibility:hidden">占</b> 提交 <b style="visibility:hidden">位</b> </Button> -->
        <Button class="dReturn" type="primary" @click="dReturn">返回</Button>
        <Button type="success" @click="sub">提交</Button>
      </div>
    </div>
	</div>
</template>
<script>
	export default{
		name: 'banusers',
		data() {
			return {
        name: 'hy',
        banname: 'hy',
        state: 1,
        timetype:[],
        time1: '9',
        time2: '9',


        // 多选清空相关内容
        indeterminate: false,
        checkAll: false,
        checkAllGroup: [],


			}
		},
	
  
  watch: {
    
  },
  methods: {




    // 清空相关内容
    handleCheckAll () {
        if (this.indeterminate) {
            this.checkAll = false;
        } else {
            this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
            this.checkAllGroup = ['1', '2', '3'];
        } else {
            this.checkAllGroup = [];
        }
    },
    checkAllGroupChange (data) {
        if (data.length === 3) {
            this.indeterminate = false;
            this.checkAll = true;
        } else if (data.length > 0) {
            this.indeterminate = true;
            this.checkAll = false;
        } else {
            this.indeterminate = false;
            this.checkAll = false;
        }
    },


    //   返回上一步
    dReturn(){
        this.$router.push('/layout/user/management/alluser');
    },
    
    // 提交
    sub(){

    },
      
  },
  mounted(){
    this.timetype = [
      { value:'1',label:'一天'},
      { value:'2',label:'两天'},
      { value:'3',label:'三天'},
      { value:'4',label:'四天'},
      { value:'5',label:'五天'},
      { value:'6',label:'六天'},
      { value:'7',label:'七天'},
      { value:'8',label:'一个月'},
      { value:'9',label:'永久'},
    ];
   
  },
  
  created() {
    // this.$http.get("http://192.168.2.239/bzadmin/public/index.php/expressList.html").then((data) => {
    //    this.users = data.data.data.map((ele) => {
    //     ele.isIn = false;
    //     //命名revisability
    //     ele.revisability = true;
    //     return ele;
    //   });
    // })

    
  }
}
	
</script>
<style scoped>
  
	form{
    width: 100%;
    min-height: 10px;
  }
  form>ul>li{
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
  dl{
    width: 100%;
    height: auto;
  }
  dt,dd{
    
  }
  h3{
    height: 32px;
    line-height: 32px;
  }
  .nowstate dt{
    display: inline-block;
  }
  .nowstate dd{
    display: none;
  }
  .stateActive{
    display: inline-block !important;
  }

  .type{
    position: relative;
  }
  .type .time{
    position: absolute;
    top: 34px;
    left: 250px;
  }
  .type .time>div{
    margin-bottom: 8px;
  }
</style>