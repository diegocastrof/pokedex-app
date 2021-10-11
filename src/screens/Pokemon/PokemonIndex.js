import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PokemonList } from '../../components';

import {
	indexAllPokemonRequest,
	showOnePokemon,
} from '../../requests/pokemons';

const PokemonIndex = () => {
	const [allPokemonInfo, setAllPokemonInfo] = useState([]);
	const [pokemonData, setPokemonData] = useState([]);
	const dispatch = useDispatch();

	const handleSuccessRequest = (response) => {
		setAllPokemonInfo(response.data.results);
	};

	const handleIndexRequest = () => {
		indexAllPokemonRequest({
			dispatch,
			successCallback: handleSuccessRequest,
		});
	};

	const handlePopulatePokemons = (response) => {
		const fetchedPokemon = response.data;
		setPokemonData((prevPokemonData) => {
			return [...prevPokemonData, fetchedPokemon];
		});
	};

	const handleFetchOnePokemon = (pokemon) => {
		const { url } = pokemon;
		const pokemonId = url.split('/')[6];
		showOnePokemon(pokemonId, {
			dispatch,
			successCallback: handlePopulatePokemons,
		});
	};

	const fetchEachPokemonInfo = () => {
		if (!allPokemonInfo.length) return;
		allPokemonInfo.forEach((pokemon) => {
			handleFetchOnePokemon(pokemon);
		});
	};

	useEffect(handleIndexRequest, []);
	useEffect(fetchEachPokemonInfo, [allPokemonInfo]);

	return (
		<div>
			<h1 className="mb-5">Bienvenido a la HoumPokedex!</h1>
			<PokemonList pokemonData={pokemonData} />
		</div>
	);
};

export default PokemonIndex;
