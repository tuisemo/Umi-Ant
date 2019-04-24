import { query as queryUsers, queryCurrent, fetchLogin } from '@/services/user';
import { setToken, setTenantId } from '@/utils/auth';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
  },

  effects: {
    *Login({ payload }, { call, put }) {
      // eslint-disable-line
      const res = yield call(fetchLogin, payload);
      yield put({
        type: 'saveUserInfo',
        payload: res.data,
      });
      yield put(
        routerRedux.replace({
          pathname: '/',
        })
      );
    },
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },

  reducers: {
    saveUserInfo(state, action) {
      const userInfo = action.payload.userVO || {};
      const tenantId = userInfo.tenantId || -1;
      setToken({
        token: action.payload.token,
        expiration: action.payload.expiration,
      });
      setTenantId(tenantId);
      return {
        ...state,
        token: action.payload.token,
        userInfo: action.payload.userVO,
      };
    },
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
