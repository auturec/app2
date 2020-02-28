import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
  },
  button: {
    display: 'flex',
    textAlign: 'start',
    justifyContent: 'start',
    textTransform: 'none',
    width: '100%',
    padding: '20px',
  },
  questionContainer: {
    color: 'teal',
    marginTop: '10px',
    marginBottom: '10px',
    width: '100%'
  },
  question: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  date: {
    paddingTop: '10px',
    fontSize: '14px',
    paddingBottom: '20px',
  }
}));

const Question = ({ question, date }) => {
  const classes = useStyles()
  return (
    <div className={classes.button}>
      <div className={classes.questionContainer}>
        <Typography className={classes.question}>
          Q: {question}
        </Typography>
        <Typography className={classes.date}>
          {date}
        </Typography>
        <Divider/>
      </div>
    </div>
  )
}

export default Question;