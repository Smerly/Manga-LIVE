import { queryForManga } from '../firebase/firebase';

// Mangas

export const ADD_MANGA = 'ADD_MANGA';
export const REMOVE_MANGA = 'REMOVE_MANGA';
export const EDIT_MANGA = 'EDIT_MANGA';
export const LOAD_MANGA = 'LOAD_MANGA';

// Filters

export const SET_OWN = 'SET_OWN';
export const SET_HELP = 'SET_HELP';
export const SET_MANGA = 'SET_MANGA';
export const SET_VOICE = 'SET_VOICE';
export const SET_TRANSLATE = 'SET_TRANSLATE';
export const SET_PROGRAM = 'SET_PROGRAM';
export const SET_WRITE = 'SET_WRITE';
export const SET_OTHER = 'SET_OTHER';
export const SET_ENGLISH = 'SET_ENGLISH';
export const SET_CHINESE = 'SET_CHINESE';
export const SET_KOREAN = 'SET_KOREAN';
export const SET_JAPANESE = 'SET_JAPANESE';
export const SET_SPANISH = 'SET_SPANISH';
export const SET_FRENCH = 'SET_FRENCH';
export const SET_INDONESIA = 'SET_INDONESIA';
export const SET_THAI = 'SET_THAI';
export const SET_MALE = 'SET_MALE';
export const SET_FEMALE = 'SET_FEMALE';
export const SET_BOTH = 'SET_BOTH';

// Load Manga

export const loadManga = () => {
	return async (dispatch) => {
		// Load the data from Firebase
		const data = await queryForManga();
		dispatch({
			type: LOAD_MANGA,
			payload: {
				data,
			},
		});
	};
};

// Filter Info

export const setOwn = (own) => {
	return {
		type: SET_OWN,
		payload: { own },
	};
};

export const setHelp = (help) => {
	return {
		type: SET_HELP,
		payload: { help },
	};
};
export const setManga = (ismanga) => {
	return {
		type: SET_MANGA,
		payload: { ismanga },
	};
};
export const setVoice = (voice) => {
	return {
		type: SET_VOICE,
		payload: { voice },
	};
};
export const setTranslate = (translate) => {
	return {
		type: SET_TRANSLATE,
		payload: { translate },
	};
};

export const setProgram = (program) => {
	return {
		type: SET_PROGRAM,
		payload: { program },
	};
};
export const setWrite = (write) => {
	return {
		type: SET_WRITE,
		payload: { write },
	};
};
export const setOther = (other) => {
	return {
		type: SET_OTHER,
		payload: { other },
	};
};
export const setEnglish = (english) => {
	return {
		type: SET_ENGLISH,
		payload: { english },
	};
};

export const setChinese = (chinese) => {
	return {
		type: SET_CHINESE,
		payload: { chinese },
	};
};
export const setKorean = (korean) => {
	return {
		type: SET_KOREAN,
		payload: { korean },
	};
};
export const setJapanese = (japanese) => {
	return {
		type: SET_JAPANESE,
		payload: { japanese },
	};
};
export const setSpanish = (spanish) => {
	return {
		type: SET_SPANISH,
		payload: { spanish },
	};
};
export const setFrench = (french) => {
	return {
		type: SET_FRENCH,
		payload: { french },
	};
};
export const setIndonesia = (indonesia) => {
	return {
		type: SET_INDONESIA,
		payload: { indonesia },
	};
};
export const setThai = (thai) => {
	return {
		type: SET_THAI,
		payload: { thai },
	};
};
export const setMale = (male) => {
	return {
		type: SET_MALE,
		payload: { male },
	};
};
export const setFemale = (female) => {
	return {
		type: SET_FEMALE,
		payload: { female },
	};
};
export const setBoth = (both) => {
	return {
		type: SET_BOTH,
		payload: { both },
	};
};
