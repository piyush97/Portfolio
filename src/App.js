import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
const piyush = 
{
    textAlign: 'center',
    color: '#757575'

};

class App extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="display3" style={piyush}>
              Piyush Mehta
            </Typography>
            <Typography variant="subheading" style={piyush}>
              Student || Web Developer || Future Data Scientist
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
