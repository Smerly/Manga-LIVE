/* eslint-disable default-case */
import { ADD_MANGA, REMOVE_MANGA, EDIT_MANGA } from '../actions';

const mangaReducer = (state = [], action) => {
	switch (action.type) {
		// For each of these case scenarios, put what you want changed as a return
		case ADD_MANGA:
			// Below is bringing the variables from actions to here
			const {
				title,
				genre,
				genre2,
				summary,
				pic,
				description,
				pages,
				author,
				artist,
			} = action.payload;
			return [
				...state,
				{
					title,
					genre,
					genre2,
					summary,
					pic,
					description,
					pages,
					author,
					artist,
				},
			];

		case REMOVE_MANGA:
			const { index } = action.payload;
			return [...state.slice(0, index), ...state.slice(index + 1)];

		case EDIT_MANGA:
			return state.map((item, index) => {
				if (index !== action.payload.index) {
					return item;
				}
				return { ...item, ...action.payload };
			});

		default:
			return state;
	}
};

export default mangaReducer;
