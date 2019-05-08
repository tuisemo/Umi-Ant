import { addUser, getUsers } from '@/services/demo';

export default {
  namespace: 'demo',
  state: {},
  effects: {
    *addUser({ payload }, { call }) {
      const res = yield call(addUser, payload);
      return res;
    },
    *getUsers({ payload }, { call }) {
      const res = yield call(getUsers, payload);
      return res;
    },
  },
  reducers: {},
};
