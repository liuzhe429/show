<template>
  <div>
    <mt-tabbar v-model="tabSelected" fixed>
      <mt-tab-item id="1">
        <img v-if="tabSelected === '1'" slot="icon" src="https://m.ncfwx.com/images/footer_fixed_home_red.png" alt="">
        <img v-else slot="icon" src="https://m.ncfwx.com/images/footer_fixed_home_gray.png" alt="">
        借款
      </mt-tab-item>
      <mt-tab-item id="2">
        <img v-if="tabSelected === '2'" slot="icon" src="https://m.ncfwx.com/images/footer_fixed_found_red.png" alt="">
        <img v-else slot="icon" src="https://m.ncfwx.com/images/footer_fixed_found_gray.png" alt="">
        还款
      </mt-tab-item>
      <mt-tab-item id="3">
        <img v-if="tabSelected === '3'" slot="icon" src="https://m.ncfwx.com/images/footer_fixed_my_red.png" alt="">
        <img v-else slot="icon" src="https://m.ncfwx.com/images/footer_fixed_my_gray.png" alt="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'tabbar',
  props: {
    selected: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      tabSelected: this.selected
    }
  },
  watch: {
    tabSelected(val) {
      if (val === '1') {
        this.$router.push('/');
      } else if (val === '2') {
        this.$router.push('/huankuan');
      } else if (val === '3') {
        this.$router.push('/account');
      }
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .mint-tabbar{
  background: #fff;
  box-shadow: 0 -1px 2px #e3e3e3;

}
/deep/ .mint-tabbar > .mint-tab-item.is-selected{
  color:#ee4634;
  background-color: transparent;
  font-weight: bold;
}
</style>


