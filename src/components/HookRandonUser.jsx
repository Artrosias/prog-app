import react, { useState } from 'react';


import { Spinner, Button, Card, Image } from 'react-bootstrap';

//https://randomuser.me/api/
//stampare nome,(first,last)mail,foto,phone, country,

const HookRandonUser = () => {
	const [ user, setUser ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	const fetchUser = async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch('https://randomuser.me/api/');
			const data = await response.json();
			setUser(data.results[0]);
			setLoading(false);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};
	return (
		<div>
			<Button variant="primary" onClick={fetchUser}>
				{loading ? <Spinner animation="border" variant="primary" /> : 'Random user'}
			</Button>
			{error && <p>{error.message}</p>}
			{user && (
				<Card style={{ width: '18rem' }} bg="dark" variant="dark" text="white">
					<Card.Body>
						<h2> <Card.Title>
							{user.name.first} {user.name.last}
						</Card.Title> </h2>
						<hr />
						<Card.Subtitle>
							<Image src={user.picture.large} rounded />
						</Card.Subtitle>
						<hr />
						<Card.Text>
							<strong>
								<p>Email</p>
							</strong>
							{user.email}
							<hr />
							<strong>
								<p>Age</p>
							</strong>
							{user.dob.age}
							<hr />
							<strong>
								<p>Phone</p>
							</strong>
							{user.phone}
							<hr />
							<strong>
								<p>Country</p>
							</strong>
							{user.location.country}
							<hr />
							<strong>
								<p>City</p>
							</strong>
							{user.location.city}
						</Card.Text>
					</Card.Body>
				</Card>
			)}
		</div>
	);
};

export default HookRandonUser;
