import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageResult state domain
 */

const selectPageResultDomain = state => state.pageResult || initialState;
const selectListQuestionFaild = state => state.pageExercise;
const selectScore = state => state.pageExercise;
/**
 * Other specific selectors
 */

/**
 * Default selector used by PageResult
 */

const makeSelectPageResult = () =>
  createSelector(
    selectPageResultDomain,
    substate => substate,
  );
const makeSelectListQuestionFaild = () =>
  createSelector(
    selectListQuestionFaild,
    state => (state ? state.questionFaild : []),
  );
const makeSelectScore = () =>
  createSelector(
    selectScore,
    state => (state ? state.score : 0),
  );

export default makeSelectPageResult;
export { selectPageResultDomain, makeSelectListQuestionFaild, makeSelectScore };
