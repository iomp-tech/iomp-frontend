import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchPervFeedback = (limit, query = "") => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_FEEDBACK',
		payload: false,
	});

	axios.get(`${API_DOMEN}/feedback?_limit=${limit}&${query}`).then((response) => {
		dispatch(setFeedback(response));
	});
};

export const fetchFeedback = (limit, query = "") => (dispatch) => {
	axios.get(`${API_DOMEN}/feedback?_limit=${limit}&${query}`).then((response) => {
		dispatch(setFeedback(response));
	});
};

export const setFeedback = (items) => ({
	type: 'SET_FEEDBACK',
	payload: items,
});

export const setFeedbackFilters = (items) => ({
	type: 'SET_FEEDBACK_FILTERS',
	payload: items,
});

export const plusFeedbackLimit = (items) => ({
	type: 'PLUS_FEEDBACK_LIMIT',
	payload: items,
});