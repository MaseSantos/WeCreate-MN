import React, { Component } from 'react';
// import { connect } from 'react-redux';

import InfoCard from "../../components/EmployerServicesInfoCard/EmployerServicesInfoCard";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <>
      <div className="welcome">
        <img className="image" src="images/6.png" />
        <div className="message">
          <h1 className="title">WeCreate MN</h1>
          <h3 className="subtitle">
            A place for Minnesota-based creatives of
            <br />
            color to find local, paid opportunities
          </h3>
          <Button
            variant="contained"
            // href="#register"
            className={classes.button}
          >
            Learn More
          </Button>
          <Button
            variant="contained"
            href="#register"
            className={classes.button}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div className="services">
        <h3 className="subtitle" id="services-title">
          Services
        </h3>
        <InfoCard />
      </div>
    </>
  );
    }
  
export default withStyles(styles)(ContainedButtons);
