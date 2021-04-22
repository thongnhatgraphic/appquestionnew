/*
 *
 * PageExercise actions
 *
 */

import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILD,
  SUBMIT_VALUE,
  SUBMIT_VALUE_SUCCESS,
  SUBMIT_VALUE_FAILD,
} from './constants';

export const fetchListQuestion = () => ({
  type: FETCH_DATA,
});

export const fetchListQuestionSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

export const fetchListQuestionFaild = error => ({
  type: FETCH_DATA_FAILD,
  error,
});

export const submitValue = data => ({
  type: SUBMIT_VALUE,
  data,
});

export const submitValueSuccess = (score, arrFaild) => ({
  type: SUBMIT_VALUE_SUCCESS,
  score,
  arrFaild,
});

export const submitValueFaild = mes => ({
  type: SUBMIT_VALUE_FAILD,
  mes,
});
