import axios from "axios";

import { API_DOMEN } from '../.././api';

export const sendRegister = (formData) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_REGISTER',
		payload: true,
	});


	axios
		.post(`${API_DOMEN}/register`, formData)
		.then(({ data }) => {
			localStorage.setItem('success-token', data.token);

			dispatch({
				type: 'SET_LOADED_REGISTER',
				payload: false,
			});

			window.location.href = "/cabinet";
		})
		.catch(({ response }) => {
			dispatch(setMessageRegister(response.data.message));

			dispatch({
				type: 'SET_LOADED_REGISTER',
				payload: false,
			});
		});
};

const setMessageRegister = (message) => ({
	type: 'SET_MESSAGE_REGISTER',
	payload: message,
});