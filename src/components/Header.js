import React from 'react'
import PropTypes from 'prop-types';
import Stats from "../Stats";
import StopWatch from "./StopWatch";

const Header = ({title, players})=> {

	const totalPlayers = players.length;

	const score = players.reduce((total, player)=>
		 total + player.score
	,0);

	return (
		<header>
			<Stats
				players={totalPlayers}
				score={score}
			/>
			<h1>{title}</h1>
			<StopWatch/>
		</header>
	);
};

Header.PropTypes = {
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object)
};

export default Header