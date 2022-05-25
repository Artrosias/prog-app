import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, CardGroup, Container, Spinner } from 'react-bootstrap';
import CardArtist from './myCardArtist';
import { SearchBox } from './searcBox';

// usando l'API di `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${this.state.name}`

export default class CercaArtist extends Component {
	constructor() {
		super();
		this.state = {
			Artista: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 3000);
	}

	handleChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleSubmit = () => {
		axios.get(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${this.state.name}`).then((res) => {
			this.setState({ Artista: res.data.artists });
		});
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 3000);
	}

	handleChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleSubmit = () => {
		axios.get(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${this.state.name}`).then((res) => {
			this.setState({ Artista: res.data.artists });
		});
	};

	render() {
		if (this.state.isLoading) {
			return (
				<div>
					<Spinner animation="border" variant="dark">
						
					</Spinner>
				</div>
			);
		} else {
			return (
				<Container>
					<CardGroup>
						<Card style={{ width: '18rem' }}>
							<Card.Header className="text-center"><strong>Cerca il tuo artista preferito!</strong></Card.Header>

							<Card.Body>
								<Card.Title>Ricerca artista</Card.Title>
								<Card.Text>
									<SearchBox onSearchChange={this.handleChange} />
									<Button variant="primary" onClick={this.handleSubmit}>
										Search
									</Button>
								</Card.Text>
								<hr />
								<ul>
									{this.state.Artista.map((item) => (
										<CardArtist
											key={item.idArtist}
											nome={item.strArtist}
											genre={item.strGenre}
											style={item.strStyle}
											biography={item.strBiographyIT}
										/>
									))}
								</ul>
							</Card.Body>
						</Card>
					</CardGroup>
				</Container>
			);
		}
	}
}
