import React, {PureComponent} from 'react'
import Counter from './Counter'

class Player extends PureComponent{
	render() {
		const {
			removePlayer,
			id,
			name,
			index,
			score,
			changeScore
		} = this.props;
		return (
			<div className="player">
        <span className="player-name">
          <button
	          onClick={
		          ()=>removePlayer(id)
	          }
	          className="remove-player">✖</button>
	        {name}
        </span>
				<Counter
					index={index}
					score={score}
					changeScore={changeScore}
				/>
			</div>
		);
	}
}
export default Player;