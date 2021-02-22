import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    background: 'linear-gradient(45deg, #ff4081 60%, #f50057 90%)',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 48,
    padding: '0 30px',
    fontWeight: 'bold',
    margin: '10px'
  },
});

function GoToSubmitOppButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button 
      variant="contained" 
      href="#submit"
      classes={{ root: classes.root }}
      className={classes.button}>
        Submit A New Opportunity
      </Button>
    </div>
  );
}

GoToSubmitOppButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoToSubmitOppButton);
