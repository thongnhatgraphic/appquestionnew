/**
 *
 * UiLoading
 *
 */

import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import makeSelectUiLoading, { makeSelectisLoad } from './selectors';
import Loading from '../../components/Loading/Loading';

export function UiLoading(props) {
  useInjectReducer({ key: 'uiLoading', reducer });
  useInjectSaga({ key: 'uiLoading', saga });

  const { isLoad } = props;
  console.log(isLoad);
  return <Loading isLoad={isLoad} />;
}

UiLoading.propTypes = {
  isLoad: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  uiLoading: makeSelectUiLoading(),
  isLoad: makeSelectisLoad(),
});

function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UiLoading);
