import types from '../types';
const type = types.SUMMONER_LOADED;

const summonerLoadedAction = () => {
	return{
        type: type,
        payload: true
      } 
    } 







export default summonerLoadedAction;