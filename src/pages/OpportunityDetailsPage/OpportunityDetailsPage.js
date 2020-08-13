import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeeOpportunitiesButton from '../../components/AllButtons/SeeOpportunitiesButton/SeeOpportunitiesButton';
import OppInfoCard from '../../components/OppDetailsComponents/OppInfoCard/OppInfoCard';
import EmployerInfoCard from '../../components/OppDetailsComponents/EmployerInfoCard/EmployerInfoCard';
import ApplyToOppButton from '../../components/AllButtons/ApplyToOppButton/ApplyToOppButton';
import HeaderThree from "../../components/DecorativeHeaders/HeaderThree/HeaderThree";

class OpportunityDetailsPage extends Component {

    render() {
        return (
            <div>
                <div className="dashboard-content">
                    <center>
                        <HeaderThree/>
                        <h1>Opportunity Name</h1>
                        <h3 className="opp-close"><i>Closes On [DATE HERE]</i></h3>
                        <OppInfoCard/>
                        {/* <EmployerInfoCard/> */}
                        <div className="opp-details-paragraph"><p>"Sed ut perspiciatis unde omnis iste natus error 
                            sit voluptatem accusantium doloremque laudantium, totam 
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                            et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                            aut odit aut fugit, sed quia consequuntur magni dolores 
                            eos qui ratione voluptatem sequi nesciunt. Neque porro 
                            quisquam est, qui dolorem ipsum quia dolor sit amet, 
                            consectetur, adipisci velit, sed quia non numquam eius 
                            modi tempora incidunt ut labore et dolore magnam aliquam 
                            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                            exercitationem ullam corporis suscipit laboriosam, nisi ut 
                            aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                            reprehenderit qui in ea voluptate velit esse quam nihil 
                            molestiae consequatur, vel illum qui dolorem eum fugiat 
                            quo voluptas nulla pariatur?"
                            "Sed ut perspiciatis unde omnis iste natus error 
                            sit voluptatem accusantium doloremque laudantium, totam 
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                            et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                            aut odit aut fugit, sed quia consequuntur magni dolores 
                            eos qui ratione voluptatem sequi nesciunt. Neque porro 
                            quisquam est, qui dolorem ipsum quia dolor sit amet, 
                            consectetur, adipisci velit, sed quia non numquam eius 
                            modi tempora incidunt ut labore et dolore magnam aliquam 
                            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                            exercitationem ullam corporis suscipit laboriosam, nisi ut 
                            aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                            reprehenderit qui in ea voluptate velit esse quam nihil 
                            molestiae consequatur, vel illum qui dolorem eum fugiat 
                            quo voluptas nulla pariatur?"
                            "Sed ut perspiciatis unde omnis iste natus error 
                            sit voluptatem accusantium doloremque laudantium, totam 
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                            et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                            aut odit aut fugit, sed quia consequuntur magni dolores 
                            eos qui ratione voluptatem sequi nesciunt. Neque porro 
                            quisquam est, qui dolorem ipsum quia dolor sit amet, 
                            consectetur, adipisci velit, sed quia non numquam eius 
                            modi tempora incidunt ut labore et dolore magnam aliquam 
                            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                            exercitationem ullam corporis suscipit laboriosam, nisi ut 
                            aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                            reprehenderit qui in ea voluptate velit esse quam nihil 
                            molestiae consequatur, vel illum qui dolorem eum fugiat 
                            quo voluptas nulla pariatur?"
                            "Sed ut perspiciatis unde omnis iste natus error 
                            sit voluptatem accusantium doloremque laudantium, totam 
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                            et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                            aut odit aut fugit, sed quia consequuntur magni dolores 
                            eos qui ratione voluptatem sequi nesciunt. Neque porro 
                            quisquam est, qui dolorem ipsum quia dolor sit amet, 
                            consectetur, adipisci velit, sed quia non numquam eius 
                            modi tempora incidunt ut labore et dolore magnam aliquam 
                            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                            exercitationem ullam corporis suscipit laboriosam, nisi ut 
                            aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                            reprehenderit qui in ea voluptate velit esse quam nihil 
                            molestiae consequatur, vel illum qui dolorem eum fugiat 
                            quo voluptas nulla pariatur?"</p></div>
                        <ApplyToOppButton/>
                        <SeeOpportunitiesButton/>
                    </center>
                    
                  
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    // user: state.user,
});

export default connect(mapStateToProps)(OpportunityDetailsPage);
