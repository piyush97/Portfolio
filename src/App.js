import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import Name from './components/Name';
import Info from './components/Info';
import Timeline from './components/Timeline';
import ProjectCard from './components/ProjectCard';
import Typography from '@material-ui/core/Typography';
import Footer from './components/Footer';
import PhotographyList from './components/PhotographyList';

const piyush = {
  textAlign: 'center',
  color: '#757575',
  fontFace:'Roboto'
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
            <Typography variant="subHeading" style={piyush}>
              Lil HardWork, Max Fun 
            </Typography>
            <div style={{height:"40px"}}/>
            <ProjectCard />
            <div style={{height:"40px"}}/>
            <Typography variant="display3" style={piyush}>
              I Click Moments Too!
            </Typography>       
            <PhotographyList />     
            <Footer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
