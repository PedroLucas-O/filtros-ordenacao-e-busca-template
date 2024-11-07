import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

const onChangeId = (event) => {
props.setId(event.target.value)
}

const onChangeName = (event) => {
  props.setName(event.target.value)
  }

const onChangeOrdem = (event) => {
  props.setOrdem(event.target.value)
}  

const onChangeTipagem = (event) => {
  props.setTipagem(event.target.value)
}  

  return (
    <Container>
      <input type="number" placeholder="Buscar por id" onChange={(event) => onChangeId(event)}/>
      <input type="text" placeholder="Buscar por nome" onChange={(event) => onChangeName(event)}/>
      <select onChange={onChangeOrdem} value={props.setOrdem}>
        <option value="ordenar">Ordenar</option>
        <option value="crescente">Alfabetica</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <select name="tipo" id="tipo" onChange={onChangeTipagem} value={props.tipagem}>
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
