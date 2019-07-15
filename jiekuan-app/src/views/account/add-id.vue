<template>
  <div class="p_addBankCard_page">
    <mt-header fixed title="完善身份证信息">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <mt-field label="身份证号" placeholder="请输入身份证号" v-model="idnoNew" disableClear></mt-field>
    <div class="post_btn">
      <cube-button class="btn" @click="canClick ? handlePost() : ''">{{idno ? '修改' : '添加'}}</cube-button>
    </div>
  </div>
</template>
<script>
import { showToastOnly } from '@/libs/utils';
export default {
  data(){
    return {
      idno: '',
      idnoNew: '',
      canClick: true
    }
  },
  created() {
    this.$service.post('/getUserInfo',{
      token: this.$Cookies.get('token')
    }).then(res => {
      if (res.userInfo) {
        this.idno = res.userInfo.idno;
        this.idnoNew = this.idno;
      }
    });
  },
  methods: {
    handlePost(){
      if (this.idnoNew === this.idno) {
        showToastOnly({
          that: this,
          msg: '身份证已存在',
          time: 2000
        });
        return;
      }
      this.canClick = false;
      this.$service.post('/addIdCard',{
        token: this.$Cookies.get('token'),
        idno: this.idnoNew
      }, true).then(res => {
        if (res.code !== 0) {
          this.canClick = true;
          showToastOnly({
            that: this,
            msg: res.msg,
            time: 2000
          });
        } else {
          this.$router.go(-1);
          showToastOnly({
            that: this,
            msg: '添加成功',
            time: 2000
          });
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