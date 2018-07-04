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
export default function* rootSaga() {
  yield [
      uploadRecordCommonMethods()
    ]
}
