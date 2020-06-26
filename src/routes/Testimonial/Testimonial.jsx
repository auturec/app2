import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TimeAgo from 'react-timeago';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'white',
    border: '1px rgba(0,0,0,0.2) solid',
    width: '100%',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  cardBody: {
    color: 'black',
    lineHeight: '1.75em',
    fontSize: '1rem',
    paddingBottom: theme.spacing(2),
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontFamily: 'Open Sans',
  },
  profilePic: {
    width: '44px',
    height: '44px',
  },
  userName: {
    textAlign: 'right',
    fontSize: '1rem',
    marginRight: theme.spacing(2),
  },
  userDate: {
    display: 'block',
    textAlign: 'right',
    fontSize: '0.85rem',
    marginRight: theme.spacing(2),
    color: 'rgba(0,0,0,0.6)',
  },
}));

const Testimonial = ({ userName, profilePic, date, comment }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.cardBody}>{comment}</div>
      <div className={classes.cardFooter}>
        <div>
          <div className={classes.userName}>{userName}</div>
          <TimeAgo date={date} className={classes.userDate} />
        </div>
        <Avatar
          alt={userName}
          src={profilePic}
          className={classes.profilePic}
        />
      </div>
    </div>
  );
};

export default Testimonial;
