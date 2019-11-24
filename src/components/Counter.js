import React from 'react';
import Proptypes from 'prop-types';

const Counter = ({score, changeScore, index})=>{

	return(
		<div className="counter">
			<button
				onClick={
					()=>{changeScore(index, -1)}
				}
				className="counter-action decrement"> -</button>
			<span className="counter-score">{score}</span>
			<button
				onClick={
					()=>{changeScore(index, 1)}
				}
				className="counter-action increment"> + </button>
		</div>
	);
};

Counter.Proptypes = {
	index: Proptypes.number,
	score: Proptypes.number,
	changeScore: Proptypes.func
};
export default Counter;