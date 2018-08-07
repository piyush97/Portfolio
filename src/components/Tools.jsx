import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '../../node_modules/@material-ui/core';

class Tools extends Component
{
  render(){
    return(
      <center>
          <Grid container spacing={24} style={{backgroundColor:"#80B5E2"}}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <b><Typography >
                  <p> Operating system: Mac OsX/Linux</p>
                  <p>Text-Editor: VScode</p>
                  <p>Containerization: Docker</p>
                  <p>Continuous integration software: Jenkins / Gitlab - CI / Travis</p>
                  <p>Project Management Software: Jira / Gitlab</p>
                  <p>Version control system software: Gitlab / Github / BitBucket</p>
                </Typography>
                </b>
            </Grid>   
          </Grid>
      </center>
  );
}
}
export default Tools;
