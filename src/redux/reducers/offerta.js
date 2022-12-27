const initialState = {
	items: {},
	isLoaded: false,
};

const offerta = (state = initialState, action) => {
	if (action.type === 'SET_OFFERTA') {
		return {
			...state,
			items: action.payload,
			isLoaded: true
		};
	}
	return state;
};

export default offerta;