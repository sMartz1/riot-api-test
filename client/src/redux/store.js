import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import summonerReducer from './reducers/summonerReducer';
import thunk from 'redux-thunk';


const reducer = combineReducers( {
  summonerReducer,
} );

const composeEnhancers = composeWithDevTools( {
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
} );
const store = createStore( reducer, composeEnhancers(
  applyMiddleware( thunk ),
  // other store enhancers if any
) );

export default store;
