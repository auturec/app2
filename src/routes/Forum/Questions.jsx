import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Question from './Question';
import { QuestionsData } from './QuestionsData';

const useStyles = makeStyles(() => ({
  forumList: {
    marginTop: '10px'
  }
}));
const Questions = () => {
  const classes = useStyles();
  return (
    <div className={classes.forumList}>
      {QuestionsData.map(question => (
        <Question
          author={question.author}
          id={question.id}
          date={question.date}
          question={question.question}
          key={question.id}
        />
      ))}
    </div>
  );
};

export default Questions;
