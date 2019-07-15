<template>
  <div class="admin_p_user_page">
    <div class="title">用户列表</div>
    <ul class="user_list">
      <el-table
        :data="userList"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="idno"
          label="身份证号">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="注册时间">
        </el-table-column>
        <el-table-column
          width="200px"
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="goApplyList(scope.row.id)">查看申请</el-button><i style="margin:0 2px;"/>
            <el-button size="mini" type="success" @click="goBankCardList(scope.row.id)">查看银行卡</el-button>
          </template>
        </el-table-column>
      </el-table>
    </ul>
    <!-- <div @click="goApplyList(82)">模拟数据</div> -->
  </div>
</template>
<script>
import {Table, TableColumn, Button} from 'element-ui';
export default {
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button
  },
  data() {
    return {
      userList: []
    }
  },
  created() {
    this.getData();
  },
  methods: {
    goBankCardList(id) {
      this.$router.push(`/admin/home/bank-list?userId=${id}`);
    },
    getData() {
      this.$service.post('/admin/user', {
        adminToken: this.$Cookies.get('adminToken'),
        pageSize: 10,
        pageNum: 1
      }, true).then(res => {
        this.userList = res.data.userList.data,
        this.pageNum = res.data.userList.current_page
      }).catch(() => {
      });
    },
    goApplyList(id) {
      this.$router.push(`/admin/home/applylist?userId=${id}`);
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
  .title{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
  }
  .user_list{
    padding:10px 0px;
  }
}
</style>


