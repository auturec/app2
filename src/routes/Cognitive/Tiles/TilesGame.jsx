import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import TilesImage from './TilesImageList';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  containerBox: {
    backgroundColor: theme.palette.background.default
  }
}));

export const TilesGame = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseLine />
      <Container
        className={classes.containerBox}
        component="main"
        maxWidth="sm"
      >
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
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
