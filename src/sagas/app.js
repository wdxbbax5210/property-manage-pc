import * as Act from 'actions';
import { put, select, call, takeEvery } from 'redux-saga/effects';
import util, { callTakeEvery, callTakeLatest } from '../lib/util.js';
import * as Fetch from 'server';
import dingApi from 'dingApi';

// 查询上传记录  Import.js
const uploadRecordCommonMethods = function*() {
  yield callTakeEvery(Act.UPLOAD_RECORD_METHODS, function*(action) {
    let data;
    if (action.api === 'manage') {
      data = yield call(Fetch.manage_upload_record, action.params || {});
    }
    if(data && data !== true){
      action.cb && action.cb(data);
    }
  });
};
const checkLogin = function*() {
  yield callTakeLatest(Act.CHECK_LOGIN, function*(action) {
    console.log("测试哈哈哈")
  })
};
// 项目启动配置基础设置
let start = function*() {
  // if (!__LOCAL__) {
    // 特殊处理 如果是login页面，则走login的js鉴权+免登 否则走这里的dd_config
    if (location.href.indexOf('#/login') < 0) {
      yield put({
        type: Act.CHECK_LOGIN
      });
    }
  // }
};
export default function* rootSaga() {
  yield [
      uploadRecordCommonMethods(),
      start(),
      checkLogin()
    ]
}
