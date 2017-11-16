class userService {
  static getUserInfo ($http, baseUrl, params) { // 查询用户信息
    return $http('get', `${baseUrl}/getUserInfo`, params)
  }

  static updateUser ($http, baseUrl, params) { // 修改用户信息
    return $http('post', `${baseUrl}/updateUser`, params)
  }

  static phoneCodes ($http, baseUrl, params) { // 发送验证码
    return $http('get', `${baseUrl}/phoneCodes`, params)
  }

  static bindUserPhones ($http, baseUrl, params) { // 绑定用户
    return $http('post', `${baseUrl}/bindUserPhones`, params)
  }
}

export default userService
