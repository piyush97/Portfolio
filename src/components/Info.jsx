import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

const piyush = {
  textAlign: 'center',
  color: '#757575'
};

class Info extends Component {
  render(){
    return( 
      <Typography variant="subheading" style={piyush}>
        Student || Web Developer || Future Data Scientist
      </Typography>
    );
  }
}
export default Info;
