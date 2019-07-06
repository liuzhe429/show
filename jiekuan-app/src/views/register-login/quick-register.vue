<template>
  <div class="p_quick_register_page">
    <mt-header fixed title="注册">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <p class="step_line">
      <span class="active">1.输入手机号</span>
      <span> > 2.输入验证码</span>
      <span> > 3.设置密码</span>       
    </p>
    <main class="p_quick_register_page_content">
      <cube-input
        class="input_cell"
        v-model="phone"
        placeholder="请输入您的手机号">
      </cube-input>
      <cube-button class="msg_btn" @click="handleGetMsg">获取验证码</cube-button>
    </main>
  </div>
</template>
<script>

export default {
  data() {
    return {
      phone: ''
    }
  },
  methods: {
    handleGetMsg() {
      this.$router.push('/verifiy');
    }
  }
}
</script>

<style lang="less" scoped>
.p_quick_register_page{
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
  .input_cell {
    border: none;
    margin-bottom: 10px;
  }
  /deep/ .mint-cell-wrapper{
    background-image: none;
  }
  .msg_btn{
    background: #F76968;
    font-size: 16px;
  }
}
</style>


