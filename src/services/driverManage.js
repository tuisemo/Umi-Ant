import request from '@/utils/request';

export function fetchDriverList(data={}) {
  return request('/admin/v1/assets/driver/pageList',{
    method:'post',
    body:JSON.stringify(data)
  });
}

export function fetchDriverDetail(data={}) {
  console.log('data: ', data);
  return request('/admin/v1/assets/driver/detail',{
    method:'post',
    body:JSON.stringify(data)
  });
}