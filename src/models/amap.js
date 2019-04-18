import {
  getMapAddress
} from '@/services/amap'
export default {
  namespace: 'amap',
  state: {

  },
  effects: {
    * getMapAddress({
      payload
    }, {
      call,
      put
    }) {
      const res = yield call(getMapAddress, payload)
      return res
    }

  },
  reducers: {

  }
}
