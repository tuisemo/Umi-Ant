import request from '@/utils/request';

export default async function fetchOpenedCities(data = {}) {
  return request('/admin/v1/ops/business/opencity', {
    method: 'post',
    body: JSON.stringify(data),
  });
}
