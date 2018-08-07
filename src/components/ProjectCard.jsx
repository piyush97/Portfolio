import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={4} md={4} lg={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://preview.ibb.co/ghEZDz/Screen_Shot_2018_08_07_at_9_36_16_AM.jpg"
          title="Meaww Influencer Dashboard (React)"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Meaww Influencer Dashboard(React)
          </Typography>
          <Typography component="p">
            Made a Dashboard Using: React, Redux, RESTful APIs, Material-UI
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href="http://dev.inf.meaww.com">Visit</a>
          </Button>
          <Button size="small" color="primary">
            <a href="https://blog.cloudboost.io/creating-your-first-mern-stack-application-b6604d12e4d3?gi=9460f2a14686">
              {" "}
              Learn More about the stack ?{" "}
            </a>
          </Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image = "https://camo.githubusercontent.com/c6f40c4be819b8a8f9dd6b7dad4faf0ea6727fb3/68747470733a2f2f707265766965772e6962622e636f2f62505a3267542f53637265656e5f53686f745f323031385f30355f32345f61745f31315f32385f30385f414d2e6a7067"
          title="GitApp"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            GitApp
          </Typography>
          <Typography component="p">
            GitHub Repository Scraper
            </Typography>
          <Typography component="p">
            Using React, Elastic Search, Redux and Open Source Datasets and Tachyons
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://whispering-island-83455.herokuapp.com/">Visit</a>
          </Button>
        </CardActions>
      </Card>
    </Grid> 
    <Grid item xs={12} sm={4} md={4} lg={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image = "https://preview.ibb.co/kprgAe/Screen_Shot_2018_08_07_at_11_27_53_AM.jpg"
          title="JobScraper"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Job Scraper using Node
          </Typography>
          <Typography component="p">
           Job Scraper
          </Typography>
          <Typography component="p">
          Finds Available Jobs for Engineering in Delhi, India
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href="http://piyushmehta.me/Job-scraper/"> Visit </a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid container xs={12} sm={4} md={4} lg={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image = "https://camo.githubusercontent.com/9cb4f724c553db03d55ed1a9f5bbb530a2fc55b2/68747470733a2f2f707265766965772e6962622e636f2f6b3830586f382f622e706e67"
          title="DashCrypt"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
           DashCrypt
          </Typography>
          <Typography component="p">
           CryptoCurrency Dashboard
          </Typography>
          <Typography component="p">
          Finds Market Cap for CryptoCurrency using D3Js and React
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://dashcrypt.herokuapp.com/"> Visit </a>
          </Button>
        </CardActions>
      </Card>
    </Grid>    <Grid container xs={12} sm={4} md={4} lg={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image = "https://camo.githubusercontent.com/ec96d493236397255bdc7a52bf3852e528c89215/68747470733a2f2f692e696d6775722e636f6d2f745171486f32662e706e67"
          title="CrypTrack"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
           CrypTrack
          </Typography>
          <Typography component="p">
           CryptoCurrency App
          </Typography>
          <Typography component="p">
          Finds Market Cap for CryptoCurrency using React Native
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
