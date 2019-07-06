export function login(obj) {
  return new Promise((resolve) => {
    let {that, url = '/api/login', mobile, password} = obj;
    that.$service.post(url, {
      mobile: mobile,
      password: password,
      verifyCode: '123456',
      name: 'arlene'
    }, true).then(res => {
      if (res.code === 0) {
        that.$Cookies.set('token', res.data.token);
      }
      resolve(res);
    })
  })
}
export function showToastOnly(obj) {
  let {that, msg, time = 2000, type = 'txt'} = obj;
  that.toast = that.$createToast({
    txt: msg,
    type: type,
    time: time,
  })
  that.toast.show()
}
export default {
  login: login,
  showToastOnly: showToastOnly
}