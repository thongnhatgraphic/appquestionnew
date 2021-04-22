import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

MenuAppBar.propTypes = {
  logOutCreator: PropTypes.func,
  match: PropTypes.object,
  triggerLogOut: PropTypes.func,
};

function MenuAppBar(props) {
  const { logOutCreator, match, triggerLogOut } = props;
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle2" gutterBottom>
              User: {user ? user.name : ''} - ({user ? user.displayName : ''})
            </Typography>
            <div>
              <MenuItem
                onClick={() => {
                  triggerLogOut();
                  match.history.replace('/');
                }}
              >
                Log out
              </MenuItem>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;
