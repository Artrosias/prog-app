import React from "react";
import { Navbar, Container, Nav} from 'react-bootstrap';


const MyNavbar = (props) => {

    return (

        <>
 <Navbar bg={props.light} variant={props.dark}>
    <Container>
    <Navbar.Brand href={props.nav}>Una pagina web con crisi d'identità<img
							alt=""
							src="https://upload.wikimedia.org/wikipedia/it/thumb/0/07/StrisciaLaNotizia.png/1200px-StrisciaLaNotizia.png"
							width="70"
							height="70"
							className="d-inline-block align-top"
						/></Navbar.Brand>
    
    <Nav className="me-auto">
    </Nav>
    <div>
				<Nav.Link href="#home">Data: {getDate()}</Nav.Link>
		</div>
    </Container>
  </Navbar>
</>

    )



}

const getDate = () => {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0');
	let yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	return today;
};


export default MyNavbar