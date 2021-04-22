import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

LayoutRouter.propTypes = {
  route: PropTypes.object,
  component: PropTypes.func,
};

function LayoutRouter(props) {
  return (
    <div>
      <Grid container>
        <Route {...props} />
      </Grid>
    </div>
  );
}

export default LayoutRouter;
