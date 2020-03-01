import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ForumLogo from 'assets/Forum/ForumLogo.svg';
import Question from './Question';
import Comments from './Comments';
import BackButton from './BackButton';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10)
  },
  header: {
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'teal',
    textAlign: 'center'
  },
  forumLogo: {
    display: 'block',
    margin: '0px auto',
    width: '150px'
  },
  forumPostContainer: {
    paddingTop: '10px'
  }
}));

const Forum = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.header}>Community Forum</div>
        <img src={ForumLogo} alt="" className={classes.forumLogo} />
        <div className={classes.forumPostContainer}>
          <BackButton />
          <Question
            question="Can my child with Autism attend school?"
            date="12 Feb 2020"
          />
          <Comments />
        </div>
      </div>
    </Container>
  );
};

export default Forum;
