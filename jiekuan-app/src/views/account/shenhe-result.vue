<template>
  <div class="p_huankuan_page">
    <mt-header fixed title="额度" class="header">
      <mt-button slot="left" @click="handleBack">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <ul>
      <li v-for="(item, index) in detail" :key="index" class="item">
        <p>{{item.orderId.auditMoney}}</p>
        <p>{{item.orderId.auditStatus}}</p>
        <!-- <div v-if="item.repayPlan.length>0">
          <div v-for="(per, index) in item.repayPlan" :key="index">
            <p>{{per.period}}</p>
            <p>{{per.repaid}}</p>
            <p>{{per.repay_time}}</p>
          </div>
        </div> -->
      </li>
    </ul>
  </div>
</template>
<script>
import Tabbar from '@/components/tabbar';
export default {
  components: {
    Tabbar
  },
  data() {
    return {
      repayList: [],
      detail: []
    }
  },
  created(){
    this.$service.post('/repayList',{
      token: this.$Cookies.get('token')
    }, true).then(res => {
      this.repayList = res.data.repayList;
      this.repayList.map(item => {
        this.getDetail(item.orderId);
      });
      // if(res.data && res.data.repayList) {
      //   this.repayList = res.data.repayList;
      // }
      // console.log(res);
    });
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
    handleBack() {
      this.$router.go(-1);
    },
    getDetail(id){
      
      this.$service.post('/queryPosition',{
        token: this.$Cookies.get('token'),
        orderId: id
      }).then(res => {
        if (res) {
          this.detail.push({
            orderId:res
          });
          console.log(this.detail);
        }
        // this.repayList = res.data.repayList;
        // if(res.data && res.data.repayList) {
        //   this.repayList = res.data.repayList;
        // }
      });
    }
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
  .item{
    background: #ccc;
    margin-bottom: 20px;
  }
}
</style>