/**
 *
 * PageResult
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { withStyles } from '@material-ui/core';
import makeSelectPageResult, {
  makeSelectListQuestionFaild,
  makeSelectScore,
} from './selectors';
import reducer from '../PageExercise/reducer';
// import saga from './saga';
import { style } from './style';
import InforResult from '../../components/InforResult';

export function PageResult(props) {
  useInjectReducer({ key: 'pageExercise', reducer });

  const { score, questionFaild, match } = props;
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('save accout'))) {
      match.history.goBack('/');
    }
  }, [JSON.parse(localStorage.getItem('save accout'))]);
  return (
    <InforResult score={score} questionFaild={questionFaild} match={match} />
  );
}

PageResult.propTypes = {
  questionFaild: PropTypes.array,
  score: PropTypes.number,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  pageResult: makeSelectPageResult(),
  score: makeSelectScore(),
  questionFaild: makeSelectListQuestionFaild(),
});
const mapDispatchToProps = () => ({});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(style),
  withConnect,
)(PageResult);
