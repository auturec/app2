import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const Title = props => {
  const { stage, setStage } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box component="span" m={3}>
        <Typography variant="h5" gutterBottom>
          Emotions Game! <br /> You are at Stage {stage}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setStage(stage === 3 ? 1 : stage + 1)}
        >
          {`Move to Stage ${stage === 3 ? 1 : stage + 1}`}
        </Button>
      </Box>
    </div>
  );
};

export default Title;
