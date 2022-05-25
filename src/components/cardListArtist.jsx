import React from "react";
import CardArtist from "./myCardArtist";
import { Row } from "react-bootstrap";

const CardList = (props) => (
    <Row xs={1} md={3} className="g-4">
    {props.artists.map((artist) => (
        <CardArtist name={artist.name} style={artist.style} genre={artist.genre} />
      ))}
    </Row>
);

export default CardList