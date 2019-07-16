<template>
  <div class="p_account_page">
    <div class="top">
      <div class="left" v-if="userInfo.mobile">
        <p class="phone">{{secrecyMobile(userInfo.mobile)}}</p>
        <p class="username">{{userInfo.name}}</p>
      </div>
      <div class="left" v-else>
        <p class="phone" @click="goLogin">去登录</p>
      </div>
      <div class="right">
        <img src="@/assets/notifications-none.png" alt="" style="width:30px;">
      </div>
    </div>
    <div class="account_item">
      <mt-cell title="我的银行卡" is-link icon="back" to="/bankcard">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell>
      <p class="line"><i></i></p>
      <mt-cell title="我的额度" is-link icon="back" to="/shenhe-result">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell>
      <!-- <p class="line"><i></i></p>
      <mt-cell title="帮助中心" is-link icon="back">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell> -->
      <i class="blank"></i>
      <mt-cell title="常见问题" is-link icon="back" to="/question">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell>
      <p class="line"><i></i></p>
      <mt-cell title="在线客服" is-link icon="back" :to="`tel:${qq}`">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell>
      <p class="line"><i></i></p>
      <mt-cell title="系统设置" is-link icon="back" to="/setup">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell>
    </div>
    <Tabbar selected="3"></Tabbar>
    <!-- <img :src="baseUrl + img_url" alt="" style="width:200px;"> -->
  </div>
  
</template>
<script>
import Tabbar from '@/components/tabbar';
import { secrecyMobile } from '@/libs/utils';
import config from '@/config';
export default {
  components: {
    Tabbar
  },
  data(){
    return {
      baseUrl: config.baseUrl,
      userInfo: {
        mobile: '',
        name: ''
      },
      img_url: '',
      qq: ''
    }
  },
  created() {
    if (this.$Cookies.get('token')){
      this.getUserInfo();
      this.getImg(4);
    }
  },
  methods: {
    goLogin() {
      this.$router.push('/login');
    },
    getImg(type) {
      this.$service.post('/getImg',{
        // token: this.$Cookies.get('token'),
        type: type
      }).then(res => {
        if (res.img) {
          this.qq = res.img[0];
        }
      });
    },
    // 手机号脱敏
    secrecyMobile(val){
      return secrecyMobile(val);
    },
    // // 获取用户信息
    getUserInfo() {
      this.$service.post('/getUserInfo',{
        token: this.$Cookies.get('token')
      }).then(res => {
        if (res.userInfo) {
          this.userInfo = res.userInfo;
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
.p_account_page{
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #F5F5F5;
  .top{
    height: 130px;
    background: #F76968;
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
    .left{
      text-align: left;
      .phone{
        font-size: 18px;
        height: 50px;
        line-height: 50px;
        font-weight: bold;
      }
      .username{
        font-size: 18px;
        font-weight: bold;
      }
    }
    .right{
      font-size: 30px;
    }
  }
  /deep/ .mint-cell-title {
    text-align: left;
  }
  .account_item{
    /deep/ .mint-cell-wrapper{
      font-size: 14px;
    }
    .line{
      width: 100%;
      background: #fff;
      i {
        background: #eee;
        height: 1px;
        display: block;
        margin-left: 54px;
      }
    }
    .blank{
      width: 100%;
      background: transparent;
      height: 10px;
      display: block;
    }
  }
  
}
</style>

