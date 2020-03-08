import React, { Component } from 'react';
import { connect } from 'react-redux';


import getSummoner from '../redux/actions/getSummoner';


class Header extends Component {
  state = {
    input:""
  }
  constructor( props ) {
    super( props );


    this.sendSummoner = this.sendSummoner.bind( this );
    this.clickSummoner = this.clickSummoner.bind( this );

  }
  //////////////////////////////////////

  sendSummoner( e ) {

    this.setState( {
      input: e.target.value
    } );
    console.log(this.state.input);
  }

  clickSummoner( e ) {
    console.log( this.state.input );
    this.props.getSummoner( this.state.input)

  }
/////////////////////////////////////////////////////
  render() {
    return (
    <div className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-light bg-light navbar-static-top">
          <div className="col-md-3 bg-light">
          <a className="navbar-brand ">Riot Api</a>
          </div>
          
          <div className="col-md-3 offset-md-3">
          <div className="row bg-light">
          <input className="form-control col-md-8 text-center"
                 type="text"
                 onChange={ this.sendSummoner }
                 placeholder="Summoner Name"/>
          <div className="search_icon col-md-1" onClick={this.clickSummoner}><i className="fas fa-search"></i></div>
          </div>
          </div>
          
        </nav>
      </div>
    </div>
    );
  }
}
////////////////////////////////////////////////////////
const mapStateToProps = (state) => {
  return {
    summonerReducer: state.summonerReducer
  }
};

const mapDispatchToProps = {
  getSummoner,
};

/////////////////////////////////////////////////////////////
export default connect( mapStateToProps,mapDispatchToProps)(Header);
