import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Testimonial from './Testimonial';

import { TestimonialData } from './TestimonialData';

const useStyles = makeStyles(theme => ({
	paper: {
    marginTop: theme.spacing(10),
	},
}));

const Testimonials = () => {
	const classes = useStyles()
	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
        {
          TestimonialData.map(testimonial => (
            <Testimonial 
              key={testimonial.id}
              userName={testimonial.userName}
              profilePic={testimonial.profilePic}
              userInfo={testimonial.userInfo}
              comment={testimonial.comment}
            />
          ))
        }
			</div>
		</Container>
	)
}

export default Testimonials;