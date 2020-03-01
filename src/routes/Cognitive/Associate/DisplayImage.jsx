import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    border: '0px'
  },
  media: {
    display: 'flex'
  }
}));

const DisplayImage = ({ image }) => {
  const classes = useStyles();
  const labelArray = image.split('/');
  const labelDots = labelArray[labelArray.length - 1];
  const label = labelDots.split('.')[0];
  const finalLabel = label.toUpperCase();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        src={image}
        image={image}
        title={finalLabel}
        alt={finalLabel}
      />
      <Typography variant="subtitle1" align="center" gutterBottom>
        {finalLabel}
      </Typography>
    </Card>
  );
};

export default DisplayImage;
