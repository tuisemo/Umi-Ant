import Cookies from 'js-cookie'
import md5 from 'blueimp-md5'
import { TokenKey, TenantIdKey, Salt } from '@/config/'

// expires see: https://github.com/js-cookie/js-cookie/wiki/Frequently-Asked-Questions#expire-cookies-in-less-than-a-day
// 接口返回的 token 有效期目前为 1 天
const oneDay = 1
// const testMinutes = new Date(new Date().getTime() + 2 * 60 * 1000) //For test 2 minutes

export function getSign(signParam) {
  return md5(`${signParam}@${Salt}`)
}

export function setToken(token) {
  // stk use for private upload file to be read
  Cookies.set('stk', token.token, { expires: oneDay })
  return Cookies.set(TokenKey, token, { expires: oneDay })
}

export function getTokenObj() {
  return Cookies.getJSON(TokenKey) || {}
}

export function getToken() {
  const { token = '' } = getTokenObj()
  return token
}

export function getTokenExpires() {
  const { expiration = 0 } = getTokenObj()
  return expiration
}

export function removeToken() {
  Cookies.remove(TenantIdKey)
  Cookies.remove('stk')
  return Cookies.remove(TokenKey)
}

export function setTenantId(tenantId) {
  return Cookies.set(TenantIdKey, tenantId)
}

export function getTenantId() {
  return Cookies.get(TenantIdKey) || -1
}

export function removeTenantId() {
  return Cookies.remove(TenantIdKey)
}

export function getLogoImg() {
  switch (getTenantId()) {
    case '800001':
      return 'https://cdn2.yueyuechuxing.cn/public/a29fbe63c1144686bb5278fee6e3c450.png'
    case '800002':
      return 'https://cdn2.yueyuechuxing.cn/public/ff19ddc3510243f495405daf5a37e9c3.png'
    default:
      return 'https://cdn2.yueyuechuxing.cn/public/ff19ddc3510243f495405daf5a37e9c3.png'
  }
}

export function getLogoTextImg() {
  switch (getTenantId()) {
    case '800001':
      return 'https://cdn2.yueyuechuxing.cn/public/f6ec14f137db4971b7d04ef8373b08d5.png'
    case '800002':
      return 'https://cdn2.yueyuechuxing.cn/public/96c9b4f9b17e4257b5f3d54454072cb2.png'
    default:
      return 'https://cdn2.yueyuechuxing.cn/public/96c9b4f9b17e4257b5f3d54454072cb2.png'
  }
}
