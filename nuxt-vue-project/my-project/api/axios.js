import axios from "axios";
// import Qs from 'qs';
// var url = location.origin

//  let token = window.localStorage.getItem("token");
//  axios.defaults.headers.common['token'] = token;
// axios.defaults.baseURL = url;

axios.defaults.timeout = 15000;
// axios.defaults.transf ormRequest = [function(data) {
//   data = Qs.stringify(data)
//   return data
// }]

axios.defaults.transformResponse = [function (data) {
  data = JSON.parse(data)
  return data
}]

axios.interceptors.request.use(function(config) {
  console.log("请求开始")
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
  console.log("请求结束 ")
  return res;
}, (error) => {
  return Promise.reject(error);
});


function http(type,url, params,contentType) {
  let contType = contentType=='json' ? 'application/json':'application/x-www-form-urlencoded'
  // let paramstranform = contentType == 'json' ? params : Qs.stringify(params)
  let paramstranform = contentType == 'json' ? params : JSON.stringify(params)
  if(type == "get"){
    return new Promise((resolve, reject) => {
      axios({
        method:'get',
        url:url,
        // headers: {'token' : localStorage.token},
        params:params
      })
      .then((res) => {
        resolve(res.data)
      }).catch(err => {
        if (err == "Error: timeout of 15000ms exceeded") {
          console.log("服务器请求超时")
          return
        }
        alert(err)
      })
    })
  }else{
    return new Promise((resolve,reject)=>{
       axios({
        method:'post',
        url:url,
        headers: {'Content-Type': contType},
        data:paramstranform
      })
      .then((res)=>{
        resolve(res.data)
      }).catch(err=>{
        if(err == "Error: timeout of 15000ms exceeded"){
          alert("服务器请求超时,请刷新页面重新进入")
        }
        alert(err)
      })
    })
  }
}

export default http
