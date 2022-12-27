const initialState = {
	items: {},
	isLoaded: false,
};

const policy = (state = initialState, action) => {
	if (action.type === 'SET_POLICY') {
		return {
			...state,
			items: action.payload,
			isLoaded: true
		};
	}
	return state;
};

export default policy;