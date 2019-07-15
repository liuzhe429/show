<template>
  <div class="admin_p_user_page">
    <el-button type="primary" class="back_btn" @click="$router.go(-1)">返回</el-button>
    <div class="title">申请列表</div>
    <ul class="user_list">
      <el-table
        :data="orderList"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id">
        </el-table-column>
        <el-table-column
          prop="loan_name"
          label="姓名">
        </el-table-column>
        <el-table-column
          label="性别">
          <template slot-scope="scope">
            <span v-if="scope.row.sex === 1">男</span>
            <span v-if="scope.row.sex === 2">女</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="contact"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="loan_type"
          width="160px"
          label="借款类型">
          <template slot-scope="scope">
            <span v-if="scope.row.loan_type === '1'">身份证</span>
            <span v-if="scope.row.loan_type === '2'">信用卡</span>
            <span v-if="scope.row.loan_type === '3'">精英</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="amount"
          label="借款金额">
        </el-table-column>
        <el-table-column
          prop="audit_money"
          label="审批的金额">
        </el-table-column>
        
        <el-table-column
          label="借款分期">
          <template slot-scope="scope">
            <span>{{scope.row.periods}}期</span>
          </template>
        </el-table-column>
        <el-table-column
          label="借款类型">
          <template slot-scope="scope">
            <span v-if="scope.row.audit_status === 0">审核中</span>
            <span v-if="scope.row.audit_status === 1">已通过</span>
            <span v-if="scope.row.audit_status === 2">被拒</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="income"
          label="年收入">
        </el-table-column>
        <el-table-column
          label="车贷">
          <template slot-scope="scope">
            <span v-if="scope.row.car_loan === 1">有</span>
            <span v-if="scope.row.car_loan === 2">无</span>
          </template>
        </el-table-column>
        <el-table-column
          label="房贷">
          <template slot-scope="scope">
            <span v-if="scope.row.housing_loan === 1">有</span>
            <span v-if="scope.row.housing_loan === 2">无</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="idcard"
          label="身份证号">
        </el-table-column>
         <el-table-column
          prop="credit_limit"
          label="信用额度">
        </el-table-column>
        <el-table-column
          prop="birth"
          label="出生年月日">
        </el-table-column>
        
        <el-table-column
          prop="create_time"
          label="申请时间">
        </el-table-column>
        <el-table-column
          label="操作"
          width="200px">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="shenheApply(scope.row, 1)">通过</el-button><i style="margin:0 2px;"/>
            <el-button size="mini" type="danger" @click="shenheApply(scope.row, 2)">拒绝</el-button><i style="margin:0 2px;"/>
            <el-button size="mini" type="success" @click="add(scope.row)" v-if="scope.row.repay_status !== 1">还款</el-button>
          </template>
        </el-table-column>
      </el-table>
    </ul>
    <el-dialog
      title="借款申请"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="审批金额" >
          <el-input v-model="auditMoney" autocomplete="off" placeholder="请输入最高审批金额"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancleApply('cancle')">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="拒绝申请"
      :visible.sync="denyVisible"
      width="30%"
      >
      <span>确定要拒绝该申请吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="denyVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmDeny">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {Table, TableColumn, Button, Dialog, Form, FormItem, Input} from 'element-ui';
import { showToastOnly } from '@/libs/utils';
export default {
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button,
    'el-dialog': Dialog,
    'el-form': Form,
    'el-input': Input,
    'el-form-item': FormItem
  },
  data() {
    return {
      userId: this.$route.query.userId || '',
      orderList: [],
      dialogVisible: false,
      formData: {},
      denyVisible: false,
      type: '',
      auditMoney: ''
    }
  },
  created() {
    this.getData();
  },
  methods: {
    add(row) {
      this.$router.push(`/admin/home/huankuan?userId=${row.user_id}&orderId=${row.order_id}&period=${row.periods}`);
    },
    confirmDeny() {
      // this.$service.get('/admin/order/audit', {
      //   orderId: this.formData.order_id,
      //   auditStatus: this.type,
      //   auditMoney: this.auditMoney,
      //   adminToken: this.$Cookies.get('adminToken')
      // }, true).then(res => {
      //   if (res.code === 0) {
      //     showToastOnly({
      //       that: this,
      //       msg: '审批成功',
      //       time: 2000
      //     });
      //     this.getData();
      //   } else {
      //     showToastOnly({
      //       that: this,
      //       msg: res.msg,
      //       time: 2000
      //     });
      //   }
      //   this.dialogVisible = false;
      //   this.auditMoney = '';
      //   this.type = '';
      // }).catch(() => {
      // });
    },
    handleClose(){
      this.dialogVisible = false;
    },
    cancleApply() {
      this.dialogVisible = false;
    },
    submitForm() {
      if (!this.auditMoney) {
        showToastOnly({
          that: this,
          msg: '请输入正确的审批金额',
          time: 2000
        });
        return false;
      }
      if (this.auditMoney >= this.formData.amount){
        showToastOnly({
          that: this,
          msg: '审批金额大于借款金额',
          time: 2000
        });
        return false;
      }
      this.$service.get('/admin/order/audit', {
        orderId: this.formData.order_id,
        auditStatus: this.type,
        auditMoney: this.auditMoney,
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
    },
    getData() {
      this.$service.post('/admin/order', {
        userId: this.userId,
        adminToken: this.$Cookies.get('adminToken')
      }, true).then(res => {
        this.orderList = res.data.orderList
      }).catch(() => {
      });
    },
    shenheApply(row, type) {
      if(type === 1) {
        this.dialogVisible = !this.dialogVisible;
      } else {
        this.denyVisible = !this.denyVisible;
      }
      this.type = type;
      this.formData = row;
    }
  }
}
</script>
<style lang="less" scoped>
.admin_p_user_page{
  width: 100%;
  height: 100%;
  padding:20px;
  box-sizing: border-box;
  text-align: left;
  .back_btn{
    width: 150px;
  }
  .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
  }
  .user_list{
    padding:10px 0px;
  }
}
</style>
