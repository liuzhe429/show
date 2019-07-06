<template>
  <div class="p_apply_page">
    <mt-header fixed title="借款">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <div class="content">
      <img src="@/assets/jieqian.png" alt="" style="width:150px;"/>
      <p class="title">初始审核通过，审批金额：</p>
      <p class="title_tips">最高可借额度（元）</p>
      <p class="input_msg">200000000</p>
    </div>
    <div class="apply_btn">
      <cube-button class="btn" @click="handleApply">我要借钱</cube-button>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handleApply(){
      this.$router.push(`/shenhe-wait`);
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

