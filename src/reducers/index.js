import { combineReducers } from 'redux';
import filterReducer from './FilterReducer';
import loadReducer from './loadReducer';

export default combineReducers({
	mangas: loadReducer,
	filters: filterReducer,
});
