export const ADD_MANGA = 'ADD_MANGA';
export const REMOVE_MANGA = 'REMOVE_MANGA';
export const EDIT_MANGA = 'EDIT_MANGA';

export const addManga = (title, pic, description, pages) => {
	return {
		type: ADD_MANGA,
		payload: { title, pic, description, pages },
	};
};

export const removeManga = (index) => {
	return {
		type: REMOVE_MANGA,
		payload: { index },
	};
};

export const EditManga = (title, pic, description, pages) => {
	return {
		type: ADD_MANGA,
		payload: { title, pic, description, pages },
	};
};
