import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const cardStyle = {
  main: {
    display: "block",
    width: "250px",
    height: "200px",
    color: "black",
    background: "#f9f9f9",
    justify: "center",
    paddingTop: "5%"
  },
};

class RecentUserOppPost extends Component {
  // state = {
  //   title: this.props.title,
  //   type: this.props.type,
  //   experience: this.props.experience,
  //   date: this.props.date
  // };
  render() {
    const classes = this.props;
    return (
      <center>
        <Card style={cardStyle.main} className={classes.card} className="opportunity-post">
          <div className={classes.details}>
              <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {/* {this.state.title} */}
                    Title
                  </Typography>
                 <Typography variant="subtitle1" color="textSecondary">
                    {/* Experience: {this.state.experience}, {this.state.type} */}
                    Experience and Type
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Closing Date: 
                {/* {this.state.date.split('T')[0]} */}
                  </Typography>
                  <br/>
                  <Button size="small" variant="contained" color="primary">
                    See Post
                  </Button>
              </CardContent>
          </div>
        </Card>
      </center>
    );
  }
}

RecentUserOppPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

// const mapReduxStateToProps = (reduxState) => ({
//   reduxState,
// });

// export default withRouter(connect(mapReduxStateToProps)(RecentUserOppPost));
export default withRouter(RecentUserOppPost);