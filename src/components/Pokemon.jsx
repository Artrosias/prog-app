import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Spinner, Container, Col, Row } from 'react-bootstrap';
import CardPokemon from './CardPokemon';

export default class Pokemon extends Component {
	constructor() {
		super();
		this.state = {
			pokemon: [],
			loading: true
		};
	}

	componentDidMount() {
		this.myData();
	}

	myData = () => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/`)
			.then((res) => {
				this.setState({
					pokemon: res.data.results,
					loading: false
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		if (this.state.loading) {
			return (
				<div>
					<Spinner animation="border" variant="dark" />
				</div>
			);
		} else {
			return (
				<div className="App container" >
					<Container fluid className='text-center mt-4' >
						<Row>
							<Col className='mb-5' >
								<Card className="mt-4">
									<Card.Header> <strong>Pokédex</strong></Card.Header>
								</Card>
								<Col className='mb-5' >
									{this.state.pokemon.map((pokemon) => (
										<CardPokemon key={pokemon.name} name={pokemon.name} />
									))}
								</Col>
							</Col>
						</Row>
					</Container>
				</div>
			);
		}
	}
}
