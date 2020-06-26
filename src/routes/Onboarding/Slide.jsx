import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  characterSlide: {
    height: '300px',
    margin: '0 auto',
    marginTop: '30px',
  },
  header: {
    color: theme.palette.secondary.main,
    fontSize: '1.8rem',
    marginLeft: theme.spacing(2),
    marginTop: '30px',
    fontWeight: '600',
    fontFamily: 'Open Sans',
  },
  subheader: {
    fontSize: '20px',
    marginLeft: '10px',
    marginTop: '10px',
    color: theme.palette.secondary.main,
  },
}));

const Slide = ({ img, header, subheader }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src={img} alt="" className={classes.characterSlide} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.header}>{header}</div>
          <div className={classes.subheader}>{subheader}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Slide;
