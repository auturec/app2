import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '4px',
    textAlign: 'center',
    maxHeight: 200,
    maxWidth: 200
  },
  media: {
    display: 'flex'
  }
}));

const SingleOption = ({ image, handleOnClick, category }) => {
  const classes = useStyles();
  const labelArray = image.split('/');
  const labelDots = labelArray[labelArray.length - 1];
  const label = labelDots.split('.')[0];
  const finalLabel = label.toUpperCase();
  return (
    <Card className={classes.root}>
      <Button onClick={e => handleOnClick(e, category)}>
        <CardMedia
          className={classes.media}
          component="img"
          src={image}
          image={image}
          title={finalLabel}
          alt={finalLabel}
        />
      </Button>
    </Card>
  );
};

export default SingleOption;
