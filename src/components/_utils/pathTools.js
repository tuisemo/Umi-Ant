// /userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
// eslint-disable-next-line import/prefer-default-export
export function urlToList(url) {
  const urllist = url.split('/').filter(i => i);
  return urllist.map((urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`);
}
/**
 * `拆解url并生成相应层级数量的完整路径`
 * `Example:`
 * `urlToList('/aaaa/bbbb/cccc')`
 * `输出`
 * `["/aaaa", "/aaaa/bbbb", "/aaaa/bbbb/cccc"]`
 */