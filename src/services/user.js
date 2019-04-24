import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function queryNotices() {
  return request('/api/notices');
}

export async function fetchLogin(data) {
  return request('/admin/v1/manage/token/create', {
    method: 'post',
    body: JSON.stringify(data),
  });
}
