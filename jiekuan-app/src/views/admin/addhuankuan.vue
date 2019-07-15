<template>
  <div class="admin_p_add_huankuan">
    <div>添加还款列表</div>
    <ul>
      <li v-for="(item, index) in repayList" :key="index">dfdfdf</li>
    </ul>
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="还款金额" >
        <el-input v-model="repaid" autocomplete="off" placeholder="请输入还款金额"></el-input>
      </el-form-item>
    </el-form>
    <span class="dialog-footer">
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </span>
  </div>
</template>
<script>
import {Table, TableColumn, Button, Dialog, Form, FormItem, Input} from 'element-ui';
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
    return{
      orderId: this.$route.query.orderId || '',
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


