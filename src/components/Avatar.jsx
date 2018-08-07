import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Piyush Mehta" src = "https://media.licdn.com/dms/image/C5103AQHYyGqFP8T4gw/profile-displayphoto-shrink_200_200/0?e=1539216000&v=beta&t=5uoLo9rXokYKm8pEdCwnbc00-7AqlWaXtrr8W3sTR6k" className={classNames(classes.avatar, classes.bigAvatar)} />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);