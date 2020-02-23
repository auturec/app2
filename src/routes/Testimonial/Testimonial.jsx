import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Post from './Post';

import { TestimonialData } from './TestimonialData';

const useStyles = makeStyles(theme => ({
	paper: {
    marginTop: theme.spacing(8),
	},
}));

const Testimonial = () => {
	const classes = useStyles()
	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
        {
          TestimonialData.map(post => (
            <Post 
              key={post.id}
              userName={post.userName}
              profilePic={post.profilePic}
              userInfo={post.userInfo}
              comment={post.comment}
            />
          ))
        }
			</div>
		</Container>
	)
}

export default Testimonial;