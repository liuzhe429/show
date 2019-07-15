<template>
  <div class="admin_p_home_page">
    <header>
      <div class="admin_title">后台管理系统</div>
      <div @click="handleExit">退出登录</div>
    </header>
    <article>
      <nav>
        <ul>
          <li :class="activeMenu === '1' ? 'active' : ''" @click="changeMenu('1')">用户列表</li>
          <li :class="activeMenu === '2' ? 'active' : ''" @click="changeMenu('2')">问题列表</li>
          <li :class="activeMenu === '3' ? 'active' : ''" @click="changeMenu('3')">图片管理</li>
        </ul>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </article>
  </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/index.css';
import { showToastOnly } from '@/libs/utils';
export default {
  data() {
    return {
      activeMenu: '1'
    }
  },
  created() {
  },
  methods: {
    handleExit() {
      this.$service.post('/admin/admin_logout', {
        adminToken: this.$Cookies.get('adminToken')
      }, true).then(res => {
        if(res.code === 0) {
          showToastOnly({
            that: this,
            msg: '退出成功',
            time: 2000
          });
          this.$router.push('/admin/login');
        } else {
          showToastOnly({
            that: this,
            msg: res.msg,
            time: 2000
          });
        }
      }).catch(() => {
      });
    },
    changeMenu(index) {
      this.activeMenu = index;
      switch(index) {
        case '1':
          this.$router.push('/admin/home/user')
          break;
        case '2':
          this.$router.push('/admin/home/question')
          break;
        case '3':
          this.$router.push('/admin/home/add-pic')
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.admin_p_home_page{
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  bottom: 0;
  header{
    height: 50px;
    background: #2d3a4b;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 20px;
    .admin_title{
      font-size: 20px;
      font-weight: 20px;
    }
  }
  article{
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    nav{
      font-size: 18px;
      padding:20px 0;
      box-sizing: border-box;
      color:#fff;
      width: 200px;/*no*/
      min-width: 200px;/*no*/
      background: #2d3a4b;
      height: 100%;
      li{
        padding:0px 20px;
        text-align: left;
        height: 50px;
        line-height: 50px;
        &.active{
          background: #2d9a9b;
        }
      }
    }
    main{
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
}
</style>

