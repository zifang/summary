import Qs from 'qs'
import axios from 'axios'
// var url = location.origin

// let token = window.localStorage.getItem("token");
// axios.defaults.headers.common['token'] = token;
// axios.defaults.baseURL = url;

axios.defaults.timeout = 15000
// axios.defaults.transf ormRequest = [function(data) {
//   data = Qs.stringify(data)
//   return data
// }]

axios.defaults.transformResponse = [function (data) {
  data = JSON.parse(data)
  return data
}]

axios.interceptors.request.use(function (config) {
  console.log('请求开始')
  //http request拦截器
  // config => {
  //   if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
  //       config.headers.Authorization = `token ${store.state.token}`;
  //   }
  //   return config;
  // },
  // err => {
  //   return Promise.reject(err);
  // });

  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  console.log('请求结束 ')
  // response => {
  //   return response;
  // },
  // error => {
  // if (error.response) {
  //   switch (error.response.status) {
  //     case 401:
  //       // 返回 401 清除token信息并跳转到登录页面
  //       store.commit(types.LOGOUT);
  //       router.replace({
  //           path: 'login',
  //           query: {redirect: router.currentRoute.fullPath}
  //       })
  //   }
  // }
  return res
}, (error) => {
  return Promise.reject(error)
})
function http (type, url, params, contentType) {
  let contType = contentType === 'json' ? 'application/json' : 'application/x-www-form-urlencoded'
  let paramstranform = contentType === 'json' ? params : Qs.stringify(params)
  if (type === 'get') {
    return new Promise((resolve, reject) => {
      // alert("axios-token:::"+localStorage.token)
      axios({
        method: 'get',
        url: url,
        headers: {'token': localStorage.token},
        params: params
      })
      // axios.get(url, { params: params },{headers : {'token' : localStorage.token}})
      .then((res) => {
        resolve(res.data)
      }).catch(err => {
        if (err === 'Error: timeout of 15000ms exceeded') {
          console.log('服务器请求超时')
          return
        }
        alert(err)
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        headers: {'Content-Type': contType, 'token': localStorage.token},
        data: paramstranform
      })
      // axios.post(url,paramstranform,{headers:{'Content-Type': contType,'token' : localStorage.token}})
      .then((res) => {
        resolve(res.data)
      }).catch(err => {
        if (err === 'Error: timeout of 15000ms exceeded') {
          alert('服务器请求超时,请刷新页面重新进入')
        }
        alert(err)
      })
    })
  }
}

export default http
