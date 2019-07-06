<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'mint-ui/lib/style.css';
import Cookies from 'js-cookie';
export default {
  name: 'app',
  beforeCreate(){
    if (!Cookies.get('ip_token')) {
      this.$service.post('/api/getIpToken').then(res => {
        Cookies.set('ip_token', res.ip_token);
      }).catch(() => {
        // console.log(err);
      });
    }
    if (!this.$Cookies.get('token')) {
      this.$router.push('/login');
    }
  }
}
</script>

<style>
body{
  background: #F5F5F5;
  overflow-x: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
  /* background:#F8F8F8; */
}
.mint-header {
  background:#fff;
  height:45px;
  font-size: 18px;
  color:#101010;
  box-shadow: 0 0px 2px #e3e3e3;
}
.mint-cell-wrapper{
  background-image: none;
}
.mint-field-core{
  background: transparent;
}
input::-webkit-input-placeholder{
  color: #ccc;
  font-size: 14px;
}
</style>
