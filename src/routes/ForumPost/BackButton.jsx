import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100%',
  },
  button: {
    marginRight: '0px'
  },
}))

const BackButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container alignItems="flex-start" justify="flex-start" direction="row">
        <Button 
          variant="contained" 
          className={classes.button}
        >
          Back
        </Button>
      </Grid>
    </div>
  )
}

export default BackButton;