<template>
  <div class="p_apply_page">
    <mt-header fixed title="借款">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <div class="content">
      <p class="title">借款金额</p>
      <mt-field
        disableClear
        type="number"
        label=""
        v-model="amount"
        class="input_msg"
        placeholder=""></mt-field>
      <p>还款方式 <i>按月还款 > </i></p>
      <i class="line"></i>
      <div class="timelimit">
        <p class="timelimit2">借款期限</p>
        <div class="limit_list">
          <mt-button
            v-for="(item, index) in list[type]"
            :key="index" type="default"
            :class="[active === index ? 'active' : '', `btn_${list[type].length}`]"
            @click="changeActive(index)">{{item}}</mt-button>
        </div>
      </div>
    </div>
    <i class="line"></i>
    <div class="apply_btn">
      <cube-button class="btn" @click="handleApply">立即申请</cube-button>
    </div>
    
  </div>
</template>
<script>
import {showToastOnly} from '@/libs/utils'
export default {
  data() {
    return {
      amount: '',
      type: this.$route.query.type,
      list: {
        identity: [3, 6, 9, 12],
        creditCard: [6, 12, 24],
        cream: [12, 24]
      },
      active: 0
    }
  },
  methods: {
    changeActive(type) {
      this.active = type;
    },
    handleApply(){
      if (this.amount === '') {
        showToastOnly({
          that: this,
          msg: '借款金额不能为空',
          time: 2000
        });
        return;
      } else {
        let periods = this.list[this.type][this.active];
        this.$router.push(`/info?amount=${this.amount}&type=${this.type}&periods=${periods}`);
      }
      
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
  padding:45px 0px 10px;
  background: #fff;
  .content{
    background: #fff;
    padding-top: 69px;
    padding-bottom: 10px;
    text-align: center;
    /deep/ .mint-field-core {
      caret-color:#101010;
      text-align: center;
      font-size: 36px;
      border-bottom: 1px solid #d9d9d9;
      margin-bottom: 20px;
    }
    .input_msg{
      width: 150px;
      margin:0 auto;
      text-align: center;
      
    }
    .line{
      width: 100%;
      background: #d9d9d9;
      height: 1px;
      display: block;
      margin: 15px 0 5px;
    }
    .timelimit{
      padding:20px 20px 10px;
      text-align: left;
      .limit_list{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        .mint-button{
          width: 93px;
          height: 44px;
          border: none;
          box-shadow:none;
          background: #E5E5E5;
          &.active{
            background: #F56968;
            color: #fff;
            font-size: 16px;
          }
        }
        .btn_2{
          width: 130px;
        }
        .btn_4{
          width: 70px;
        }
      }
    }
  }
  .line{
    width: 100%;
    height: 10px;
    display: block;
    background: #E5E5E5;
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

