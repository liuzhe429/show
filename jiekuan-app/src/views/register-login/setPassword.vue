<template>
  <div class="p_setpassword_page">
    <mt-header fixed title="设置密码">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <main class="p_setpassword_page_content">
      <cube-input
        class="input_cell"
        v-model="password"
        placeholder="输入密码">
      </cube-input>
      <cube-input
        class="input_cell"
        v-model="surePassword"
        placeholder="确认密码">
      </cube-input>
      <p class="password_tips">密码长度8-32位，须包含数字、字母、符号至少2种或以上元素。</p>
      <cube-button class="post_btn" @click="handlePost">确认提交</cube-button>
    </main>
  </div>
</template>
<script>

export default {
  data() {
    return {
      password: '',
      surePassword: ''
    }
  },
  methods: {
    handlePost() {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="less" scoped>
.p_setpassword_page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding:55px 0px 10px;
  background: #f2f2f2;
  &_content{
    padding: 0 10px;
  }
  .password_tips{
    font-size: 12px;
    margin: 10px 0;
    color: #A9A9A9;
  }
  .input_cell {
    border: none;
    // background:#F2F2F2;
    margin-bottom: 10px;
  }
  /deep/ .mint-cell-wrapper{
    background-image: none;
  }
  .post_btn{
    background: #F76968;
    font-size: 16px;
  }
}
</style>


