import { queryBasicProfile, queryAdvancedProfile } from '@/services/api';

export default {
  namespace: 'manage',

  state: {
    basicGoods: []
  },

  effects: {
    *fetchBasic(_, { call, put }) {
      const response = yield call(queryBasicProfile);
      yield put({
        type: 'show',
        payload: response,
      });
    }

  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
