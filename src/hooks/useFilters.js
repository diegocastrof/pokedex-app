import React, { useState, useEffect, useRef } from 'react';
import TextInput from '../components/Utils/TextInput';
import SelectInput from '../components/Utils/SelectInput';

const pokemonTypeFilterParams = [
	{ label: 'bug', value: 'bug' },
	{ label: 'dark', value: 'dark' },
	{ label: 'dragon', value: 'dragon' },
	{ label: 'electric', value: 'electric' },
	{ label: 'fairy', value: 'fairy' },
	{ label: 'fighting', value: 'fighting' },
	{ label: 'fire', value: 'fire' },
	{ label: 'ghost', value: 'ghost' },
	{ label: 'grass', value: 'grass' },
	{ label: 'ground', value: 'ground' },
	{ label: 'ice', value: 'ice' },
	{ label: 'normal', value: 'normal' },
	{ label: 'poison', value: 'poison' },
	{ label: 'psychic', value: 'psychic' },
	{ label: 'rock', value: 'rock' },
	{ label: 'steel', value: 'steel' },
	{ label: 'water', value: 'water' },
];

const useFilters = ({ pokemonData }) => {
	const nameInputRef = useRef('probandow');

	const [nameInput, setNameInput] = useState('');
	const [selectedType, setSelectedType] = useState('');

	const handleSortPokemons = () => {
		pokemonData.sort((a, b) => a.order - b.order);
	};

	const handleFilterByType = () => {
		pokemonData.filter((pokemonInfo) => {
			const { types = [] } = pokemonInfo;
			const typesArray = types.map((type) => type?.type?.name);
			return typesArray.includes(selectedType);
		});
	};

	useEffect(handleSortPokemons, [pokemonData]);
	useEffect(handleFilterByType, [selectedType]);

	const PokemonFiltersComponent = () => {
		return (
			<div className="pokemon-filters">
				<TextInput
					nameInput={nameInput}
					setNameInput={setNameInput}
					nameInputRef={nameInputRef}
				/>
				<SelectInput
					label="type"
					options={pokemonTypeFilterParams}
					value={selectedType}
					defaultValue="value2"
					onChange={(data) => setSelectedType(data ? data.value : '')}
					isClearable
				/>
			</div>
		);
	};

	return { PokemonFiltersComponent, filteredPokemonData: pokemonData };
};

export default useFilters;
