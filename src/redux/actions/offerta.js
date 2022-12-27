import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchOfferta = () => (dispatch) => {
	axios.get(`${API_DOMEN}/offerta`).then(({ data }) => {
		dispatch(setOfferta(data));
	});
};

export const setOfferta = (items) => ({
	type: 'SET_OFFERTA',
	payload: items,
});