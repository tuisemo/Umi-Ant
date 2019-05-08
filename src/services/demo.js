import { extend } from 'umi-request';

const request = extend({});

export function addUser(data = {}) {
  return request('/api/addUser', {
    method: 'post',
    // body: JSON.stringify(data),
    data,
  });
}

export function getUsers() {
  return request('/api/getUsers', {
    method: 'get',
  });
}
