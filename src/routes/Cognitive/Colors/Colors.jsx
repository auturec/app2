import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import './Colors.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
  },
  box: {
    backgroundColor: 'red',
    width: '100px',
    height: '100px',
  },
}));

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fade: false };
  }

  render() {
    const { fade } = this.state;

    return (
      <button
        type="button"
        onClick={() => this.setState({ fade: true })}
        onAnimationEnd={() => this.setState({ fade: false })}
        className={fade ? 'fade' : ''}
      >
        Click me!
      </button>
    );
  }
}

const TapColors = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <div className={classes.box}>This is the colors page</div>
        <ClickMe />
      </div>
    </Container>
  );
};

export default TapColors;
