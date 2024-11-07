import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {

const [id , setId] = useState("")
const [name , setName] = useState ("")
const [ordem , setOrdem] = useState ("")
const [tipagem , setTipagem] = useState ("")

  return (
    <>
      <GlobalStyle />
      <Header id={id} setId={setId} name={name} setName={setName} ordem={ordem} setOrdem={setOrdem} tipagem={tipagem} setTipagem={setTipagem}/>
      <CardsContainer>
        {pokemons
        .filter((pokemon)=> {
          return pokemon.name.english
          .toUpperCase()
          .includes(name.toUpperCase())
        })
        .filter((pokemon) => {
          return pokemon.id.includes(id)

         })
        
         .filter((pokemon) => {
          return pokemon.type[0].includes(tipagem)
          
         })

         .sort((a, b)=>{
          if (ordem.toLowerCase() === "crescente") {
            if (a.name.english<b.name.english) {
              return -1;
          } else {
            return true;
          
            }
         }

          if (ordem.toLowerCase() === "decrescente") {
            return -1
          } else {
            return true;
          }

         })


        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })}
      </CardsContainer>
    </>
  );
}

export default App;
