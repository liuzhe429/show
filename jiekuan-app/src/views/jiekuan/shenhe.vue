<template>
  <div class="p_apply_page">
    <mt-header fixed title="审核结果">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <div class="content" v-if="detail.auditStatus === 2">
      <img src="@/assets/shenhe.png" alt="" style="width:150px;"/>
      <p class="title_tips_red">抱歉根据系统综合评定，您暂未通过本次借款申请，请补充资料后，再次提交。谢谢</p>
    </div>
    <div class="content" v-if="detail.auditStatus === 0">
      <img src="@/assets/shenhe.png" alt="" style="width:150px;"/>
      <p class="title_tips_red">审核中，请耐心等待...</p>
    </div>
    <div class="content" v-if="detail.auditStatus === 1">
      <img src="@/assets/jieqian.png" alt="" style="width:150px;"/>
      <p class="title">初始审核通过，审批金额：</p>
      <p class="title_tips">最高可借额度（元）</p>
      <p class="input_msg">{{detail.auditMoney}}</p>
    </div>
    <div class="apply_btn" v-if="detail.auditStatus !== 2">
      <cube-button class="btn" @click="handlePay()">支付管理费</cube-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail: JSON.parse(this.$route.query.detail)
    }
  },
  methods: {
    handleApply(){
      this.$router.push(`/`);
    },
    handlePay(){
      this.$router.push(`/jiekuan-pay`);
    }
  }
}
</script>

<style lang="less" scoped>
.p_apply_page{
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
    background: #fff;
    padding-top: 19px;
    padding-bottom: 10px;
    text-align: center;
    .title{
      text-align: left;
      margin-top: 20px;
    }
    .title_tips{
      margin: 20px 0 10px;
      color: #9C9C9C;
    }
    .title_tips_red{
      color: #F56968;
      left: 31px;
      height: 94px;
      line-height: 20px;
      color: rgba(245, 105, 104, 1);
      font-size: 16px;
      text-align: left;
      width: 280px;
      margin:57px auto;
    }
    .input_msg{
      max-width: 215px;
      overflow: hidden;
      margin:0 auto;
      text-align: center;
      font-size: 48px;
      line-height: 70px;
      border-bottom: 1px solid #d9d9d9;
      margin-bottom: 20px;
    }
  }
  .apply_btn{
    margin-top: 10px;
    padding: 20px 30px;
    background: #fff;
    .btn{
      background: #F56968;
      border-radius: 7px;
      height: 56px;
      font-size: 16px;
    }
  }
}
</style>

