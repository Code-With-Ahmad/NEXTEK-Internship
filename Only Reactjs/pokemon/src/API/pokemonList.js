import axios from "axios";
export default async function PokemonList(num) {
  let res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${num}&offset=200`
  );
  return res.data.results;
}
