import React from 'react';
import { TextInput, SelectInput } from '../Utils';

const PokemonFilters = ({
	nameInput,
	setNameInput,
	selectedType,
	setSelectedType,
}) => {
	return (
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
	);
};

export default PokemonFilters;

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
