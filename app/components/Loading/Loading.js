import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

Loading.propTypes = {
  isLoad: PropTypes.bool,
};
const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
function Loading(props) {
  const classes = useStyles();
  const { isLoad } = props;
  const showLoad = value =>
    value ? (
      <div>
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    ) : (
      ''
    );

  return showLoad(isLoad);
}

export default Loading;
