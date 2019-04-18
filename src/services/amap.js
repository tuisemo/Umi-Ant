import {
  extend
} from 'umi-request';
import { notification } from 'antd';


const request = extend({});


export async function getMapAddress(data = {}) {
  data = Object.assign({
    'key': 'ff769b88d0624cb17b757b94a8a18cf1',
    'citylimit': true
  }, data)
  return request('https://restapi.amap.com/v3/place/text', {
    method: 'get',
    params: data
  });
}
