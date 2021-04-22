import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signInPage1 state domain
 */

const selectSignInPage1Domain = state => state.signInPage1 || initialState;
const selectSignInPageMessage = state => state.signInPage1;
const selectSignInPageIsSuccess = state => state.signInPage1;
/**
 * Other specific selectors
 */

/**
 * Default selector used by SignInPage1
 */

const makeSelectSignInPage1 = () =>
  createSelector(
    selectSignInPage1Domain,
    substate => substate,
  );
const makeSelectMessage = () =>
  createSelector(
    selectSignInPageMessage,
    state => (state ? state.message : ''),
  );
const makeSelectIsSuccess = () =>
  createSelector(
    selectSignInPageIsSuccess,
    state => (state ? state.resultRedirect : false),
  );

export default makeSelectSignInPage1;
export { selectSignInPage1Domain, makeSelectMessage, makeSelectIsSuccess };
