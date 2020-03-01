import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(() => ({
  commentContainer: {
    display: 'flex',
    textAlign: 'start',
    justifyContent: 'start',
    textTransform: 'none',
    width: '100%',
    padding: '20px',
    marginLeft: '40px'
  },
  comment: {
    color: 'teal',
    marginTop: '10px',
    marginBottom: '10px',
    width: '100%'
  },
  date: {
    paddingTop: '10px',
    fontSize: '14px',
    paddingBottom: '20px'
  }
}));

const Comment = ({ id, question, date }) => {
  const classes = useStyles();
  return (
    <div className={classes.commentContainer} id={id}>
      <div className={classes.comment}>
        <Typography>{question}</Typography>
        <Typography className={classes.date}>{date}</Typography>
        <Divider />
      </div>
    </div>
  );
};

export default Comment;
