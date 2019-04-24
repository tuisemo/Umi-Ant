import { extend } from 'umi-request';

const request = extend({});

export default async function getMapAddress(data = {}) {
  const params = Object.assign(
    {
      key: 'ff769b88d0624cb17b757b94a8a18cf1',
      citylimit: true,
    },
    data
  );
  return request('https://restapi.amap.com/v3/place/text', {
    method: 'get',
    params,
  });
}
