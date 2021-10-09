import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PokemonIndex } from '../screens/Pokemon';

const routes = (
	<Switch>
		<Route exact path="/" component={PokemonIndex} />
	</Switch>
);

export default routes;
