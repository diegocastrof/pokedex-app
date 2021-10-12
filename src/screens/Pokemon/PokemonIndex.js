import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PokemonList, InfiniteScroll } from '../../components';

import {
	indexAllPokemonRequest,
	showOnePokemon,
} from '../../requests/pokemons';

const PokemonIndex = () => {
	const [page, setPage] = useState(0);
	const standardDisplayLength = 21;

	const [allPokemonInfo, setAllPokemonInfo] = useState([]);
	const [pokemonData, setPokemonData] = useState([]);
	const dispatch = useDispatch();

	const handleSuccessRequest = (response) => {
		setAllPokemonInfo(response.data.results);
	};

	const handleIndexRequest = () => {
		const sendParams = {
			offset: page * standardDisplayLength,
			limit: standardDisplayLength,
		};
		indexAllPokemonRequest({
			dispatch,
			params: sendParams,
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

	useEffect(handleIndexRequest, [page]);
	useEffect(fetchEachPokemonInfo, [allPokemonInfo]);

	return (
		<div>
			<h1 className="mb-5">Welcome to the HoumPokedex!</h1>
			<InfiniteScroll
				dataLength={pokemonData.length}
				next={() => setPage(page + 1)}
				hasMore={pokemonData.length < 898}
				label="pokemons"
				scrollableTarget="pokemon-list"
			>
				<PokemonList pokemonData={pokemonData} />
			</InfiniteScroll>
		</div>
	);
};

export default PokemonIndex;
