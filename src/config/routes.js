import React from 'react';
import { Switch } from 'react-router-dom';
import { PokemonIndex } from '../screens/Pokemon';
import LayoutRoute from './layout';

const routes = (
	<Switch>
		<LayoutRoute exact path="/" component={PokemonIndex} />
	</Switch>
);

export default routes;
