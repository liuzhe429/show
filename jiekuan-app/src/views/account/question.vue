<template>
  <div class="p_question_page">
    <mt-header fixed title="常见问题" class="header">
      <mt-button slot="left" @click="handleBack">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <div class="">
      <img src="@/assets/question.png" alt="">
      <ul class="question_list">
        <li class="question_item">1，如何进行还款？</li>
        <li class="question_item">2，借款利息多少？</li>
        <li class="question_item">3，支持哪些银行卡？</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$service.post('/queryCardList', {
      token: this.$Cookies.get('token')
    }).then(res => {
    }).catch(() => {
      // console.log(err);
    });
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="less" scoped>
.p_question_page{
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding:70px 0px 10px;
  box-sizing: border-box;
  background: #fff;
  .question_list{
    margin-top: 40px;
    padding: 0 25px;
    text-align: left;
    font-size: 16px;
    height: 23px;
    line-height: 30px;
    color: rgba(16, 16, 16, 1);
    text-align: left;
    font-family: -apple-system;
  }
}
</style>
