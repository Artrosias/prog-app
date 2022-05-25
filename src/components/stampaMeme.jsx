//https://api.imgflip.com/get_memes

import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Spinner, Container, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default class RandonMemes extends Component {
	constructor() {
		super();
		this.state = {
			img: ''
		};
	}

	componentDidMount() {
		this.myData();
	}

	myData = () => { //ricevono in input dati
		axios  //Axios è una libreria Javascript che permette di connettersi con le API
			.get(`https://api.imgflip.com/get_memes`)
			.then((res) => {
				this.setState({
					img: res.data.data.memes[Math.floor(Math.random() * res.data.data.memes.length)].url
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		if (this.state.img === '') {
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
									<Card.Header> <strong> IO TI GENERO IL MEME E TU LO MEMI </strong></Card.Header>
									<Card.Body>
										<Button variant="primary" onClick={this.myData}>
											 E FATTI NA RISATA
										</Button>
									</Card.Body>
								</Card>
								<Col>
									<Image src={this.state.img} fluid="true" />
								</Col>
							</Col>
						</Row>
					</Container>
				</div>
			);
		}
	}
}
