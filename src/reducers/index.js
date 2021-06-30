import { combineReducers } from 'redux';
import mangaReducer from './reducer';

export default combineReducers({
	mangas: mangaReducer,
});
