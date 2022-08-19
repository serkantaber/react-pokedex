import { useRef, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Pokemon from "./Pokemon";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=9"
  );

  // useEffect to only run once in react 18
  const effectRan = useRef(false);

  const fetchPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    // getting the next 9 pokemons from the api
    // https://pokeapi.co/api/v2/pokemon?limit=9 - it will increase the offset accordingly
    setLoadMore(data.next);

    // looping through pokemons to get their detailed apis
    function pokemonDetails(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPokemons((prevList) => [...prevList, data]);
        pokemons.sort((a, b) => a.id - b.id);
      });
    }
    pokemonDetails(data.results);
  };

  useEffect(() => {
    // to run it once in react 18
    if (effectRan.current === false) {
      fetchPokemons();
    }
    effectRan.current = true;
  }, []);

  console.log(pokemons);

  return (
    <>
      <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchPokemons}
        hasMore={true}
        loader={<h3>Loading...</h3>}
        endMessage={<h3>You have seen it all!</h3>}
      >
        <div className="container">
          {pokemons.map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
