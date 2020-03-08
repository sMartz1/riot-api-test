import React, { Component } from 'react';
import { connect } from 'react-redux';



class BodyApp extends Component {

  constructor( props ) {
    super( props );

  }

  isSummonerLoaded(loaded){
  	if(loaded){
  		return (<div className="row">
				<div className="col-md-3 logo">
					<h2>Ha cargado</h2>
				</div>
			</div>);
  	}else{
  		return(<div className="row">
				<div className="col-md-3 logo">
					<h2>Introducir nombre para seguir</h2>
				</div>
			</div>);
  	}
  }



	render() {
			return this.isSummonerLoaded(this.props.summonerLoaded);
		}
	

		
	}


const mapStateToProps = (state) => {
  return {
    summonerLoaded: state.summonerReducer.isLoaded
  }
};





export default connect( mapStateToProps,)( BodyApp );
