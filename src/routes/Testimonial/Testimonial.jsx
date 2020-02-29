import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
	card: {
    border: '1px teal solid',
    width: '100%',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px 0px',
  },
  header: {
    display: 'flex',
  },
  body: {
    margin: '10px',
    color: 'teal',
  },
  profilePic: {
    margin: '10px',
  },
  userInfo: {
    fontSize: '20px',
    color: 'grey',
    margin: '10px',
    fontWeight: 'bold',
  },
  large: {
    width: '60px',
    height: '60px',
  },
}));

const Testimonial = ({ userName, profilePic, userInfo, comment }) => {
  const classes = useStyles()
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.profilePic}>
          <Avatar alt={userName} src={profilePic} className={classes.large} />
        </div>
        <div className={classes.userInfo}>
          <div>
            {userName}
          </div>
          <div>
            {userInfo}
          </div>
        </div>
      </div>
      <div className={classes.body}>
        {comment}
      </div>
    </div>
  )
}

export default Testimonial;