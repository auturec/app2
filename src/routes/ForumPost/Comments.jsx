import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Comment from './Comment';
import { comments } from './CommentData';

const useStyles = makeStyles(() => ({
  commentsContainer: {
    marginTop: '10px',
  }
}));
const Comments = () => {
  const classes = useStyles();
  return (
    <div className={classes.commentsContainer}>
      {
        comments.map(comment => (
          <Comment id={comment.id} date={comment.date} question={comment.question} key={comment.id}/>
        ))
      }
    </div>
  );
}

export default Comments;