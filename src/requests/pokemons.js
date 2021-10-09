import ApiService from '../services/apiService';

export const indexPokemonRequest = ({
	dispatch,
	params = {},
	failureCallback,
	successCallback,
}) =>
	ApiService.request('get', '/', {
		dispatch,
		params,
		failureCallback,
		successCallback,
	});
