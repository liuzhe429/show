<template>
  <div class="p_huankuan_page">
    <mt-header fixed title="还款列表" class="header"></mt-header>
    <div class="no_list">
      还未申请任何贷款
    </div>
    <Tabbar selected="2"></Tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/tabbar';
export default {
  components: {
    Tabbar
  },
  data() {
    return {}
  },
  created(){
    // this.$service.post('/repayList',{
    //   token: this.$Cookies.get('token')
    // }).then(res => {
    //   console.log(res);
    // });
    // // 我的银行卡列表  todo
    // this.$service.post('/queryCardList',{
    //   token: this.$Cookies.get('token')
    // }).then(res => {
    //   console.log(res);
    // });
    // // 获取用户信息
    // this.$service.post('/getUserInfo',{
    //   token: this.$Cookies.get('token')
    // }).then(res => {
    //   console.log(res);
    // });
    // 添加身份证信息
    // this.$service.post('/addIdCard',{
    //   token: this.$Cookies.get('token'),
    //   idno: '123456'
    // }).then(res => {
    //   console.log(res);
    // });
    // 
    // 修改密码
    // this.$service.post('/modifyPassword',{
    //   token: this.$Cookies.get('token'),
    //   newPassword: '11111',
    //   oldPassword: '123456'
    // }).then(res => {
    //   console.log(res);
    // });
  },
  
  methods: {
  }
}
</script>
<style lang="less" scoped>
.p_huankuan_page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding:60px 10px 10px;
  background: #f2f2f2;
  color: #101010;
  .no_list{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #101010;
    font-size: 16px;
    padding-bottom: 60px;
    box-sizing: border-box;
  }
}
</style>



