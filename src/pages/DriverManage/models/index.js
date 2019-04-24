import { fetchDriverList, fetchDriverDetail } from '@/services/driverManage';

export default {
  namespace: 'driverManage',

  state: {},

  effects: {
    *fetchDriverList({ payload }, { call }) {
      // eslint-disable-line
      const res = yield call(fetchDriverList, payload);
      return res;
    },
    *fetchDriverDetail({ payload }, { call }) {
      // eslint-disable-line
      const res = yield call(fetchDriverDetail, payload);
      return res;
    },
  },

  reducers: {},
};
