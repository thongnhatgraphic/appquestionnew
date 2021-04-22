import React from 'react';
import SignInPage from '../SignInPage1/index';
import PageExercise from '../PageExercise/index';
import NotFoundPage from '../NotFoundPage';
import PageResult from '../PageResult/index';

export const routes = [
  {
    path: '/',
    name: 'Đăng nhập',
    exact: true,
    component: match => <SignInPage match={match} />,
  },
  {
    path: '/page-test',
    name: 'Bài Kiểm Tra Trắc Nghiệm',
    exact: false,
    component: match => <PageExercise match={match} />,
  },
  {
    name: '/page-result',
    exact: false,
    component: match => <PageResult match={match} />,
  },
  {
    name: 'Not Found',
    exact: false,
    component: () => <NotFoundPage />,
  },
];
