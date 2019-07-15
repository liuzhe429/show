import { localSettings } from '@common/utils';

// 混入全局窗口切换效果
export default {
  computed: {
    // 设置过度效果
    transitionName() {
      const {meta = {}} = this.$route;
      const { transitionName = 'fade-common' } = meta;
      return this.localSettings('transtion') ? transitionName : '';
    }
  },
  methods: {
    // 获取本地setting对象
    // setting存储的key
    localSettings(key) {
      return localSettings(key);
    }
  }
};