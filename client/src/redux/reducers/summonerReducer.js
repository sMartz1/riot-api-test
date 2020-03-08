import types from '../types';

const GET_SUMMONER = types.GET_SUMMONER;
const SUMMONER_LOADED = types.SUMMONER_LOADED;
const defaultState = {
	text: "default",
	loaded: false
  };

function reducer( state = defaultState.text, action ) {
  console.log( 'Reducer Caller summonerReducer.js' )
  switch (action.type) {

    case GET_SUMMONER: {
      return action.payload;
    }

    case SUMMONER_LOADED:{
    	return {
    		isLoaded:true
    	}
    }
    default:
      return state;
  }
}

export default reducer;
