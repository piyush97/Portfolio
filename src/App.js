import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
const piyush = 
{
    textAlign: 'center',

};

class App extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="display3" style={piyush}>
            Piyush Mehta
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default App;
