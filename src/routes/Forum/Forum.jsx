import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ForumLogo from 'assets/Forum/ForumLogo.svg';
import SearchBar from './SearchBar';
import Questions from './Questions';
import AskQuestionButton from './AskQuestionButton';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
  },
  header: {
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'teal',
    textAlign: 'center',
  },
  forumLogo: {
    display: 'block',
    margin: '0px auto',
    width: '150px',
  },
  forumListWrapper: {
    paddingTop: '10px',
  },
  endOfForum: {
    textAlign: 'center',
    color: 'teal',
    paddingTop: '30px',
  },
}));

const Forum = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <div className={classes.header}>Community Forum</div>
        <img src={ForumLogo} alt="" className={classes.forumLogo} />
        <div className={classes.forumListWrapper}>
          <AskQuestionButton />
          <SearchBar />
          <Questions />
          <div className={classes.endOfForum}>No more to show</div>
        </div>
      </div>
    </Container>
  );
};

export default Forum;
