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
// import PhotographyList from './components/PhotographyList';
import Skillset from './components/Skillset';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Tools from './components/Tools';

library.add(faStroopwafel);

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
           {/* <Typography variant="display3" style={piyush}>
              I Click Moments Too!
            </Typography>       
            <PhotographyList />  */}
             <Typography variant="display3" style={piyush}>
             Skills
            </Typography> 
            <Typography variant="subheading" style={piyush}>
              I can say I’ m quite good at
            </Typography>  
            <div style={{height:"40px"}}/>
            <Skillset />
            <div style={{height:"40px"}}/>
            <Typography variant="display3" style={piyush}>
             Tools
            </Typography> 
            <div style={{height:"40px"}}/>
            <Tools />
            <div style={{height:"40px"}}/>
            <Footer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
