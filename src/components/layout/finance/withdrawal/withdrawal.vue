<template>
  <div>
    <Row class="mtb10">
      <Col span="5">
      <Button type="success">待审核</Button>
      <Button>成功</Button>
      <Button>失败</Button>
      </Col>
      <Col span="3">
      <Button type="primary" size="default" @click="exportData(3)">
        <Icon type="ios-download-outline"></Icon>
        导出excel表
      </Button>
      </Col>
      <Col span="8" style="text-align: center;">
      <Input  placeholder="请输入要查询的商户昵称和UID" style="width:55%"></Input>
      <Button type="primary">搜索</Button>
      </Col>
       <Col span="8" style="text-align: center;">
      <Input placeholder="按时间查询" style="width:55%"></Input>
      <Button type="primary">搜索</Button>
      </Col>
    </Row>

    <Table height="700" :columns="columns8" :data="data" size="small" ref="table"></Table>
 <Row class="mtp10">
     <Col span="12">
    <Button @click="handleSelectAll(true)">全选择</Button>
    <Button @click="handleSelectAll(false)">取消全选</Button>
      </Col>
      <Col span="12" style="text-align:right;">
    <Button @click="handleSelectAll(true)">批量处理成功</Button>
    <Button onclick="failed()">批量处理失败</Button>
      </Col>
 </Row>
 <Page style="text-align:center"></Page>
  </div>
    
</template>
 
<script>
export default {
  data() {
    return {
      columns8: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '用户昵称',
          key: 'name'
        },
        {
          title: '用户ID',
          key: 'id'
        },
        {
          title: '提现金额',
          key: 'website'
        },
        {
          title: '支付宝信息',
          key: 'phone'
        },
        {
          title: '申请时间',
          key: 'email'
        },
        {
          title: '状态',
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
              }, '成功'),
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
              }, '失败')
            ]);
          }
        }
      ],
      data: [
        // {
        //   name: 'John Brown',
        //   id: 18,
        //   withdrawal: 4848,
        //   time: '2016-10-03 18:30:00',
        //   alipay: 'New York No. 1 Lake Park',
        //   status: "ss"
        // },
      
      ]
    }
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.table.selectAll(status);
    },
    show(index) {
      this.$Modal.confirm({
        title: '请输入失败原因',
        content: ``,
      })
    },
    remove(index) {
      alert(index);
      
      //index 传给后台的数据
      this.data.splice(index, 1);
    },
    exportData(type) {
      this.$refs.table.exportCsv({
        filename: 'The original data'
         });
    },
  },
   created(){
      this.$http.get("http://jsonplaceholder.typicode.com/users").then((data) => {
        console.log(data.data);
        this.data= data.data;
     })
  }
}
//判断选中

    function checkbox()
    {
        var str=document.getElementsByName("how_hear[]");
        var objarray=str.length;
       chestr="";
        for (i=0;i<objarray;i++)
        {
            if(str[i].checked == true)
            {
                chestr+=str[i].value+",";
            }
        }
        if(chestr == "")
        {
            alert("请先选择一个！");
        }
        else
        {
            alert("您先择的是："+chestr);
            var data = chestr;
           
        }
    }
     //批量处理'失败'
    function failed() {
  checkbox();
         
    }
</script>
