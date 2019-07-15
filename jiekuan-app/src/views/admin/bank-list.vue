<template>
  <div class="admin_p_user_page">
    <el-button type="primary" class="back_btn" @click="$router.go(-1)">返回</el-button>
    <div class="title">银行卡列表</div>
    <ul class="user_list">
      <el-table
        :data="cardList"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="bank_code"
          label="银行名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="card_no"
          label="银行卡号">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间">
        </el-table-column>
      </el-table>
    </ul>
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
      userId: this.$route.query.userId,
      cardList: []
    }
  },
  created() {
    this.goBankCardList(this.userId);
  },
  methods: {
    goBankCardList(id) {
      this.$service.post('/admin/query_user_card', {
        adminToken: this.$Cookies.get('adminToken'),
        userId: id,
      }).then(res => {
        if (res.cardList) {
          this.cardList = res.cardList;
        }
      }).catch(() => {
      });
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
    padding:10px 0px;
    box-sizing: border-box;
  }
  .user_list{
    padding:10px 0px;
  }
}
</style>


