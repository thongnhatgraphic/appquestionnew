/**
 *
 * SignInPage1
 *
 */

import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';
import { ErrorMessage, FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import * as Yup from 'yup';
import reducer from './reducer';
import saga from './saga';
import { style } from './style';
import makeSelectSignInPage1, {
  makeSelectMessage,
  makeSelectIsSuccess,
} from './selectors';
import { signIn } from './actions';

export function SignInPage1(props) {
  useInjectReducer({ key: 'signInPage1', reducer });
  useInjectSaga({ key: 'signInPage1', saga });
  // console.log(messageNoti);
  const { classes, signInCreator, messageNoti, match, isSuccess } = props;
  const initialValues = {
    identification: '',
    password: '',
  };
  useEffect(() => {
    if (isSuccess) {
      match.history.push('/page-test');
    } else {
      match.history.replace('/');
    }
  }, [isSuccess]);

  const validationSchema = Yup.object().shape({
    identification: Yup.string()
      .min(6, 'Too Short!')
      .required("this field's require"),
    password: Yup.string()
      .min(6, 'Password length is not secure')
      .required("PassWord's require"),
  });

  const logIn = user => {
    signInCreator(user);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={logIn}
      validationSchema={validationSchema}
    >
      {formik => (
        <Container maxWidth="sm">
          <Paper elevation={0}>
            <div style={{ height: '100vh' }}>
              <div className={classes.main}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Typography variant="h4" gutterBottom>
                    Đăng Nhập
                  </Typography>
                </Grid>
                <Form className={classes.root} autoComplete="off">
                  <FormControl style={{ textAlign: 'center', width: '100%' }}>
                    <InputLabel htmlFor="component-simple">
                      Identification number
                    </InputLabel>
                    <FastField
                      margin="dense"
                      label="identification"
                      name="identification"
                      type="text"
                      as={Input}
                      required
                      error={formik.errors.name && formik.touched.name}
                    />
                    <ErrorMessage
                      name="identification"
                      component="div"
                      className="field-error"
                    >
                      {msg => <div className={classes.error}>{msg}</div>}
                    </ErrorMessage>
                  </FormControl>
                  <FormControl style={{ textAlign: 'center', width: '100%' }}>
                    <InputLabel htmlFor="component-simple">PassWord</InputLabel>
                    <FastField
                      margin="dense"
                      label="Password"
                      name="password"
                      type="password"
                      as={Input}
                      required
                      error={formik.errors.name && formik.touched.name}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="field-error"
                    >
                      {msg => <div className={classes.error}>{msg}</div>}
                    </ErrorMessage>
                  </FormControl>
                  <Box component="span" m={3} />
                  <div
                    style={{
                      textAlign: 'center',
                      color: 'red',
                      padding: 0,
                      width: '100%',
                    }}
                  >
                    {messageNoti}
                  </div>
                  <Box component="span" m={3} />
                  <div style={{ textAlign: 'center', width: '100%' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={
                        formik.values.identification.length < 6 ||
                        formik.values.password.length < 6
                      }
                      onClick={() => {
                        logIn(formik.values);
                      }}
                    >
                      Đăng Nhập
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Paper>
        </Container>
      )}
    </Formik>
  );
}

SignInPage1.propTypes = {
  match: PropTypes.object,
  classes: PropTypes.object,
  messageNoti: PropTypes.string,
  signInCreator: PropTypes.func,
  isSuccess: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  signInPage1: makeSelectSignInPage1(),
  messageNoti: makeSelectMessage(),
  isSuccess: makeSelectIsSuccess(),
});

const mapDispatchToProps = dispatch => ({
  signInCreator: dataUser => {
    dispatch(signIn(dataUser));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(style),
  withConnect,
  memo,
)(SignInPage1);
