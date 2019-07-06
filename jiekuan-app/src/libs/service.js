import Axios from 'axios';
import Qs from 'qs';
const axios = Axios.create({
  baseURL: '/',
  responseType: 'json',
  withCredentials: true,
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
axios.defaults.withCredentials = true;
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    let tokens = null;
    // 获取存储在cookie中的值，如果存在则在每个ajax请求的头部加上
    document.cookie.split(';').forEach((e) => {
      if (e.split('=')[0].trim() === 'token') {
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
  _api = api;
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
  return returnResponse(formData, allback);
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
  return returnResponse(formData, allback);
}
// 返回请求数据
function returnResponse(formData, allback) {
  // 使用Promise方法异步处理请求
  var promise = new Promise((resolve, reject) => {
    axios(formData)
      .then(function (response) {
        if (allback) {
          resolve(response.data);
        } else {
          resolve(checkState(response.data));
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
  return promise;
}
// 数据过滤
function checkState(res) {
  let newData = '';
  switch (res.code) {
    case 0:
      newData = res.data;
      break;
    case 3:
      break;
    case -1001:
      window.location = res.data;
      break;
    default:
      break;
  }

  return newData;
}
export default {
  get: get,
  post: post
};
