import Axios from 'axios';
import Qs from 'qs';
const axios = Axios.create({
  baseURL: '/',
  responseType: 'json',
  withCredentials: true,
  // proxy: {
  //   host: 'http://loan.com/'
  // },
  transformRequest: [
    function (data) {
      data = Qs.stringify(data);
      return data;
    }
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://loan.com/api';
  // axios.defaults.baseURL = 'http://47.75.162.32/';
}
axios.defaults.withCredentials = true;
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    let tokens = null;
    // 获取存储在cookie中的值，如果存在则在每个ajax请求的头部加上
    document.cookie.split(';').forEach((e) => {
      if (e.split('=')[0].trim() === 'adminToken') {
        tokens = e.split('=')[1];
      }
    });
    if (tokens && typeof tokens === 'string') {
      config.headers.Authorization = tokens;
    }
    return config;
  },
  function (error) {
    // 抛出错误
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// 返回生成的API接口
function returnApi(api) {
  let _api;
  if (!api || typeof api !== 'string') {
    return _api;
  }
  if (process.env.NODE_ENV === 'production') {
    _api = api;
  } else {
    _api = '/api'+ api;
  }
  return _api;
}
/**
 * GET
 *
 * @param {string} api, 请求路径,
 * @param {Object} data, 请求数据
 * @return {Deferred}, dfd
 */
function get(api, data, allback = 0) {
  let newApi = returnApi(api);
  if (!newApi) return;
  let formData = {
    url: newApi,
    method: 'GET',
    timeout: 10000,
    // 将序列化参数转换为字符串，使用这种方法需要先引入qs，也可以直接用JSON.stringify()进行转换
    paramsSerializer: function (params) {
      return Qs.stringify(params, {
        arrayFormat: 'brackets'
      });
    },
    // 设置跨域请求为true，如果是cros同源请求的话，则可以不用加此项
    withCredentials: true
  };
  // 判断参数是否存在，存在则传入方法中
  if (data && typeof data === 'object') {
    formData.params = data;
  }
  // 请求数据
  return returnResponse(formData, allback, api);
}

/**
 * POST
 *
 * @param {string} api, 请求路径,
 * @param {Object} data, 请求数据
 * @return {Deferred}, dfd
 */
function post(api, data, allback = 0) {
  let newApi = returnApi(api);
  if (!newApi) return;
  let formData = {
    url: newApi,
    method: 'POST',
    timeout: 10000,
    withCredentials: true,
    data
  };
  // 请求数据
  return returnResponse(formData, allback, api);
}
// 返回请求数据
function returnResponse(formData, allback, api) {
  // 使用Promise方法异步处理请求
  var promise = new Promise((resolve, reject) => {
    axios(formData)
      .then(function (response) {
        if (allback) {
          resolve(response.data);
        } else {
          resolve(checkState(response.data, api));
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
  return promise;
}
// 数据过滤
function checkState(res, api) {
  let newData = '';
  switch (res.code) {
    case 0:
      newData = res.data;
      break;
    case 9998:
      // 登录过期
      if(api.indexOf('admin') > 0) {
        window.location.href = '/'
      } else {
        window.location.href = '/admin/login'
      }
      break;
    default:
      break;
  }

  return newData;
}
// 上传图片
function uploadForm(api, formData, allback) {
  let newApi = returnApi(api);
  let instance = Axios.create({
    baseURL: '/',
    responseType: 'json',
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  let promise = new Promise((resolve, reject) => {
    instance.post(newApi, formData).then((res) => {
      // 后端返回的数据挂载在res.data内
      if (allback) {
        resolve(res.data);
      } else {
        resolve(checkState(res.data));
      }
    }).catch((err) => {
      reject(err);
    });
  });
  return promise;
}
export default {
  get: get,
  post: post,
  uploadForm: uploadForm
};
