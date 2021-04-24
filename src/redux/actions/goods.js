import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchGoods = (limit = null, query = "") => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_GOODS',
		payload: false,
	});

	dispatch({
		type: 'SET_LIMIT_LOADED_GOODS',
		payload: false,
	});


	axios.get(`${API_DOMEN}/goods?visibility=true&${limit !== null ? `_limit=${limit}&` : ""}${query}`).then((response) => {
		dispatch(setGoods(response));
	});
};


export const fetchAllGoods = () => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_GOODS',
		payload: false,
	});

	axios.get(`${API_DOMEN}/goods`).then((response) => {
		dispatch(setAllGoods(response));
	});
}

export const fetchLimitGoods = (limit = null, query = "") => (dispatch) => {
	dispatch({
		type: 'SET_LIMIT_LOADED_GOODS',
		payload: false,
	});

	axios.get(`${API_DOMEN}/goods?visibility=true&${limit !== null ? `_limit=${limit}&` : ""}${query}`).then((response) => {
		dispatch(setLimitGoods(response));
	});
};

export const fetchGoodsSection = () => (dispatch) => {
	axios.get(`${API_DOMEN}/goods?visibility=true&section=true`).then(({ data }) => {
		dispatch(setGoodsSection(data));
	});
};

export const fetchByUrlGoods = (url = "") => (dispatch) => {
	dispatch({
		type: 'SET_LIMIT_LOADED_GOODS',
		payload: false,
	});

	axios.get(`${API_DOMEN}/goods${url !== "" ? `?url=${url}` : ""}`).then(({ data }) => {
		dispatch(setGoodsByUrl(data));
	});
};

export const fetchGoodsTime = () => (dispatch) => {
	axios.get(`${API_DOMEN}/goodsTimetype`).then(({ data }) => {
		dispatch(setGoodsTime(data));
	});
};

export const fetchGoodsType = () => (dispatch) => {
	axios.get(`${API_DOMEN}/goodsType`).then(({ data }) => {
		dispatch(setGoodsType(data));
	});
};

export const fetchGoodsMinMaxPrice = () => (dispatch) => {
	axios.get(`${API_DOMEN}/goods?visibility=true&_sort=price&_order=desc`).then(({ data }) => {
		if (data.length) {
			dispatch(setGoodsMaxPrice(data[0].price));
			dispatch(setGoodsMinPrice(data[data.length - 1].price));
		}
	});
};

export const setGoods = (items) => ({
	type: 'SET_GOODS',
	payload: items,
});

export const setAllGoods = (items) => ({
	type: 'SET_ALL_GOODS',
	payload: items,
});

export const setLimitGoods = (items) => ({
	type: 'SET_LIMIT_GOODS',
	payload: items,
});

export const setGoodsSection = (items) => ({
	type: 'SET_GOODS_SECTION',
	payload: items,
});

export const setGoodsByUrl = (items) => ({
	type: 'SET_GOODS_BY_URL',
	payload: items,
});

export const setGoodsMinPrice = (min) => ({
	type: 'SET_GOODS_MIN_PRICE',
	payload: min,
});

export const setGoodsMaxPrice = (max) => ({
	type: 'SET_GOODS_MAX_PRICE',
	payload: max,
});

export const setGoodsTime = (items) => ({
	type: 'SET_GOODS_TIME',
	payload: items,
});

export const setGoodsType = (items) => ({
	type: 'SET_GOODS_TYPE',
	payload: items,
});

export const setGoodsFilters = (items) => ({
	type: 'SET_GOODS_FILTERS',
	payload: items,
});

export const plusGoodsLimit = (items) => ({
	type: 'PLUS_GOODS_LIMIT',
	payload: items,
});