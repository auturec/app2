import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Testimonial from './Testimonial';

import { TestimonialsData } from './TestimonialsData';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        {TestimonialsData.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            userName={testimonial.userName}
            profilePic={testimonial.profilePic}
            date={testimonial.date}
            comment={testimonial.comment}
          />
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;
