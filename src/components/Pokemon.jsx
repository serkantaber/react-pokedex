import {
  GiWeight,
  GiHealthNormal,
  GiBroadsword,
  GiShield,
  GiZeusSword,
  GiBoltShield,
  GiRunningNinja,
} from "react-icons/gi";
import { FaRulerVertical } from "react-icons/fa";
import "./Pokemon.css";

export default function Pokemon({ pokemon }) {
  const iconSize = 25;

  return (
    <div className="card-container">
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={`Artwork of ${pokemon.name}`}
      />
      <h1 className={pokemon.types[0].type.name}>{pokemon.name}</h1>
      <div className="type-container">
        {pokemon.types.map((type, i) => (
          <aside className={type.type.name} key={i}>
            {type.type.name}
          </aside>
        ))}
      </div>
      <h2>About</h2>
      <hr />
      <div className="text-container">
        <div>
          <p>
            <GiWeight size={iconSize} /> {pokemon.weight} kg
          </p>
          <p className="gray">Weight</p>
        </div>
        <div>
          <p>
            <FaRulerVertical size={iconSize} /> {pokemon.height} met.
          </p>
          <p className="gray">Height</p>
        </div>
        <div>
          {pokemon.abilities.map((ability, i) => (
            <p key={i}>{ability.ability.name}</p>
          ))}
          <p className="gray">Abilities</p>
        </div>
      </div>
      <h2>Base Stats</h2>
      <hr />
      <div className="text-container">
        <div>
          <GiHealthNormal size={iconSize} />
          <p>{pokemon.stats[0].base_stat}</p>
        </div>
        <div>
          <GiBroadsword size={iconSize} />
          <p>{pokemon.stats[1].base_stat}</p>
        </div>
        <div>
          <GiShield size={iconSize} />
          <p>{pokemon.stats[2].base_stat}</p>
        </div>
      </div>
      <div className="text-container">
        <div>
          <GiZeusSword size={iconSize} />
          <p>{pokemon.stats[3].base_stat}</p>
        </div>
        <div>
          <GiBoltShield size={iconSize} />
          <p>{pokemon.stats[4].base_stat}</p>
        </div>
        <div>
          <GiRunningNinja size={iconSize} />
          <p>{pokemon.stats[5].base_stat}</p>
        </div>
      </div>
    </div>
  );
}
