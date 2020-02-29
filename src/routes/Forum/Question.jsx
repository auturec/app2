import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FORUM } from 'constants/routes';

const useStyles = makeStyles(() => ({
  card: {
    width: '100%'
  },
  button: {
    display: 'flex',
    textAlign: 'start',
    justifyContent: 'start',
    textTransform: 'none',
    width: '100%',
    padding: '20px'
  },
  wrapper: {
    color: 'teal',
    marginTop: '10px',
    marginBottom: '10px',
    width: '100%'
  },
  chevronRight: {
    color: 'teal'
  }
}));

const Question = ({ id, question, date }) => {
  const classes = useStyles();
  return (
    <Link className={classes.card} to={`${FORUM}/${id}`}>
      <Button className={classes.button}>
        <div className={classes.wrapper}>
          <Typography>{question}</Typography>
          <Typography>{date}</Typography>
        </div>
        <ChevronRight className={classes.chevronRight} />
      </Button>
    </Link>
  );
};

export default Question;
