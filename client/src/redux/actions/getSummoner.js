import types from '../types';
import getSummonerApi from '../services/api';

import summonerLoadedAction from './summonerLoadedAction';

const type = types.GET_SUMMONER;

const getSummoner = () => async ( dispatch, getState ) => {

  getSummonerApi()
    .then( (resp) => {
      dispatch( {
        type: type,
        payload: resp.data
      } );
    } )
    .then(()=>{
    dispatch(summonerLoadedAction());
    });
	

};





export default getSummoner;
