<template>
  <div class="p_quick_register_page">
    <mt-header fixed :title="type === 'forget' ? '忘记密码' : '注册'">
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
        v-model="mobile"
        placeholder="请输入您的手机号">
      </cube-input>
      <cube-button class="msg_btn" @click="handleGetMsg">获取验证码</cube-button>
    </main>
  </div>
</template>
<script>
import {showToastOnly} from '@/libs/utils';
export default {
  data() {
    return {
      type: this.$route.query.type || '',
      mobile: ''
    }
  },
  methods: {
    handleGetMsg() {
      let phonereg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
      if (this.mobile === '') {
        showToastOnly({
          that: this,
          msg: '手机号不能为空哦',
          time: 2000
        });
        return false;
      } else if (!phonereg.test(this.mobile)) {
        showToastOnly({
          that: this,
          msg: '请输入正确的手机号',
          time: 2000
        });
        return false;
      } else {
        this.$service.post('/getVerifyCode', {
          token: this.$Cookies.get('ip_token'),
          mobile: this.mobile,
          type: this.type ? 2 : 1
        }, true).then(res => {
          if (res.code === 0) {
            showToastOnly({
              that: this,
              msg: '发送成功',
              time: 1000
            });
            this.$router.push(`/verifiy?type=${this.type}&mobile=${this.mobile}`);
          } else {
            showToastOnly({
              that: this,
              msg: res.msg,
              time: 2000
            });
          }
        }).catch(() => {
        });
      }
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
    height: 45px;
    line-height: 45px;
    background: #fff;
    margin-bottom: 10px;
    color: #101010;
    .active{
      color:#F76968;
    }
  }
  .p_quick_register_page_content{
    padding: 0 20px;
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
}
</style>


