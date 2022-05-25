import { Card, CardImg, CardText, CardBody } from 'react-bootstrap';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';

const CardPokemon = (props) => {
	return (
		<Card border="secondary" style={{ width: '18rem' }}>
			<Card.Header>{props.name}</Card.Header>
			<Card.Body>
				<Card.Text>
					<strong>
						<p>Nome Pokémon</p>
					</strong>
					{props.name}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CardPokemon;
