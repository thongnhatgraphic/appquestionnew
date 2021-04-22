import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the uiLoading state domain
 */

const selectUiLoadingDomain = state => state.uiLoading || initialState;
const selectIsLoad = state => state.uiLoading;
/**
 * Other specific selectors
 */

/**
 * Default selector used by UiLoading
 */

const makeSelectUiLoading = () =>
  createSelector(
    selectUiLoadingDomain,
    substate => substate,
  );

const makeSelectisLoad = () =>
  createSelector(
    selectIsLoad,
    state => (state ? state.isLoading : false),
  );

export default makeSelectUiLoading;
export { selectUiLoadingDomain, makeSelectisLoad };
