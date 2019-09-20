<style scoped>
.index {
  width: 100%;
  /* position: absolute; */
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

.index h1 {
  height: 150px;
}

.index h1 img {
  height: 100%;
}

.index h2 {
  color: #666;
  margin-bottom: 200px;
}

.index h2 p {
  margin: 0 0 50px;
}

.index .ivu-row-flex {
  height: 100%;
}
</style>
<template>
    <div class="index">
        <h1 style="height: 30px;">
            太平监控平台
        </h1>
        <div class="block">
            <!-- <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1" @input="getDate">
            </el-date-picker> -->
            <div style="margin-left: 50%;margin-bottom: 20px;">
                <el-date-picker v-model="datevalue" type="datetimerange" format="yyyy-MM-dd" :picker-options="pickerOptions1" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">
                </el-date-picker>

                <el-select v-model="businessvalue" clearable placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary" :disabled="querySelect">查询</el-button>
            </div>
        </div>
        <div class="">
            <el-table :data="tableData" style="width: 100%" border :header-cell-style="{background:'#ccc',color:'white'}" :row-class-name="tableRowClassName">
                <el-table-column prop="totalCall" label="进线量" width=""></el-table-column>
                <el-table-column prop="totalSuccessCall" label="成功量" width=""></el-table-column>
                <el-table-column prop="successRatio" label="成功比例"></el-table-column>

                <el-table-column prop="totalFailCall" label="挂断量" width=""></el-table-column>
                <el-table-column prop="failRatio" label="挂断比例" width=""></el-table-column>
                <el-table-column prop="totalTransferCall" label="转人工量"></el-table-column>

                <el-table-column prop="transferRatio" label="转人工比例" width=""></el-table-column>
                <el-table-column prop="totalSuccessInteraction" label="互数据推送成功量" width=""></el-table-column>
                <el-table-column prop="totalSuccessRecord" label="录音推送成功量"></el-table-column>

                <el-table-column prop="statisticalDate" label="统计时间" width=""></el-table-column>
                <el-table-column prop="lastCreateTime" label="最后创建时间" width=""></el-table-column>
                <el-table-column prop="lastUpdateTime" label="最后更新时间"></el-table-column>

                <el-table-column prop="bussinessName" label="业务名称" width=""></el-table-column>
                <el-table-column prop="totalSuccessCall" label="成功量" width=""></el-table-column>

                <div v-if="tableData.length == 0" class="el-table__empty-block">
                    <span class="el-table__empty-text">暂无数据</span>
                </div>
            </el-table>
        </div>
    </div>
</template>
<script>
// import { queryResult} from "@/utils/util";
export default {
  data() {
    return {
      tableData: [
        // {
        //   totalCall: "进线量",
        //   totalSuccessCall: "成功量",
        //   successRatio: "成功比例",
        //   totalFailCall: "挂断量",
        //   failRatio: "挂断比例",
        //   totalTransferCall: "转人工量",
        //   transferRatio: "转人工比例",
        //   totalSuccessInteraction: "互数据推送成功量",
        //   totalSuccessRecord: "录音推送成功量",
        //   statisticalDate: "统计时间",
        //   lastCreateTime: "最后创建时间",
        //   lastUpdateTime: "最后更新时间",
        //   bussinessName: "业务名称",
        //   totalSuccessCall: "成功量"
        // }
      ],
      pickerOptions1: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              //   start.setTime(start.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      options: [
        {
          value: 1,
          label: "结案回访"
        },
        {
          value: 2,
          label: "运营付费"
        },
        {
          value: 3,
          label: "车险新契约"
        }
      ],
      datevalue: [
        new Date().Format("yyyy-MM-dd"),
        new Date().Format("yyyy-MM-dd")
      ],
      businessvalue: ""
    };
  },
  computed: {
    querySelect: function() {
      if (this.businessvalue != "") {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    getDate(date) {
      console.log("data:", this.value2);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  mounted() {
    const loading = this.$loading({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    }); 
    loading.close();

  }
};
</script>