import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(5, 3),
  },
  imageContainer: {
    width: '100%',
    textAlign: 'center',
  },
  slideImage: {
    maxWidth: '100%',
    height: '12.5rem',
    padding: theme.spacing(0, 2),
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: theme.spacing(4, 2, 0, 2),
    textAlign: 'center',
  },
  header: {
    color: theme.palette.secondary.main,
    fontFamily: 'Montserrat',
    fontSize: '1.6rem',
    fontWeight: '600',
  },
  subheader: {
    fontSize: '1.1rem',
    paddingTop: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
}));

const Slide = ({ img, header, subheader }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.slideContainer}>
      <Grid item xs={12} sm={6} md={12}>
        <div className={classes.imageContainer}>
          <img src={img} alt="" className={classes.slideImage} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <div className={classes.description}>
          <div className={classes.header}>{header}</div>
          <div className={classes.subheader}>{subheader}</div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Slide;
