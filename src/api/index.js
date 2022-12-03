import request from "@/utils/request";


// 登陆接口
export const LoginAPI = ({ username, password }) => {
  return request({
    method:'POST',
    url:"/api/login", 
    data:{
      username,
      password
    },
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  });
};


// 注册接口
export const LogonAPI = ({ username, password }) => {
  return request({
    method:'POST',
    url:"/api/reguser", 
    data:{
      username,
      password
    },
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  });
};


//获取用户信息
export const userInfoAPI = (token) => {
  return request({
    url:"/my/userinfo", 
    headers:{Authorization:token}
  });
};


//修改用户信息
export const setInfoAPI = (token,username,nickname,email) => {
  return request({
    method:'post',
    url:"/my/userinfo",
    data:{
      username,
      nickname,
      email
    }, 
    headers:{
      Authorization:token,
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};

//修改用户密码
export const setPwdAPI = (token,oldPwd,newPwd) => {
  return request({
    method:'post',
    url:"/my/updatepwd",
    data:{
      oldPwd,
      newPwd
    }, 
    headers:{
      Authorization:token,
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};


//上传图片
export const updateAvatarAPI = (token,avatar) => {
  return request({
    method: 'post',
    url: 'my/update/avatar',
    data: {
      avatar
    },
    headers:{
      Authorization:token,
      'Content-Type':'application/x-www-form-urlencoded'
    }
  })
}

// 获取商品信息
export const getGoodsAPI = () => {
  return request({
    url:'/api/goods'
  })
}


// 加入购物车
export const getCartAPI = (token,goodsId) => {
  return request({
    method:'post',
    url:'/api/addCart',
    data:{
      goodsId
    },
    headers:{
      Authorization:token,
      'Content-Type':'application/x-www-form-urlencoded'
    }
  })
}

// 获取购物车信息
export const getGoodsCartAPI = (token) => {
  return request({
    method:'post',
    url:'/api/goodsCart',
    headers:{
      Authorization:token,
    }
  })
}


// 删除购物车信息
export const removeGoodsCartAPI = (removeId) => {
  return request({
    method:'post',
    url:'/api/removeCart',
    data:{
      removeId
    },
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  })
}
