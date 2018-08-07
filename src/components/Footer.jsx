import React from 'react';
import StickyFooter from 'react-sticky-footer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography } from '../../node_modules/@material-ui/core';

class Footer extends React.Component {

  render() {
    return (
  <StickyFooter bottomThreshold={50} normalStyles={{ backgroundColor: "#999999", padding: "2rem" }} stickyStyles={{ backgroundColor: "rgba(255,255,255,.8)", padding: "2rem" }} >
    <center><Typography>Made With <FavoriteIcon style={{ color: "red"}}/> By <b>Piyush Mehta</b> </Typography></center>
  </StickyFooter>
    );
  }
}

export default Footer;
