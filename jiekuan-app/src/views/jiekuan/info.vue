<template>
  <div class="p_info_page">
    <mt-header fixed title="个人信息补充">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <mt-field label="姓名" placeholder="请输入姓名" v-model="loanName" disableClear></mt-field>
    <!-- <mt-field label="性别" placeholder="请输入性别" v-model="sex" disableClear></mt-field> -->
    <div class="sex_line">
      <span>性别</span>
      <cube-select
        class="select"
        v-model="sex"
        title="性别"
        :options="sexOptions"
        placeholder="请输入性别"
        :auto-pop="autoPop"
        :disabled="disabled"
        @change="changeOption">
      </cube-select>
    </div>
    <mt-field label="身份证号" placeholder="请输入身份证号" v-model="idcard" disableClear></mt-field>
    <mt-field label="出生日期" type="date" placeholder="请输入出生日期" v-model="birth" disableClear></mt-field>
    <mt-field label="联系电话" placeholder="请输入联系电话" v-model="contact" disableClear></mt-field>
    <mt-field label="年收入" placeholder="请输入年收入" v-model="income" disableClear></mt-field>
    <div class="sex_line">
      <span>有无车贷</span>
      <cube-select
        class="select"
        v-model="carLoan"
        title="车贷"
        :options="loanOptions"
        placeholder="请输入有无车贷"
        :auto-pop="autoPop"
        :disabled="disabled"
        @change="changeCarOption">
      </cube-select>
    </div>
    <div class="sex_line">
      <span>有无房贷</span>
      <cube-select
        class="select"
        v-model="housingLoan"
        title="房贷"
        :options="loanOptions"
        placeholder="请输入有无房贷"
        :auto-pop="autoPop"
        :disabled="disabled"
        @change="changeHouseOption">
      </cube-select>
    </div>
    <!-- <mt-field label="有无车贷" placeholder="请输入有无车贷" v-model="carLoan" disableClear></mt-field> -->
    <!-- <mt-field label="有无房贷" placeholder="请输入有无房贷" v-model="housingLoan" disableClear></mt-field> -->
    <mt-field label="信用卡额度" placeholder="请输入信用卡额度" v-model="creditLimit" disableClear></mt-field>
    <div class="post_btn">
      <cube-button class="btn" @click="canClick ? handlePost() : ''">提交资料</cube-button>
    </div>
  </div>
</template>
<script>
import { showToastOnly } from '@/libs/utils';
export default {
  data(){
    return {
      canClick: true,
      sexOptions: [{
        value: '1',
        text: '男'
      },{
        value: '2',
        text: '女'
      }],
      sexTitle: '性别',
      loanOptions: [{
        value: 2,
        text: '无'
      }, {
        value: 1,
        text: '有'
      }],
      carLoanTitle: '车贷',
      housingLoanTitle: '房贷',
      autoPop: false,
      disabled: false,
      amount: this.$route.query.amount,
      periods: this.$route.query.periods,
      loanName: '',
      // sex: this.sex,
      sex: '1',
      idcard: '',
      loanType: this.$route.query.type,
      birth: '1990-01-01',
      contact: '',
      income: '',
      creditLimit: '',
      carLoan: 2,
      housingLoan: 2
    }
  },
  methods: {
    changeOption(value) {
      // female 1 女
      this.sex = value;
      // console.log(value, index, text);
    },
    changeCarOption(value) {
      // 1 1 "有"
      this.carLoan = value;
      // console.log(value, index, text);
    },
    changeHouseOption(value) {
      this.housingLoan = value;
      // console.log(value, index, text);
      // changeHouseOption(value, index, text)
    },
    handlePost(){
      this.canClick = false;
      // this.idcard = '13053319980425489';
      // this.birth = '1996-01-02';
      // this.contact = '15201800977';
      // this.income = 10000;
      // this.creditLimit = 10000;
      if (this.amount === '' || this.loanName === '' || this.idcard === '' || this.contact === '' || this.income === '' || this.creditLimit === '') {
        showToastOnly({
          that: this,
          msg: '请完善借款信息',
          time: 2000
        });
        this.canClick = true;
      } else {
        this.$service.post(`/loanApply`, {
          amount: this.amount,
          periods: this.periods,
          loanName: this.loanName,
          sex: this.sex,
          idcard: this.idcard,
          loanType: this.loanType,
          birth: this.birth,
          contact: this.contact,
          income: this.income,
          creditLimit: this.creditLimit,
          carLoan: this.carLoan,
          housingLoan: this.housingLoan,
          token: this.$Cookies.get('token')
        }, true).then(res => {
          if (res.code !== 0) {
            this.canClick = true;
            showToastOnly({
              that: this,
              msg: res.msg,
              time: 2000
            });
          } else {
            this.$router.push(`/jiekuan-pay?amount=${this.amount}`);
          }
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
.p_info_page{
  position: absolute;
  color: #101010;
  font-size: 14px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding:45px 0px 10px;
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

