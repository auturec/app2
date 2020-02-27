import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Post from './Post';
import { ForumListData } from './ForumListData';

const useStyles = makeStyles(() => ({
  forumList: {
    marginTop: '10px',
  }
}));
const ForumList = () => {
  const classes = useStyles();
  return (
    <div className={classes.forumList}>
      {
        ForumListData.map(post => (
          <Post author={post.author} id={post.id} date={post.date} question={post.question} key={post.id}/>
        ))
      }
    </div>
  );
}

export default ForumList;