import { Grid, Paper, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { style } from './style';

ResultPage.propTypes = {
  classes: PropTypes.object,
  score: PropTypes.number,
  questionFaild: PropTypes.array,
  match: PropTypes.object,
};

function ResultPage(props) {
  const { classes, match, questionFaild, score } = props;
  const showMessage = value => {
    let result = '';
    if (value < 4) {
      result = 'Kết quả không được tốt';
    } else if (value >= 4 && value < 6) {
      result = 'Kết quả trung bình ';
    } else if (value >= 6 && value <= 8) {
      result = 'Kết quả khá';
    } else if (value >= 9) {
      result = 'Xuất sắc';
    }
    return result;
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.main}
    >
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom className={classes.algin}>
          Kết Quả
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="button"
              display="block"
              gutterBottom
              style={{ color: '#4caf50' }}
            >
              Số đáp án Đúng
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              style={{ color: 'rgba(0,0,0,0.54)' }}
            >
              {score} Câu
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="button"
              display="block"
              gutterBottom
              style={{ color: '#f44336' }}
            >
              Số đáp án sai
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              style={{ color: 'rgba(0,0,0,0.54)' }}
            >
              {questionFaild ? questionFaild.length : 0} Câu
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.blockShow}>
          <span>Tổng điểm </span>
          <span>
            <Typography
              variant="h6"
              gutterBottom
              style={{ display: 'inline-block', color: '#dc004e' }}
            >
              {score === 0 ? 0 : (score / (score + questionFaild.length)) * 100}
              %
            </Typography>
          </span>
          <Typography variant="h6" gutterBottom>
            {showMessage(score)}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Những câu trả lời sai là:
          </Typography>
          {questionFaild.map(item => (
            <Typography variant="body1" gutterBottom key={item}>
              {item}
            </Typography>
          ))}
        </Grid>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            match.history.replace('/page-test');
          }}
        >
          Thử lại lần nữa
        </Button>
      </Paper>
    </Grid>
  );
}

export default withStyles(style)(memo(ResultPage));
