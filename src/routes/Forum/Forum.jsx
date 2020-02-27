import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SearchBar from './SearchBar';
import ForumList from './ForumList';
import CreateQuestion from './CreateQuestion';
import ForumLogo from 'assets/Forum/ForumLogo.svg';

const useStyles = makeStyles(theme => ({
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
  }
}));

const Forum = () => {
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.header}>Have a question?</div>
        <img src={ForumLogo} alt="" className={classes.forumLogo} />
        <div className={classes.forumListWrapper}>
          <CreateQuestion/>
          <SearchBar />
          <ForumList />
          <div className={classes.endOfForum}>
            No more to show
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Forum;