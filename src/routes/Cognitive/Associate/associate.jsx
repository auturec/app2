import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import { ImageMap, ImageKeyList } from './images';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export const Associate = () => {
  const classes = useStyles();
  const Test = () => {
    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={ImageMap[ImageKeyList[0]]}
          title="Contemplative Reptile"
        />
      </Card>
    );
  };
  return (
    <Container>
      <Typography
        component="div"
        style={{ backgroundColor: '#35baf6', height: '100vh' }}
      />
      <Test />
    </Container>
  );
};

export default Associate;
