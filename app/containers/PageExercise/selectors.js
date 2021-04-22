import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageExercise state domain
 */

const selectPageExerciseDomain = state => state.pageExercise || initialState;
const selectListQuestion = state => state.pageExercise;
/**
 * Other specific selectors
 */

/**
 * Default selector used by PageExercise
 */

const makeSelectPageExercise = () =>
  createSelector(
    selectPageExerciseDomain,
    substate => substate,
  );

const makeSelectListQuestion = () =>
  createSelector(
    selectListQuestion,
    dataQuestions => (dataQuestions ? dataQuestions.listQuestion : []),
  );

export default makeSelectPageExercise;
export { selectPageExerciseDomain, makeSelectListQuestion };
