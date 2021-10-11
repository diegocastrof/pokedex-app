import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonData }) => {
	const sortedPokemonData = pokemonData.sort((a, b) => a.order - b.order);
	return (
		<div className="pokemon-list">
			{sortedPokemonData.map((pokemonInfo) => (
				<PokemonCard key={pokemonInfo.id} pokemonInfo={pokemonInfo} />
			))}
		</div>
	);
};

export default PokemonList;
