import ApiService from '../services/apiService';

export const indexAllPokemonRequest = ({
	dispatch,
	params = {},
	failureCallback,
	successCallback,
}) =>
	ApiService.request('get', '/pokemon', {
		dispatch,
		params,
		failureCallback,
		successCallback,
	});

export const showOnePokemon = (
	id,
	{ dispatch, params = {}, failureCallback, successCallback }
) =>
	ApiService.request('get', `/pokemon/${id}`, {
		dispatch,
		params,
		failureCallback,
		successCallback,
	});
