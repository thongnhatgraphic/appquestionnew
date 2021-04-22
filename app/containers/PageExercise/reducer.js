/*
 *
 * PageExercise reducer
 *
 */
import produce from 'immer';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILD,
  SUBMIT_VALUE,
  SUBMIT_VALUE_SUCCESS,
  SUBMIT_VALUE_FAILD,
} from './constants';

export const initialState = {
  listQuestion: [],
  score: 0,
  notifyMessage: '',
  questionFaild: [],
};

/* eslint-disable default-case, no-param-reassign */
const pageExerciseReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_DATA:
        break;
      case FETCH_DATA_SUCCESS: {
        draft.listQuestion = [...action.data];
        break;
      }
      case FETCH_DATA_FAILD:
        break;
      case SUBMIT_VALUE:
        break;
      case SUBMIT_VALUE_SUCCESS:
        draft.score = action.score;
        draft.questionFaild = [...action.arrFaild];
        break;
      case SUBMIT_VALUE_FAILD:
        draft.notifyMessage = action.mes;
        break;
      default:
        break;
    }
  });

export default pageExerciseReducer;
