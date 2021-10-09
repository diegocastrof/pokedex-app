import API_CONFIG from '../config/configurations';

const { url } = API_CONFIG;

export const headers = (formData) => {
	if (localStorage.jwt) {
		if (formData) {
			return {
				Authorization: `Bearer ${localStorage.jwt}`,
			};
		}
		return {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.jwt}`,
		};
	}
	if (formData) {
		return {};
	}
	return {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	};
};

export default class API {
	static genericErrorMessage(status) {
		return status === 404 ? 'Recurso no encontrado' : 'Intentelo más tarde';
	}

	static get(route) {
		return fetch(url() + route, {
			method: 'GET',
			headers: headers(),
		});
	}

	static post(route, params = {}) {
		return fetch(url() + route, {
			method: 'POST',
			cache: 'no-cache',
			body: JSON.stringify(params),
			headers: headers(),
		});
	}

	static put(route, params = {}) {
		return fetch(url() + route, {
			method: 'PUT',
			cache: 'no-cache',
			body: JSON.stringify(params),
			headers: headers(),
		});
	}

	static delete(route, params = {}) {
		return fetch(url() + route, {
			method: 'DELETE',
			body: JSON.stringify(params),
			headers: headers(),
		});
	}
}
