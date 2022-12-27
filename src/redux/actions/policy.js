import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchPolicy = () => (dispatch) => {
	axios.get(`${API_DOMEN}/policy`).then(({ data }) => {
		dispatch(setPolicy(data));
	});
};

export const setPolicy = (items) => ({
	type: 'SET_POLICY',
	payload: items,
});