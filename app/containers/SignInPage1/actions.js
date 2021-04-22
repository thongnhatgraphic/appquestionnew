/*
 *
 * SignInPage1 actions
 *
 */
import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILD, LOG_OUT } from './constants';

export const signIn = user => ({
  type: SIGN_IN,
  user,
});

export const signInSuccess = data => ({
  type: SIGN_IN_SUCCESS,
  data,
});

export const signInFaild = (error, message) => ({
  type: SIGN_IN_FAILD,
  error,
  message,
});

export const logOutAccount = () => ({
  type: LOG_OUT,
});
