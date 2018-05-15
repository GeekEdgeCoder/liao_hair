export const appID = 'wx71bedcf67ea04d43';
export const getCheckSignInCode = (code)=>{
    return `https://api.weixin.qq.com/sns/jscode2session?appid=${appID}&secret=${appKey}&js_code=${code}&grant_type=authorization_code`;
}
export const appKey = '9b47c2387ceb5ec4b60de2efd5e6190e';