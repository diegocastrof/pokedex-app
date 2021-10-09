import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { indexPokemonRequest } from '../../requests/pokemons';

const PokemonIndex = () => {
	const dispatch = useDispatch();

	const handleSuccessRequest = (response) => {
		console.log(response);
	};

	const handleIndexRequest = (params) => {
		const sendParams = {
			testing: 'qepasalongi',
		};
		indexPokemonRequest({
			dispatch,
			params: sendParams,
			successCallback: handleSuccessRequest,
		});
	};

	useEffect(handleIndexRequest, []);
	return (
		<div>
			<h1>This is PokemonIndex</h1>
			<p>Hola</p>
		</div>
	);
};

export default PokemonIndex;
