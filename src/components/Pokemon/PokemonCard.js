import React from 'react';
import { Image } from 'react-bootstrap';
import { typesUrl } from './pokemonTypeUrls';
import { capitalizeFirstLetter } from '../../services/utils';

const PokemonCard = ({ pokemonInfo }) => {
	const {
		abilities = [],
		name,
		types = [],
		stats = [],
		sprites = {},
		weight,
	} = pokemonInfo;
	const { other = {}, front_default: pokemonSprite } = sprites;
	const pokemonImage = other['official-artwork']['front_default'];

	return (
		<div className="pokemon-card">
			<section className="pokemon-card--header">
				<h4 className="text-color-primary">{capitalizeFirstLetter(name)}</h4>
				<div className="pokemon-card--header__sprite">
					<Image fluid className="w-100" src={pokemonSprite} />
				</div>
			</section>
			<section className="pokemon-card--image">
				<Image fluid className="w-100" src={pokemonImage} />
			</section>
			<PokemonCardTypesSection
				sectionTitle="Types"
				types={types}
				weight={weight}
			/>
			<PokemonCardAbilitiesSection
				sectionTitle="Abilities"
				abilities={abilities}
			/>
			<PokemonCardStatsSection sectionTitle="Stats" stats={stats} />
		</div>
	);
};

export default PokemonCard;

const TypeBadge = ({ typeText, index }) => {
	return (
		<div key={`${typeText}-${index}`} className="pokemon-card--types__badge">
			<Image fluid src={typesUrl[`${typeText}`]} />
		</div>
	);
};

const PokemonCardTypesSection = ({ sectionTitle, types, weight }) => {
	const typesTextArray = types.map((type) => type.type.name);

	return (
		<section className="pokemon-card--types-section">
			<p className="section-title">{sectionTitle}</p>
			<div className="pokemon-card--types__container">
				<div className="pokemon-card--types">
					{typesTextArray.map((typeText, index) => (
						<TypeBadge key={typeText} typeText={typeText} index={index} />
					))}
				</div>
				<p className="d-flex justify-content-between">
					<span className="font-weight-bold mr-2">Weight:</span>
					<span>{weight}</span>
				</p>
			</div>
		</section>
	);
};

const PokemonCardAbilitiesSection = ({ sectionTitle, abilities }) => {
	const pokemonAbilitiesArray = abilities.map((abilityInfo) => {
		const { ability = {} } = abilityInfo;
		const { name: abilityName } = ability;
		return abilityName;
	});
	return (
		<section className="pokemon-card--abilities-section">
			<p className="section-title">{sectionTitle}</p>
			<div className="pokemon-card--abilities">
				{pokemonAbilitiesArray.map((ability) => (
					<p key={ability} className="font-weight-bold ability">
						{capitalizeFirstLetter(ability)}
					</p>
				))}
			</div>
		</section>
	);
};

const PokemonCardStatsSection = ({ sectionTitle, stats }) => {
	const pokemonStatsArray = stats.map((statInfo) => {
		const { base_stat: baseStat, stat = {} } = statInfo;
		const { name: statName } = stat;
		return {
			baseStat,
			statName,
		};
	});

	return (
		<section className="pokemon-card--stats-section">
			<p className="section-title">{sectionTitle}</p>
			<div className="pokemon-card--stats">
				{pokemonStatsArray.map(({ baseStat, statName }) => (
					<p key={statName} className="d-flex justify-content-between">
						<span className="font-weight-bold">
							{capitalizeFirstLetter(statName)}:
						</span>
						<span>{baseStat}</span>
					</p>
				))}
			</div>
		</section>
	);
};
