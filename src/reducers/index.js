import { combineReducers } from 'redux';
import filterReducer from './FilterReducer';
import mangaReducer from './reducer';
import loadReducer from './loadReducer';

export default combineReducers({
	mangas: loadReducer,
	filters: filterReducer,
});
