<template>
  <div class="p_jiekuan_pay_page">
    <mt-header fixed title="借款">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <div class="content">
      <img src="@/assets/jiekuanpay.png" alt="" style="width:105px;"/>
      <p>支付资产管理费，借款金额的千分之三，完成支付，以便成功借款；</p>
    </div>
    <ul class="jiekuan_type_list">
      <li class="item">
        <div class="left">
          <p class="tips">千分之三（元）</p>
          <p class="amount">300</p>
        </div>
        <div class="right">
          <span @click="showSlot">立即支付</span>
        </div>
      </li>
    </ul>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade">
      <img :src="config.baseUrl + img_url" alt="">
    </mt-popup>
    <cube-button class="btn" @click="handleGoAccount()">返回</cube-button>
  </div>
</template>
<script>
import config from '@/config';
export default {
  data() {
    return {
      config: config,
      img_url: '',
      popupVisible: false
    }
  },
  created(){
    this.getImg(1);
  },
  methods: {
    handleGoAccount() {
      this.$router.push('/account');
    },
    showSlot() {
      this.popupVisible = !this.popupVisible;
    },
    getImg(type) {
      this.$service.post('/getImg',{
        type: type
      }).then(res => {
        if (res.img) {
          this.img_url = res.img[0];
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
.p_jiekuan_pay_page{
  position: absolute;
  color: #101010;
  font-size: 14px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding:45px 20px 10px;
  background: #fff;
  .content{
    padding: 50px 20px 0;
    line-height: 25px;
    color: #101010;
    font-size: 16px;
    p{
      margin-top: 10px;
      text-align: left;
    }
    
  }
  .jiekuan_type_list{
    margin-top: 30px;
    .item{
      padding: 0px 15px;
      background: #fff;
      height: 90px;
      box-sizing: border-box;
      border-radius: 20px;
      margin-bottom: 20px;
      text-align: left;
      display: flex;
      align-items: center;
      box-shadow: 0 0 5px 0px rgba(237, 235, 237, 1);
      .left{
        flex: 1;
        text-indent: 10px;
        .amount{
          text-indent: 0;
          height: 41px;
          line-height: 41px;
          color: rgba(16, 16, 16, 1);
          font-size: 28px;
        }
        .tips{
          height: 23px;
          line-height: 20px;
          color: rgba(187, 187, 187, 1);
          font-size: 14px;
          margin-top: 7px;
        }
      }
      .right{
        width: 100px;
        span{
          width: 94px;
          height: 33px;
          display: block;
          line-height: 33px;
          border-radius: 60px;
          background: rgba(245, 105, 104, 1);
          font-size: 14px;
          text-align: center;
          color:#fff;
        }
      }
    }
  }
  .btn{
    margin-top: 50px;
    border: 1px solid #F56968;
    color: #F56968;
    background: transparent;
  }
}
</style>

