import React from 'react'
import PropTypes from 'prop-types';

const Stats = ({players, score})=>(
	<table className="stats">
		<tbody>
		<tr>
			<td>Players:</td>
			<td>{players}</td>
		</tr>
		<tr>
			<td>Total Points:</td>
			<td>{score}</td>
		</tr>
		</tbody>
	</table>
);

Stats.Proptypes = {
	score: PropTypes.number,
	players: PropTypes.arrayOf(PropTypes.shape({
		score: PropTypes.number
	}))
};

export default Stats;