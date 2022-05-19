import "../assets/scss/PokemonList.scss";
import ItemPokemon from "./ItemPokemon";
import { Container, Row } from "reactstrap";

export default function PokemonList({ data }) {
  return (
    <Container className="pokemon-list">
      <Row className="row-pokemon">
        {data.map((item) => (
          <ItemPokemon key={item.name} url={item.url} />
        ))}
      </Row>
    </Container>
  );
}
