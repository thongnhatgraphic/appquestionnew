/*
 *
 * UiLoading reducer
 *
 */
import produce from 'immer';
import { HIDE_LOADING, SHOW_LOADING } from './constants';

export const initialState = {
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const uiLoadingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_LOADING:
        draft.isLoading = true;
        break;
      case HIDE_LOADING:
        draft.isLoading = false;
        break;
    }
  });

export default uiLoadingReducer;
