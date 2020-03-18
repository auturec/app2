import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import TilesImage from './TilesImageList';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    textAlign: 'center'
  },
  gridList: {
    width: 450,
    height: 450
  }
}));

export const TilesGame = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseLine />
      <Container component="main" maxWidth="sm">
        <GridList className={classes.gridList} cellHeight={100} cols={4}>
          {TilesImage.TilesImageList.map(img => (
            <GridListTile key={img} cols={1}>
              <img src={img} alt={img} />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </div>
  );
};

export default TilesGame;
