<template>
  <div class="p_register_page">
    <mt-header fixed title="找回密码">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <p class="step_line">
      <span class="active">选择验证方式</span>
      <span> > 安全验证</span>
      <span> > 找回登录密码</span>       
    </p>
    <main class="p_register_page_content">
      <p class="forget_verify">
        <span>短信</span>
        <span class="verify_btn" @click="handleVerify">立即验证</span>
      </p>
    </main>
  </div>
</template>
<script>

export default {
  methods: {
    handleVerify() {
      this.$router.push('/quick-register');
    }
  }
}
</script>

<style lang="less" scoped>
.p_register_page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding:45px 0px 10px;
  background: #f2f2f2;
  &_content{
    padding: 0 10px;
  }
  .step_line{
    height: 30px;
    line-height: 30px;
    background: #fff;
    margin-bottom: 10px;
    color: #101010;
    .active{
      color:#F76968;
    }
  }
  .forget_verify{
    height: 45px;
    line-height: 45px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    .verify_btn{
      color: #F76968;
      border: 1px solid #F76968;
      height: 30px;
      line-height: 30px;
      width: 85px;
      box-sizing: border-box;
    }
  }
}
</style>


