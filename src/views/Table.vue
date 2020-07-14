<template>
  <div class="table">
    <!-- <a-row> -->
      <!-- <a-col :span="15"> -->
        <h2>合并表下发</h2>
        <a-table :columns="columns" :data-source="data">
          <a slot="name" slot-scope="text">{{ text }}</a>
        </a-table>
      <!-- </a-col> -->
      <!-- <a-col :span="9"> -->
        <div class="compony">
          <p class="title">
            预算单位
          </p>
          <!-- <a-row>
            <a-col :span="6"> -->
              <label for="organization">组织名称：</label>
            <!-- </a-col>
            <a-col :span="18"> -->
              <a-input placeholder="请输入" id="organization" />
            <!-- </a-col>
          </a-row> -->
          <div class="btn">
            <a-button icon="eye">预览</a-button>
            <a-button icon="search">查询</a-button>
            <a-button icon="delete">清空</a-button>
            <a-button icon="arrow-down">下载</a-button>
          </div>
        </div>
        <div class="list">
          <p class="title">
            组织列表
          </p>
          <a-table
            :row-selection="rowSelection"
            :columns="listColumns"
            :data-source="listData"
          >
            <a slot="name" slot-scope="text">{{ text }}</a>
          </a-table>
        </div>
      <!-- </a-col> -->
    <!-- </a-row> -->
  </div>
</template>

<script>
import request from "../http";

//合并表
const columns = [
  {
    title: "预算类别",
    dataIndex: "cauCatolog",
    key: "cauCatolog",
    scopedSlots: { customRender: "cauCatolog" }
  },
  {
    title: "报表类别",
    dataIndex: "tabCatalog",
    key: "tabCatalog"
    // width: 100,
  },
  {
    title: "报表名称",
    dataIndex: "name",
    key: "name",
    ellipsis: true
  },
  {
    title: "维度",
    dataIndex: "side",
    key: "side",
    ellipsis: true
  }
];

const data = [
  {
    key: "1",
    cauCatolog: "财务预算",
    tabCatalog: "金额",
    name: "现金流量表",
    side: "组织"
    // tags: ['nice', 'developer'],
  },
  {
    key: "2",
    cauCatolog: "财务预算",
    tabCatalog: "金额",
    name: "资产负债表",
    side: "组织"
    // tags: ['loser'],
  },
  {
    key: "3",
    cauCatolog: "财务预算",
    tabCatalog: "金额",
    name: "资金收支表",
    side: "组织"
    // tags: ['cool', 'teacher'],
  }
];

//组织列表数据
const listColumns = [
  {
    title: "组织名称",
    dataIndex: "name",
    scopedSlots: { customRender: "name" }
  }
];
const listData = [
  {
    key: "1",
    name: "John Brown"
  },
  {
    key: "2",
    name: "Jim Green"
  },
  {
    key: "3",
    name: "Joe Black"
  }
  //   {
  //     key: '4',
  //     name: 'Disabled User',
  //   },
];

export default {
  data() {
    return {
      data,
      columns,
      listData,
      listColumns
    };
  },
  created(){
      request.getTable().then(res=>{
          console.log("res:",res);
      })
  },
  computed: {
    rowSelection() {
      //组织列表选择行
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name
          }
        })
      };
    }
  }
};
</script>

css.<style lang="less" scoped>
.table {
  h2 {
    text-align: center;
    font-weight: 700;
  }
  .title {
    border-left: 5px solid #e6f7ff;
    padding-left: 15px;
    // border-left-color:#e6f7ff;
  }
//   .ant-col-9 {
//     padding-left: 10px;
    .btn {
      text-align: right;
      margin-top: 15px;
      button:not(:last-of-type) {
        margin-right: 10px;
      }
    }
    .compony{
        label{
            margin-left:20px;
        }
        input{
            width:70%;
            // text-align: right;
        }
        .ant-row{
            line-height: 32px;
            padding-left:15px;
        }
    }
    .list {
      margin-top: 10px;
    }
//   }
}
</style>
