import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Comment from './Comment';
import { CommentsData } from './CommentsData';

const useStyles = makeStyles(() => ({
  commentsContainer: {
    marginTop: '10px'
  }
}));
const Comments = () => {
  const classes = useStyles();
  return (
    <div className={classes.commentsContainer}>
      {CommentsData.map(comment => (
        <Comment
          id={comment.id}
          date={comment.date}
          question={comment.question}
          key={comment.id}
        />
      ))}
    </div>
  );
};

export default Comments;
