import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FullLogo from 'assets/Logo/Full_Logo.svg';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Auturec
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fullLogo: {
    margin: '0px auto',
    width: '100px',
  },
  forgotPasswordInstructions: {
    paddingTop: '30px',
    color: 'teal',
  }
}));

const ForgotPassword = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={FullLogo} alt="" className={classes.fullLogo}/>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Typography component="p" variant="p" className={classes.forgotPasswordInstructions}>
          Please contact the administration to reset the password.
        </Typography>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default ForgotPassword;