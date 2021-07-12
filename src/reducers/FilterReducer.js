import {
	SET_OWN,
	SET_HELP,
	SET_MANGA,
	SET_VOICE,
	SET_TRANSLATE,
	SET_PROGRAM,
	SET_WRITE,
	SET_OTHER,
	SET_ENGLISH,
	SET_CHINESE,
	SET_KOREAN,
	SET_JAPANESE,
	SET_SPANISH,
	SET_FRENCH,
	SET_INDONESIA,
	SET_THAI,
	SET_MALE,
	SET_FEMALE,
	SET_BOTH,
} from '../actions';

function defaultState() {
	return {
		own: false,
		help: false,
		manga: false,
		voice: false,
		translate: false,
		program: false,
		write: false,
		other: false,
		english: false,
		chinese: false,
		korean: false,
		japanese: false,
		spanish: false,
		french: false,
		indonesia: false,
		thai: false,
		male: false,
		female: false,
		both: false,
	};
}

function filterReducer(state = defaultState(), action) {
	switch (action.type) {
		case SET_OWN:
			return { ...state, own: action.payload.own };
		case SET_HELP:
			return { ...state, help: action.payload.help };
		case SET_MANGA:
			return { ...state, manga: action.payload.manga };
		case SET_VOICE:
			return { ...state, voice: action.payload.voice };
		case SET_TRANSLATE:
			return { ...state, translate: action.payload.translate };
		case SET_PROGRAM:
			return { ...state, program: action.payload.program };
		case SET_WRITE:
			return { ...state, write: action.payload.write };
		case SET_OTHER:
			return { ...state, other: action.payload.other };
		case SET_ENGLISH:
			return { ...state, english: action.payload.english };
		case SET_CHINESE:
			return { ...state, chinese: action.payload.chinese };
		case SET_KOREAN:
			return { ...state, korean: action.payload.korean };
		case SET_JAPANESE:
			return { ...state, japanese: action.payload.japanese };
		case SET_SPANISH:
			return { ...state, spanish: action.payload.spanish };
		case SET_FRENCH:
			return { ...state, french: action.payload.french };
		case SET_INDONESIA:
			return { ...state, indonesia: action.payload.indonesia };
		case SET_THAI:
			return { ...state, thai: action.payload.thai };
		case SET_MALE:
			return { ...state, male: action.payload.male };
		case SET_FEMALE:
			return { ...state, female: action.payload.female };
		case SET_BOTH:
			return { ...state, both: action.payload.both };

		default:
			return state;
	}
}

export default filterReducer;
