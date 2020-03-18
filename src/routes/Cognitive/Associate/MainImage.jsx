import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DisplayImage from './DisplayImage';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '100px'
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const MainImage = ({ image, choosenTheme }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1" align="center" gutterBottom>
              Click on the following image which best matches the following
              category: {choosenTheme}
            </Typography>
            <DisplayImage image={image} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainImage;
