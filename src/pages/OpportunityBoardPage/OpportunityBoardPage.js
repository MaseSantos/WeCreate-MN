import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from "../../components/OpportunityBoardComponents/SearchBar/SearchBar";
import OpportunityPost from "../../components/OpportunityBoardComponents/OpportunityPost/OpportunityPost";


class OpportunityBoardPage extends Component {

  render() {
    return (
      <div>
        <div className="dashboard-content">
          <h2 className="title">Find Your Next Job</h2>
          <SearchBar/>
          <OpportunityPost/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  // user: state.user,
});

export default connect(mapStateToProps)(OpportunityBoardPage);
