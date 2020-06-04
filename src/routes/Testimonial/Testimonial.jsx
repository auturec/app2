import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TimeAgo from 'react-timeago';

const useStyles = makeStyles(() => ({
  card: {
    border: '1px #2c1e1a solid',
    width: '100%',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px 0px',
  },
  header: {
    display: 'flex',
    fontFamily: 'Open Sans',
  },
  body: {
    margin: '10px',
    color: '#2c1e1a',
    fontFamily: 'Montserrat',
    fontSize: '16px',
  },
  profilePic: {
    margin: '10px',
  },
  userInfo: {
    fontSize: '20px',
    color: '#9ac555',
    margin: '10px',
    fontWeight: 'bold',
  },
  large: {
    width: '60px',
    height: '60px',
  },
}));

const Testimonial = ({ userName, profilePic, date, comment }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.profilePic}>
          <Avatar alt={userName} src={profilePic} className={classes.large} />
        </div>
        <div className={classes.userInfo}>
          <div>{userName}</div>
          <div>
            <TimeAgo date={date} />
          </div>
        </div>
      </div>
      <div className={classes.body}>{comment}</div>
    </div>
  );
};

export default Testimonial;
