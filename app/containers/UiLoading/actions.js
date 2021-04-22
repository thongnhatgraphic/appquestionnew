/*
 *
 * UiLoading actions
 *
 */

import { SHOW_LOADING, HIDE_LOADING } from './constants';

export function showLoadingAction() {
  return {
    type: SHOW_LOADING,
  };
}

export function hideLoadingAction() {
  return {
    type: HIDE_LOADING,
  };
}
