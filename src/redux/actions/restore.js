import axios from "axios";

import { API_DOMEN } from '../.././api';

export const sendRestoreEmail = (formData) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_RESTORE_EMAIL',
		payload: true,
	});

	axios
		.post(`${API_DOMEN}/restoreEmail`, formData)
		.then((response) => {
			dispatch({
				type: 'SET_LOADED_RESTORE_EMAIL',
				payload: false,
			});

			window.location.href = "/restoresuccess";
		})
		.catch(({ response }) => {
			if (response.data) {
				dispatch(setMessageRestoreEmail(response.data.message));
			} else {
				dispatch(setMessageRestoreEmail(""));
			}

			dispatch({
				type: 'SET_LOADED_RESTORE_EMAIL',
				payload: false,
			});
		});
};

export const checkRestorePass = (hash) => (dispatch) => {
	axios
		.post(`${API_DOMEN}/checkRestorePass`, hash)
		.then((response) => {
			dispatch(setCheckRestorePass(true));

			dispatch({
				type: 'SET_LOADED_RESTORE_CHECK',
				payload: true,
			});
		})
		.catch(({ response }) => {
			dispatch({
				type: 'SET_LOADED_RESTORE_CHECK',
				payload: true,
			});
		});
};

export const sendRestorePass = (formData) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_RESTORE_PASS',
		payload: true,
	});

	axios
		.post(`${API_DOMEN}/restorePass`, formData)
		.then((response) => {
			dispatch({
				type: 'SET_LOADED_RESTORE_PASS',
				payload: false,
			});

			window.location.href = "/login";
		})
		.catch(({ response }) => {
			dispatch(setMessageRestorePass(response.data.message));

			dispatch({
				type: 'SET_LOADED_RESTORE_PASS',
				payload: false,
			});
		});
};

const setMessageRestoreEmail = (message) => ({
	type: 'SET_MESSAGE_RESTORE_EMAIL',
	payload: message,
});

const setMessageRestorePass = (message) => ({
	type: 'SET_MESSAGE_RESTORE_PASS',
	payload: message,
});

const setCheckRestorePass = (status) => ({
	type: 'SET_RESTORE_CHECK',
	payload: status,
});