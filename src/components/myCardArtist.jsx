import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';

const CardArtist = (props) => {
	return (
		<div>
			<Card border="secondary" style={{ width: '18rem' }}>
				<Card.Header>{props.name}</Card.Header>
				<Card.Body>
					<Row>
						<Col>
						<Card.Text>
								<h1>{props.nome}</h1>
							</Card.Text>

							<Card.Text>
								<strong>Style:</strong>
								{props.style}
							</Card.Text>

							<Card.Text>
								<strong>Genre:</strong>
								{props.genre}
							</Card.Text>
							<Card.Text>
								<strong>Biography:</strong>
								{props.biography}
							</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
};

export default CardArtist;
