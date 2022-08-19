import { MdCatchingPokemon } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <MdCatchingPokemon size={50} color={"#EE1B24"} />
      <h1>Pokedex</h1>
    </header>
  );
}
