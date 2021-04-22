/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/**
 *
 * PageExercise
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import makeSelectPageExercise, { makeSelectListQuestion } from './selectors';
import reducer from './reducer';
import saga from './saga';
import MenuAppBar from '../../components/Header/Header';
import QuestionSingleChoice from '../../components/SingleChoice/QuestionSingleChoice';
import QuestionMultiChoice from '../../components/MultiChoice/QuestionMultiChoice';
import QuestionsWrite from '../../components/WriteAnswer/QuestionsWrite';
import { fetchListQuestion, submitValue } from './actions';
import { style } from './style';
import { logOutAccount } from '../SignInPage1/actions';

export function PageExercise(props) {
  useInjectReducer({ key: 'pageExercise', reducer });
  useInjectSaga({ key: 'pageExercise', saga });

  const {
    fetchListQuestionCreator,
    match,
    listQuesTionReceive,
    submitValuesCreator,
    classes,
    triggerLogOut,
  } = props;

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
    ...methods
  } = useForm();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('save accout'))) {
      fetchListQuestionCreator();
    } else {
      match.history.replace('/');
    }
  }, [JSON.parse(localStorage.getItem('save accout'))]);

  const showAllListQuestion = list => (
    <Grid container spacing={3}>
      {list.map(question => {
        if (question.type === 'radio') {
          return (
            <QuestionSingleChoice
              key={question.id}
              {...question}
              errors={errors}
              control={control}
              Controller={Controller}
            />
          );
        }
        if (question.type === 'checkbox') {
          return (
            <QuestionMultiChoice
              key={question.id}
              name={question.name}
              control={control}
              setValue={setValue}
              errors={errors}
              Controller={Controller}
              {...question}
            />
          );
        }
        return (
          <QuestionsWrite
            key={question.id}
            name={question.name}
            register={register}
            control={control}
            Controller={Controller}
            errors={errors}
            {...question}
          />
        );
      })}
    </Grid>
  );

  const handleSubmitForm = data => {
    let newData = {};
    let x;
    for (x in data) {
      newData = {
        ...newData,
        [x]:
          typeof data[x] === 'object' ? data[x] : data[x].toLowerCase().trim(),
      };
    }
    submitValuesCreator(newData);
    match.history.push('/page-result');
    reset();
  };

  return (
    <div>
      <MenuAppBar match={match} triggerLogOut={triggerLogOut} />
      <Toolbar />
      <div className={classes.main}>
        <Typography variant="h2" gutterBottom className={classes.align}>
          Bài Test Giải Trí
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            {/* <TextField {...register('test')} /> */}
            {showAllListQuestion(listQuesTionReceive)}
            <Box component="span" m={1}>
              <Button />
            </Box>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button type="submit" variant="contained" color="primary">
                Xem Kết Quả
              </Button>
            </Grid>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

PageExercise.propTypes = {
  fetchListQuestionCreator: PropTypes.func,
  submitValuesCreator: PropTypes.func,
  listQuesTionReceive: PropTypes.array,
  classes: PropTypes.object,
  match: PropTypes.object,
  triggerLogOut: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  pageExercise: makeSelectPageExercise(),
  listQuesTionReceive: makeSelectListQuestion(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchListQuestionCreator: () => dispatch(fetchListQuestion()),
    submitValuesCreator: data => dispatch(submitValue(data)),
    triggerLogOut: () => {
      dispatch(logOutAccount());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(style),
  withConnect,
  memo,
)(PageExercise);
