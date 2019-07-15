<template>
  <div class="admin_p_add_huankuan">
    <div>还款列表</div>
      <el-table
        :data="repayList"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id">
        </el-table-column>
        <el-table-column
          prop="order_id"
          label="订单号">
        </el-table-column>
        <el-table-column
          label="借款分期">
          <template slot-scope="scope">
            <span>{{scope.row.period}}期</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="repaid"
          label="还款金额">
        </el-table-column>
        <el-table-column
          label="借款类型">
          <template slot-scope="scope">
            <span v-if="scope.row.status === 0">还款中</span>
            <span v-if="scope.row.status === 1">已还清</span>
          </template>
        </el-table-column>
        
        <el-table-column
          prop="create_time"
          label="还款时间">
        </el-table-column>
        <el-table-column
          label="操作"
          width="200px">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="shenheApply(scope.row, 1)">通过</el-button><i style="margin:0 2px;"/>
            <el-button size="mini" type="danger" @click="shenheApply(scope.row, 2)">拒绝</el-button><i style="margin:0 2px;"/>
            <el-button size="mini" type="success" @click="add(scope.row)" v-if="scope.row.repay_status === 1">查看</el-button>
            <el-button size="mini" type="success" @click="add(scope.row)" v-if="scope.row.repay_status !== 1">还款</el-button>
          </template>
        </el-table-column>
      </el-table>
    <ul>
      <li v-for="(item, index) in repayList" :key="index">dfdfdf</li>
    </ul>
    <div v-if="type !== 'chakan'">
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="还款金额" >
          <el-input v-model="repaid" autocomplete="off" placeholder="请输入还款金额"></el-input>
        </el-form-item>
      </el-form>
      <span class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </div>
    
  </div>
</template>
<script>
import {Table, TableColumn, Button, Form, FormItem, Input} from 'element-ui';
import { showToastOnly } from '@/libs/utils';
export default {
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button,
    'el-form': Form,
    'el-input': Input,
    'el-form-item': FormItem
  },
  data() {
    return{
      orderId: this.$route.query.orderId || '',
      type: this.$route.query.type || '',
      repaid: '',
      repayList: []
    }
  },
  created() {
   this.getList();
  },
  methods: {
    getList() {
      this.$service.get('/admin/repay', {
        userId: this.$route.query.userId,
        adminToken: this.$Cookies.get('adminToken')
      }, true).then(res => {
        if (res.code === 0) {
          res.data.repayList.map(item => {
            if (item.orderId === this.orderId) {
              this.repayList = item.repayPlan;
            }
          });
          // showToastOnly({
          //   that: this,
          //   msg: '审批成功',
          //   time: 2000
          // });
          // this.getData();
        } else {
          // showToastOnly({
          //   that: this,
          //   msg: res.msg,
          //   time: 2000
          // });
        }
        this.dialogVisible = false;
      });
    },
    submitForm(){
      this.$service.get('/admin/repay/add', {
        repaid: this.repaid, //还款金额
        orderId: this.$route.query.orderId,
        period: parseInt(this.repayList.length) + 1,
        adminToken: this.$Cookies.get('adminToken')
      }, true).then(res => {
        if (res.code === 0) {
          showToastOnly({
            that: this,
            msg: '审批成功',
            time: 2000
          });
          this.getData();
        } else {
          showToastOnly({
            that: this,
            msg: res.msg,
            time: 2000
          });
        }
        this.dialogVisible = false;
        this.auditMoney = '';
        this.type = '';
      }).catch(() => {
      });
    }
  }
}
</script>
<style lang="less" scoped>
.admin_p_add_huankuan{
  padding:20px;
}
</style>


