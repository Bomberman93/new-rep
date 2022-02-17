import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import PokemonForm from './components/PokemonForm';
import 'react-toastify/dist/ReactToastify.css';
import PokemonInfo from "./components/PokemonInfo";
// import PokemonInfo from './components/PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: '',
  }
  handleSearchFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  }
  
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
        <PokemonForm pokemonName={this.handleSearchFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName}/>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
