<template>
  <div class="p_bankcard_page">
    <mt-header fixed title="我的银行卡">
      <mt-button @click="$router.go(-1)" slot="left">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <div class="p_bankcard_page_content">
      <ul class="card_list">
        <li class="card_item">
          <div class="left">
            <img src="@/assets/bankcard_red.png" alt="" style="width:56px;"/>
          </div>
          <div class="right">
            <mt-field label="姓名" placeholder="" readonly>刘哲</mt-field>
            <mt-field label="银行卡号" placeholder="" readonly>123456789011</mt-field>
          </div>
        </li>
        <li class="card_item">
          <div class="left">
            <img src="@/assets/bankcard_red.png" alt="" style="width:56px;"/>
          </div>
          <div class="right">
            <mt-field label="姓名" placeholder="" readonly>刘哲</mt-field>
            <mt-field label="银行卡号" placeholder="" readonly>123456789011</mt-field>
          </div>
        </li>
      </ul>
      <cube-button @click="addCard" outline class="add_btn">添加银行卡</cube-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bankList: []
    }
  },
  methods: {
    getList() {
      this.$service.post('/queryCardList',{
        token: this.$Cookies.get('token')
      }, true).then(res => {
        if (res.code === 0) {
          this.bankList = res.data.cardList;
        }
      });
    },
    addCard() {
      this.$router.push('/add-bankcard');
    }
  }
}
</script>
<style lang="less" scoped>
.p_bankcard_page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding:45px 0px 10px;
  background: #fff;
  &_content{
    .add_btn{
      color:#F56968;
      width: 350px;
      margin:0 auto;
      border-radius: 10px;
    }
    /deep/ .cube-btn-outline::after {
      border: 1px solid #F56968;
    }
    .card_list{
      margin-bottom: 40px;
      .card_item{
        display: flex;
        align-items: center;
        height: 120px;
        border-bottom: 1px solid #ddd;
        .left{
          padding: 0 20px;
        }
        .right{
          padding-right: 20px;
          /deep/ .mint-cell:nth-child(2n+1){
            border-bottom: 1px solid #ddd;
          }
          /deep/ .mint-cell:last-child{
            background: transparent;
          }
          /deep/ .mint-cell-title{
            text-align: left;
            color:#bbb;
          }
          /deep/ .mint-field .mint-cell-value{
            text-align: left;
          }
        }
      }
    }
  }
}
</style>

