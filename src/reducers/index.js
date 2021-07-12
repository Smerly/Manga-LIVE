import { combineReducers } from 'redux';
import filterReducer from './FilterReducer';
import mangaReducer from './reducer';

export default combineReducers({
	mangas: mangaReducer,
	filters: filterReducer,
});
