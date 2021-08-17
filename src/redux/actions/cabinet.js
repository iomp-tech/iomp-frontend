import axios from "axios";

import { fetchUserInfo } from "../.././redux/actions/user";

import { API_DOMEN } from '../.././api';

export const fetchEditUserAvatar = (file) => (dispatch) => {
	const token = localStorage.getItem('success-token');

	let formData = new FormData();

	formData.append("avatar", file);
	formData.append("_method", "PUT");

	axios.post(`${API_DOMEN}/user/update/avatar`, formData, {
		headers: {
			Authorization:
				`Bearer ${token}`,
			'Content-Type': 'multipart/form-data'
		},
	}).then(({ data }) => {
		if (data.error !== undefined) {
			window.location.reload();
		} else {
			dispatch(fetchUserInfo());

			dispatch({
				type: "SET_CABINET_MESSAGE_AVATAR",
				payload: "",
			});
		}
	}).catch(() => {
		return false;
	});
};


export const fetchEditUserInfo = (data) => (dispatch) => {
	const token = localStorage.getItem('success-token');

	axios.post(`${API_DOMEN}/user/update/info`, { ...data, _method: "PUT" }, {
		headers: {
			Authorization:
				`Bearer ${token}`,
		},
	}).then(({ data }) => {
		if (data.error !== undefined) {
			window.location.reload();
		} else {
			dispatch(fetchUserInfo());

			dispatch({
				type: "SET_CABINET_MESSAGE_PASSWORD",
				payload: "",
			});
		}
	}).catch(() => {
		return false;
	});
};

export const fetchEditUserPassword = (data) => (dispatch) => {
	const token = localStorage.getItem('success-token');

	axios.post(`${API_DOMEN}/user/update/password`, { password_actual: data.password1, password_replace: data.password2, _method: "PUT" }, {
		headers: {
			Authorization:
				`Bearer ${token}`,
		},
	}).then(() => {
		dispatch(fetchUserInfo());

		window.location.reload();
	}).catch(({ response }) => {
		if (response.status === 401) {
			dispatch(setMessageCabinetPassword("Неверный пароль"));
		}

		return false;
	});
};


export const setMessageCabinetAvatar = (message) => ({
	type: 'SET_CABINET_MESSAGE_AVATAR',
	payload: message,
});

export const setMessageCabinetPassword = (message) => ({
	type: 'SET_CABINET_MESSAGE_PASSWORD',
	payload: message,
});