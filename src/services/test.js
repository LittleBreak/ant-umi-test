import request from '@/utils/request';

export async function test() {
  return request('/api/test');
}
export async function user() {
  return request('/api/user');
}
