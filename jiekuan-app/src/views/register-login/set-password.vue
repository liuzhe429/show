<template>
  <div class="p_setpassword_page">
    <mt-header fixed title="设置密码">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <p class="step_line">
      <span>1.输入手机号 > </span>
      <span >2.输入验证码 > </span>
      <span class="active"> 3.设置密码</span>       
    </p>
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
      <cube-button class="post_btn" @click="canClick ? handlePost() : ''">确认提交</cube-button>
    </main>
  </div>
</template>
<script>
import {showToastOnly} from '@/libs/utils';
export default {
  data() {
    return {
      mobile: this.$route.query.mobile,
      verifyCode: this.$route.query.verifyCode,
      type: this.$route.query.type,
      password: '',
      surePassword: '',
      canClick: true
    }
  },
  methods: {
    handlePost() {
      this.canClick = false;
      if (this.password ==='') {
        showToastOnly({
          that: this,
          msg: '输入密码',
          time: 2000
        });
        this.canClick = true;
        return false;
      } else if (this.surePassword === '') {
        showToastOnly({
          that: this,
          msg: '请输入确认密码',
          time: 2000
        });
        this.canClick = true;
        return false;
      } else if (this.password !== this.surePassword) {
        showToastOnly({
          that: this,
          msg: '两次密码不一致',
          time: 2000
        });
        this.canClick = true;
        return false;
      } else {
        this.$service.post('/regist', {
          mobile: this.mobile,
          verifyCode: this.verifyCode,
          password: this.password
        }, true).then(res => {
          if(res.code === 0) {
            this.$router.push('/');
          } else{
          showToastOnly({
            that: this,
            msg: res.msg,
            time: 2000
          });
            this.canClick = true;
          }
        });
        
      }
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
  padding:45px 0px 10px;
  background: #f2f2f2;
  &_content{
    padding: 0 10px;
  }
  .step_line{
    height: 45px;
    line-height: 45px;
    background: #fff;
    margin-bottom: 10px;
    color: #101010;
    .active{
      color:#F76968;
    }
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


