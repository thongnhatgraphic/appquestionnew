/* eslint-disable no-param-reassign */
/*
 *
 * SignInPage1 reducer
 *
 */
import produce from 'immer';
import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILD, LOG_OUT } from './constants';

export const initialState = {
  user: {
    name: '',
    displayName: '',
    identification: '',
    password: '',
  },
  message: '',
  resultRedirect: false,
};

const signInPage1Reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGN_IN:
        break;
      case SIGN_IN_SUCCESS:
        localStorage.setItem(
          'save accout',
          JSON.stringify(!state.resultRedirect),
        );
        localStorage.setItem(
          'user',
          JSON.stringify({
            name: action.data.name,
            displayName: action.data.displayName,
          }),
        );
        draft.user = JSON.parse(localStorage.getItem('user'));
        draft.message = 'Đăng Nhập Thành Công';
        draft.resultRedirect = JSON.parse(localStorage.getItem('save accout'));
        break;
      case SIGN_IN_FAILD:
        draft.message = action.message;
        draft.resultRedirect = false;
        break;

      case LOG_OUT:
        localStorage.removeItem('user');
        localStorage.removeItem('save accout');
        draft.resultRedirect = false;
        draft.message = '';
        break;
      default:
        break;
    }
  });

export default signInPage1Reducer;
