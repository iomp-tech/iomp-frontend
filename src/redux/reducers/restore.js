const initialState = {
	isLoaded: false,
	isLoadedCheck: false,
	check: false,
	message: "",
};

const restore = (state = initialState, action) => {
	if (action.type === 'SET_LOADED_RESTORE_EMAIL') {
		return {
			...state,
			isLoaded: action.payload
		};
	}
	if (action.type === 'SET_MESSAGE_RESTORE_EMAIL') {
		return {
			...state,
			message: action.payload
		};
	}
	if (action.type === 'SET_RESTORE_CHECK') {
		return {
			...state,
			check: action.payload
		};
	}
	if (action.type === 'SET_LOADED_RESTORE_PASS') {
		return {
			...state,
			isLoaded: action.payload
		};
	}
	if (action.type === 'SET_LOADED_RESTORE_CHECK') {
		return {
			...state,
			isLoadedCheck: action.payload
		};
	}
	if (action.type === 'SET_MESSAGE_RESTORE_PASS') {
		return {
			...state,
			message: action.payload
		};
	}
	return state;
};

export default restore;