import { test, user } from '@/services/test';

export default {
  // model名称
  namespace: 'test',
  // state
  state: {},
  // 路由监听
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {});
    },
  },
  // generator 函数
  effects: {
    *init({ payload }, { call, put }) {
      const data = yield call(test);
    },
    *user({ payload }, { call, put, select }) {
      const data = yield call(user);
    },
  },
  // reducer
  reducers: {
    // 更新state
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
