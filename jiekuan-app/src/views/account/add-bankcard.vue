<template>
  <div class="p_addBankCard_page">
    <mt-header fixed :title="id ? '修改银行卡': '添加银行卡'">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <mt-field label="银行名称" placeholder="请输入银行名称" v-model="bankCode" disableClear></mt-field>
    <mt-field label="卡号" placeholder="请输入卡号" v-model="cardNo" disableClear></mt-field>
    <div class="post_btn">
      <cube-button class="btn" @click="canClick ? handlePost() : ''">添加</cube-button>
    </div>
  </div>
</template>
<script>
import { showToastOnly } from '@/libs/utils';
import { setTimeout } from 'timers';
export default {
  data(){
    return {
      id: this.$route.query.id,
      cardNo: '',
      bankCode: '',
      canClick: true
    }
  },
  methods: {
    handlePost(){
      if (this.bankCode === '') {
        showToastOnly({
          that: this,
          msg: '请输入银行名称',
          time: 2000
        });
        return;
      }
      if (this.cardNo === '') {
        showToastOnly({
          that: this,
          msg: '请输入卡号',
          time: 2000
        });
        return;
      }
      this.canClick = false;
      this.$service.post('/addCard',{
        token: this.$Cookies.get('token'),
        bankCode: this.bankCode,
        cardNo: this.cardNo
      }, true).then(res => {
        if (res.code !== 0) {
          this.canClick = true;
          showToastOnly({
            that: this,
            msg: res.msg,
            time: 2000
          });
        } else {
          showToastOnly({
            that: this,
            msg: '添加成功',
            time: 2000
          });
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
.p_addBankCard_page{
  position: absolute;
  color: #101010;
  font-size: 14px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding:75px 0px 10px;
  background: #fff;
  /deep/ .mint-field{
    border-bottom: 1px solid #eee;
  }
  .post_btn{
    margin-top: 30px;
    padding: 20px 30px;
    background: #fff;
    .btn{
      background: #F56968;
      border-radius: 7px;
      height: 56px;
      font-size: 16px;
    }
  }
  .sex_line{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    span{
      width: 122px;
      font-size: 16px;
    }
    .select{
      width: 80px;
      border: none;
    }
    .cube-select::after{
      border: none;
    }
  }
}
</style>