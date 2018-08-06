import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

const piyush = {
  textAlign: 'center',
  color: '#757575'
};

class Name extends Component {
  render(){
    return( 
      <Typography variant="display3" style={piyush}>
        Piyush Mehta
      </Typography>
    );
  }
}
export default Name;
