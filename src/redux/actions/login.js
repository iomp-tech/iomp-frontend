import axios from "axios";

import { API_DOMEN } from "../.././api";

export const sendLogin = (formData) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_LOGIN',
		payload: true,
	});

	axios
		.post(`${API_DOMEN}/login`, formData)
		.then(({ data }) => {
			localStorage.setItem('success-token', data.token);

			dispatch({
				type: 'SET_LOADED_LOGIN',
				payload: false,
			});

			window.location.href = data.link_personal_auth;
		})
		.catch(({ response }) => {
			if (response.data) {
				dispatch(setMessageLogin("Неверный email или пароль"));
			} else {
				dispatch(setMessageLogin(""));
			}

			dispatch({
				type: 'SET_LOADED_LOGIN',
				payload: false,
			});
		});
};

const setMessageLogin = (message) => ({
	type: 'SET_MESSAGE_LOGIN',
	payload: message,
});