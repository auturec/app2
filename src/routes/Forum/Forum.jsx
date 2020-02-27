import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(10),
	},
}));

export default function Forum() {
	const classes = useStyles()
	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
				hi
			</div>
		</Container>
	)
}