<template>
  <div class="p_wait_page">
    <mt-header fixed title="借款">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <div class="content">
      <img src="@/assets/postsuccess.png" alt="" style="width:90px;"/>
      <p>系统审核中，请耐心等待......</p>
      <cube-button class="btn" @click="handlePay()">返回首页</cube-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handlePay(){
      this.$router.push('/');
    }
  }
}
</script>

<style lang="less" scoped>
.p_wait_page{
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
    width: 286px;
    height: 94px;
    line-height: 40px;
    color: rgba(51, 148, 49, 1);
    font-size: 16px;
    .btn{
      width: 305px;
      position: fixed;
      bottom: 70px;
      left: 30px;
      border: 1px solid #F56968;
      background: transparent;
      color: #F56968;
    }
  }
}
</style>

