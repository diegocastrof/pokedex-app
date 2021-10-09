import axios from 'axios';
import camelCaseRecursive from 'camelcase-keys-recursive';
import snakeCaseKeys from 'snakecase-keys';
import jsonToFormData from 'json-form-data';

import { headers } from './api';
import API_CONFIG from '../config/configurations';

const { url } = API_CONFIG;

const serializeJsonToString = (obj) => {
	if (!obj) return '';
	return Object.keys(obj)
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
		.join('&');
};

// Function to create formData
const bodyToFetch = (params, formData) => {
	if (formData) {
		return jsonToFormData(params, { showLeafArrayIndexes: false });
	}
	return JSON.stringify(params);
};

const paramsGetRequest = (params) => {
	const paramsUrl = serializeJsonToString(snakeCaseKeys(params));
	return paramsUrl !== '' ? `?${paramsUrl}` : '';
};

const genericErrorMessage = (error, dispatch) => {
	const { response } = error;
	if (!response) {
		return alert(error.message || 'Ups hubo un error en la respuesta');
	}
	let errorMessage = response.statusText;
	if (response.data && response.data.error) {
		errorMessage = response.data.error;
	}
	alert(error.message || 'Ups hubo un error en la respuesta');
	switch (response.status) {
		case 400: // Bad request
			return { error: errorMessage, ...response };
		case 401: // Unauthorized
			return { error: errorMessage, ...response };
		case 403: // Forbidden
			return { error: errorMessage, ...response };
		case 404: // Not found
			return { error: errorMessage, ...response };
		case 408: // Request timeout
			return { error: errorMessage, ...response };
		case 422: // Unprocessable entity
			return { error: errorMessage, ...response };
		case 500: // Internal Server Error
			return { error: errorMessage, ...response };
		default:
			return { error: errorMessage, ...response };
	}
};

const genericSuccessCallback = (response) => {
	return camelCaseRecursive(response.data);
};

export default class ApiService {
	static request(
		method,
		route,
		{
			params = {},
			dispatch,
			formData = false,
			failureCallback = genericErrorMessage,
			successCallback = genericSuccessCallback,
		}
	) {
		let request;
		switch (method) {
			case 'get':
				request = axios({
					method: 'get',
					url: url() + route + paramsGetRequest(params),
					headers: headers(),
				});
				break;
			case 'post':
				request = axios({
					method: 'post',
					url: url() + route,
					cache: 'no-cache',
					data: bodyToFetch(params, formData),
					headers: headers(formData),
				});
				break;
			case 'put':
				request = axios({
					method: 'put',
					url: url() + route,
					cache: 'no-cache',
					data: bodyToFetch(params, formData),
					headers: headers(formData),
				});
				break;
			case 'delete':
				request = axios({
					method: 'delete',
					url: url() + route,
					cache: 'no-cache',
					data: JSON.stringify(snakeCaseKeys(params)),
					headers: headers(),
				});
				break;
			default:
				request = axios({
					method: 'get',
					url: url() + route,
					headers: headers(),
				});
		}

		return request
			.then((response) => {
				return response;
			})
			.then((response) => successCallback(response))
			.catch((error) => failureCallback(error, dispatch));
	}
}
