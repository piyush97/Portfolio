import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import Name from './components/Name';
import Info from './components/Info';
import Timeline from './components/Timeline';
import ProjectCard from './components/ProjectCard';
import Typography from '@material-ui/core/Typography';

const piyush = {
  textAlign: 'center',
  color: '#757575'
};

class App extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Name />
            <Info />
            <Timeline />
            <Typography variant="display3" style={piyush}>
              Projects 
            </Typography>
            <ProjectCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
