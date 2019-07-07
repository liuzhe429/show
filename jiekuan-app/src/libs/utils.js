/**
 * 登录方法 封装
 * @param {*} obj 
 */
export function login(obj) {
  return new Promise((resolve) => {
    let {that, url = '/login', mobile, password} = obj;
    that.$service.post(url, {
      mobile: mobile,
      password: password
    }, true).then(res => {
      if (res.code === 0) {
        that.$Cookies.set('token', res.data.token);
      }
      resolve(res);
    })
  })
}
/**
 * toast 封装
 * @param {*} obj 
 */
export function showToastOnly(obj) {
  let {that, msg, time = 2000, type = 'txt'} = obj;
  that.toast = that.$createToast({
    txt: msg,
    type: type,
    time: time,
  })
  that.toast.show()
}
/**
 * 手机号隐私保护
 * @param mobile
 * @returns {*}
 */
export function secrecyMobile (mobile){
  if (!/\d{11}/.test(mobile)) {
      return mobile;
  }
  return mobile.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3');
}
export default {
  login: login,
  showToastOnly: showToastOnly,
  secrecyMobile: secrecyMobile
}