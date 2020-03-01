import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10)
  },
  changePassword: {
    color: 'teal',
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: theme.spacing(4)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Account = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <div className={classes.changePassword}>Change Password</div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="oldPassword"
                label="Old Password"
                name="oldPassword"
                autoComplete="oldPassword"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="newPassword"
                label="New Password"
                type="newPassword"
                id="newPassword"
                autoComplete="newPassword"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmedPassword"
                label="Confirmed Password"
                type="confirmedPassword"
                id="confirmedPassword"
                autoComplete="confirmedPassword"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Change Password
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Account;
