import queryString from "query-string";

const parseQuery = queryString.parse(window.location.search.replace('?', '?'), {
	arrayFormat: "comma",
});

const initialState = {
	items: [],
	isLoaded: false,
	isLoadedLimit: false,

	filters: {
		auth: {},
		goods: {},
	},

	limit: 6,
	itemsLength: 0,
};

if (parseQuery.auth) {
	if (typeof parseQuery.auth === "object") {
		parseQuery.auth.map(
			(item) => (initialState.filters.auth[parseInt(item)] = parseInt(item))
		);
	} else {
		initialState.filters.auth[parseInt(parseQuery.auth)] =
			parseInt(parseQuery.auth);
	}
} else {
	initialState.filters.auth = {}
}

if (parseQuery.courseId) {
	if (typeof parseQuery.courseId === "object") {
		parseQuery.courseId.map(
			(item) => (initialState.filters.goods[parseInt(item)] = parseInt(item))
		);
	} else {
		initialState.filters.goods[parseInt(parseQuery.courseId)] = parseInt(parseQuery.courseId)
	}
} else {
	initialState.filters.goods = {}
}

const feedback = (state = initialState, action) => {
	if (action.type === 'SET_FEEDBACK') {
		return {
			...state,
			items: action.payload.data,
			itemsLength: action.payload.headers["x-total-count"],
			isLoaded: true,
			isLoadedLimit: true,
		};
	}

	if (action.type === 'SET_FEEDBACK_FILTERS') {
		return {
			...state,
			filters: action.payload
		};
	}

	if (action.type === 'SET_LOADED_FEEDBACK') {
		return {
			...state,
			isLoaded: action.payload
		};
	}

	if (action.type === 'PLUS_FEEDBACK_LIMIT') {
		return {
			...state,
			limit: parseInt(state.limit + action.payload),
		};
	}

	return state;
};

export default feedback;