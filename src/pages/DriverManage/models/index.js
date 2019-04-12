import {
    fetchDriverList,
    fetchDriverDetail
  } from '@/services/driverManage'
  
  export default {
  
    namespace: 'driverManage',
  
    state: {
    },
  
    subscriptions: {
      setup({
        dispatch,
        history
      }) { // eslint-disable-line
      },
    },
  
    effects: {
      * fetchDriverList({
        payload
      }, {
        call,
        put
      }) { // eslint-disable-line
        const res = yield call(fetchDriverList, payload)
        return res
      },
      * fetchDriverDetail({
        payload
      }, {
        call,
        put
      }) { // eslint-disable-line
        console.log('id: ', payload);
        const res = yield call(fetchDriverDetail, payload)
        return res
      },
    },
  
    reducers: {
    },
  
  };
  