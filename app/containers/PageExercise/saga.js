import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { fetchListQuestionReQuest } from '../../utils/request';
import {
  fetchListQuestionFaild,
  fetchListQuestionSuccess,
  submitValueFaild,
  submitValueSuccess,
} from './actions';
import { FETCH_DATA, SUBMIT_VALUE } from './constants';
import { hideLoadingAction, showLoadingAction } from './../UiLoading/actions';

const URL_REQUEST = 'https://6041b1627f50e000173aae49.mockapi.io';
const END_POINT_QUESTIONS = '/questions';
// Individual exports for testing

function* fetchListQuestionSaga() {
  yield delay(2000);
  const respon = yield call(
    fetchListQuestionReQuest,
    `${URL_REQUEST}${END_POINT_QUESTIONS}`,
  );
  yield put(hideLoadingAction());
  if (respon.status === 200) {
    yield put(fetchListQuestionSuccess(respon.data));
  } else {
    yield put(fetchListQuestionFaild(respon.error));
  }
}

function* submitValueSaga({ data }) {
  yield put(showLoadingAction());
  const result = { ...data };
  const respon = yield call(
    fetchListQuestionReQuest,
    `${URL_REQUEST}${END_POINT_QUESTIONS}`,
  );
  if (respon.status === 200) {
    let score = 0;
    const listArr = respon.data;
    const arrFaild = [];
    listArr.forEach((question, index) => {
      const { name } = question;
      // console.log(question.answerTrue);
      // console.log(name);
      // eslint-disable-next-line no-prototype-builtins
      if (result.hasOwnProperty(name)) {
        // listAnswerTrue.push(question.answerTrue);
        // console.log(`lần ${index + 1}`, question.answerTrue);
        // console.log(`lần ${index + 1}`, result[name]);
        if (
          question.answerTrue === result[name] &&
          question.answerTrue.toLowerCase() === result[name].toLowerCase()
        ) {
          // console.log(`Lần ${index + 1}`, question.answerTrue);
          // console.log(result[name]);
          score += 1;
        } else if (
          typeof question.answerTrue === 'object' &&
          typeof result[name] === 'object' &&
          question.answerTrue.every(item => result[name].includes(item))
        ) {
          score += 1;
        } else {
          arrFaild.push(`Câu ${index + 1} Sai`);
        }
      }
    });
    yield put(submitValueSuccess(score, arrFaild));
  } else {
    yield put(submitValueFaild('Có lỗi xảy ra'));
  }
  yield put(hideLoadingAction());
}

export default function* pageExerciseSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(FETCH_DATA, fetchListQuestionSaga);
  yield takeEvery(SUBMIT_VALUE, submitValueSaga);
}
