import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import PokemonFilters from './PokemonFilters';

const PokemonList = ({ pokemonData }) => {
	const [nameInput, setNameInput] = useState('');
	const [selectedType, setSelectedType] = useState('');

	const handleSortPokemons = () => {
		pokemonData.sort((a, b) => a.order - b.order);
	};

	useEffect(handleSortPokemons, [pokemonData]);

	return (
		<>
			<PokemonFilters
				nameInput={nameInput}
				setNameInput={setNameInput}
				selectedType={selectedType}
				setSelectedType={setSelectedType}
			/>
			<div className="pokemon-list">
				{pokemonData
					.filter((pokemon) => pokemon.name.includes(nameInput))
					.filter((pokemonInfo) => {
						if (!selectedType) return true;
						const { types = [] } = pokemonInfo;
						const typesArray = types.map(({ type: { name } }) => name);
						return typesArray.includes(selectedType);
					})
					.map((pokemonInfo) => (
						<PokemonCard key={pokemonInfo.id} pokemonInfo={pokemonInfo} />
					))}
			</div>
		</>
	);
};

export default PokemonList;
