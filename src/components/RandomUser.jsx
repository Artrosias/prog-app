// https://randomuser.me/api/

import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Spinner, Container, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import CardUser from './CardUser';

export default class RandonUser extends Component {
	constructor() {
		super();
		this.state = {
			user: [],
			loading: true
		};
	}

	componentDidMount() {
		this.myData();
	}

	myData = () => {
		axios
			.get(`https://randomuser.me/api/`)
			.then((res) => {
				this.setState({
					user: res.data.results[0],
					loading: false
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		if (this.state.loading) {
			return (
				<div>
					<Spinner animation="border" variant="dark">
						<h1>Loading...</h1>{' '}
					</Spinner>
				</div>
			);
		} else {
			return (
				<div>
					<Container>
						<Row style={{ width: '30rem' }}>
							<Col>
								<Card className="mt-4">
									<Card.Header>User casuale</Card.Header>

									<Card.Body>
										<Button variant="primary" onClick={this.myData}>
											Genera utente 
										</Button>
									</Card.Body>
								</Card>
								<Col>
									<CardUser
										key={this.state.user.name.first}
										img={this.state.user.picture.large}
										First={this.state.user.name.first}
										Last={this.state.user.name.last}
										Email={this.state.user.email}
										country={this.state.user.location.country}
										phoneCell={this.state.user.phone}
									/>
								</Col>
							</Col>
						</Row>
					</Container>
				</div>
			);
		}
	}
}
