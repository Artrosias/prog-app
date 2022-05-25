import React from "react";
import CardPokemon from "./CardPokemon";
import { Row } from "react-bootstrap";

const CardList = (props) => (
  <Row xs={1} md={3} className="g-4">
    {props.pokedex.map((pokemon) => (
      <CardPokemon name={pokemon.name} />
    ))}
  </Row>
);
export default CardList;