const axios = require( 'axios' );


const getSummonerApi = (name) => {
  console.log( 'API' );

  return axios.get('/summoner/?name='+name);
}


export default getSummonerApi;
