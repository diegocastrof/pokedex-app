import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { TextInput, SelectInput } from '../Utils';

const PokemonList = ({ pokemonData }) => {
	const [nameInput, setNameInput] = useState('');
	const [selectedType, setSelectedType] = useState('');

	const handleSortPokemons = () => {
		pokemonData.sort((a, b) => a.order - b.order);
	};

	useEffect(handleSortPokemons, [pokemonData]);

	return (
		<>
			<div className="pokemon-filters">
				<TextInput nameInput={nameInput} setNameInput={setNameInput} />
				<SelectInput
					label="type"
					options={pokemonTypeFilterParams}
					value={selectedType}
					defaultValue="value2"
					onChange={(data) => setSelectedType(data ? data.value : '')}
					isClearable
				/>
			</div>
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

const pokemonTypeFilterParams = [
	{ label: 'Bug', value: 'bug' },
	{ label: 'Dark', value: 'dark' },
	{ label: 'Dragon', value: 'dragon' },
	{ label: 'Electric', value: 'electric' },
	{ label: 'Fairy', value: 'fairy' },
	{ label: 'Fighting', value: 'fighting' },
	{ label: 'Fire', value: 'fire' },
	{ label: 'Ghost', value: 'ghost' },
	{ label: 'Grass', value: 'grass' },
	{ label: 'Ground', value: 'ground' },
	{ label: 'Ice', value: 'ice' },
	{ label: 'Normal', value: 'normal' },
	{ label: 'Poison', value: 'poison' },
	{ label: 'Psychic', value: 'psychic' },
	{ label: 'Rock', value: 'rock' },
	{ label: 'Steel', value: 'steel' },
	{ label: 'Water', value: 'water' },
];

export default PokemonList;
