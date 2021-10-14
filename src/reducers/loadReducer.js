import { LOAD_MANGA } from '../actions';

const loadReducer = (state = [], actions) => {
	switch (actions.type) {
		case LOAD_MANGA:
			return actions.payload.data;
		default:
			return state;
	}
};

export default loadReducer;
