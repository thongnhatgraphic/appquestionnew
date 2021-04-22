import { call, put, takeEvery } from 'redux-saga/effects';
import * as requestApiCaller from '../../utils/request';
import { signInFaild, signInSuccess } from './actions';
import { SIGN_IN } from './constants';
import { showLoadingAction } from '../UiLoading/actions';
const URL_REQUEST = 'https://6041b1627f50e000173aae49.mockapi.io';
const END_POINT_USERS = '/users';

function* signProcessSaga({ user }) {
  const userSignIn = user;
  try {
    const respon = yield call(
      requestApiCaller.fetchListUserAxios,
      `${URL_REQUEST}${END_POINT_USERS}`,
    );
    let userBeFind;
    respon.data.forEach(item => {
      if (
        item.identification === userSignIn.identification &&
        item.password === userSignIn.password
      ) {
        userBeFind = item;
      }
    });
    if (userBeFind) {
      yield put(signInSuccess(userBeFind));
    } else {
      yield put(
        signInFaild(userBeFind, 'User account or PassWord not correct'),
      );
    }
  } catch (error) {
    yield put(signInFaild(error, 'API faild'));
  }
  yield put(showLoadingAction());
}

export default function* signInPage1Saga() {
  yield takeEvery(SIGN_IN, signProcessSaga);
}
