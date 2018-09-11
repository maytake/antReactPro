
import { queryHomeDec } from '@/services/api';

export default {
  namespace: 'home',

  state: {
    dec: [],
  },

  effects: {
    *getHomeDec({ payload }, { call, put }) {
      const response = yield call(queryHomeDec, payload);
      yield put({
        type: 'homeDec',
        payload: response,
      });

    }

  },

  reducers: {
    homeDec(state, { payload }) {
      return {
        ...state,
        dec: payload,
      };
    },
  },
};
