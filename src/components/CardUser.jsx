import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Col, Row, Image } from 'react-bootstrap';

const CardUser = (props) => {
	return (
		<div>
			<Card border="secondary" style={{ width: '18rem' }}>
				<Card.Header>{props.name}</Card.Header>
				<Card.Body>
					<Row>
						<Col>
							<Image src={props.img} />

							<Card.Text>
								
									<h3>First Name</h3>
									<p>{props.First}</p>
								
							</Card.Text>
							<hr />

							<Card.Text>
								
									<h3>Last Name</h3>
									<p>{props.Last}</p>
								
							</Card.Text>
							<hr />
							<Card.Text>
								
									<h3>Email</h3>
									<p>{props.Email}</p>
								
							</Card.Text>
							<hr />
							<Card.Text>
								
									<h3>Country</h3>
									<p>{props.country}</p>
								
							</Card.Text>
							<hr />
							<Card.Text>
								
									<h3>Phone</h3>
									<p>{props.phoneCell}</p>
								
							</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
};
export default CardUser;
