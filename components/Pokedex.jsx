import React, { useEffect, useState } from "react";

const Pokemon = (props) => {
  const [imgUrl, setImgUrl] = useState();

  // Effet pour aller chercher l'image du pokemon sur internet via une API:
  useEffect(() => {
    fetch(props.url).then((response) =>
      response.json().then((body) => setImgUrl(body.sprites.front_default))
    );
  }, []);

  return (
    <div
      style={{
        border: "3px #FFC300 solid",
        margin: 2,
        padding: 2,
        textAlign: "center",
        borderRadius: 8,
        background: "#efefef",
        cursor: "pointer",
      }}
    >
      <p style={{ fontWeight: 800 }}>{props.name}</p>
      {imgUrl ? <img src={imgUrl} /> : ""}
    </div>
  );
};

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  //   const [selectedPokemon, setSelectedPokemon] = useState();

  // Effet pour aller chercher des pokémons sur internet via une API:
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000").then((response) =>
      response.json().then((body) => setPokemons(body.results))
    );
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", flexFlow: "wrap" }}>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );

  //   // Si aucun pokémon séléctionné, retourner la liste des pokémons:
  //   if (!selectedPokemon) {
  //     return (
  //       <div>
  //         <p> Il y a {pokemons.length} Pokémons</p>
  //         {pokemons.map((pokemon) => (
  //           <button
  //             onClick={() => setSelectedPokemon(pokemon)}
  //             key={pokemon.name}
  //             href={pokemon.url}
  //           >
  //             {pokemon.name}
  //           </button>
  //         ))}
  //       </div>
  //     );
  //   }

  //   // ... Sinon, afficher le pokémon:
  //   return (
  //     <div>
  //       <button onClick={() => setSelectedPokemon(null)}>
  //         Retour à la liste
  //       </button>
  //       <Pokemon name={selectedPokemon.name} url={selectedPokemon.url} />
  //     </div>
  //   );
};

export default Pokedex;
