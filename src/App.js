import React from 'react';
import Header from "./components/Header";
import './App.css';
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";


class App extends React.Component{

	state = {
		players: [
			{
				id: 1,
				name: "Guil",
				score: 0
			},
			{
				id: 2,
				name: "Treasure",
				score: 0
			},
			{
				id: 3,
				name: "Ashley",
				score: 0
			},
			{
				id: 4,
				name: "James",
				score: 0
			}
		]
	};

	prevId = 4;

	handleRemovePlayer = (id)=>{
		this.setState(prevState => ({
			players: prevState.players.filter(p=> p.id !== id)
		}));
	};

	handleAddPlayer = (name)=>{
		this.setState(prevState =>({
			players : [
				...prevState.players,
				{
					name,
					score: 0,
					id: this.prevId += 1
				}
			]
		}));
	};

	handleScore = (index, delta)=> {
		this.setState(prevState => ({
			score: prevState.players[index].score += delta
		}));
	};

	render(){
		return (
			<div className="scoreboard">
				<Header
					title="Scoreboard"
					players={this.state.players}
				/>
				{this.state.players.map((player, index)=>
					<Player
						key={player.id}
						id={player.id}
						index={index}
						name={player.name}
						score={player.score}
						changeScore={this.handleScore}
						removePlayer={this.handleRemovePlayer}
					/>
				)}
				<AddPlayerForm
					addPlayer={this.handleAddPlayer}
				/>
			</div>
		);
	}
}

export default App;
