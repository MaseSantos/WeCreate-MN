import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const styles = {
  root: {
    background: "linear-gradient(45deg, #6633ff 30%, #6600cc 90%)",
    color: "white",
  },
  menuButton: {
    marginLeft: "60%",
  },
  font: {
    color: "white",
    underline: "none",
  },
  name: {
    color: "white",
  },
};

function Nav (props) {
  const { classes } = props;
  const MyLink = props => <RouterLink to="/" {...props} />

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        classes={{
          root: classes.root,
        }}
      >
        <Toolbar>
          <Link
            component={MyLink}
            underline="none"
            variant="h4"
            classes={{ root: classes.name }}
          >
            WeCreate MN
          </Link>
          <div style={{ flex: 1 }}>
            {props.user.id && (
              <div className={classes.menuButton}>
                <Button
                  size="large"
                  href="#"
                  className={classes.button}
                  classes={{ root: classes.font }}
                >
                  Dashboard
                </Button>
                <Button
                  size="large"
                  href="#Profile"
                  className={classes.button}
                  classes={{ root: classes.font }}
                >
                  Profile
                </Button>
                <Button
                  size="large"
                  href="#opportunities"
                  className={classes.button}
                  classes={{ root: classes.font }}
                >
                  Opportunities
                </Button>
              </div>
            )}
          </div>
          {props.user.id ? (
            <Button
              size="large"
              href="#"
              className={classes.button}
              className={props.className}
              onClick={() => props.dispatch({ type: "LOGOUT" })}
              classes={{ root: classes.font }}
            >
              Log Out
            </Button>
          ) : (
            <Button
              size="large"
              href="#login"
              className={classes.button}
              classes={{ root: classes.font }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default withStyles(styles)(connect(mapStateToProps)(Nav));

