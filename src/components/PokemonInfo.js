import { Component } from "react";

// import PokemonDataView from './PokemonDataView';
// import PokemonErrorView from './PokemonErrorView';
// import PokemonPendingView from './PokemonPendingView';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    err: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      console.log("замена имя покемона");
      this.setState({ loading: true });
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then((res) => res.json())
        .then((pokemon) => this.setState({ pokemon }))
        .catch((err) => this.setState({ err }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { pokemon, loading, err } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        {err && <div>Vse propalo..........</div>}
        <h1>PokemonInfo</h1>
        {loading && <div>Загружаем...</div>}
        {!pokemonName && <div>Введите имя покемона</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              width="400"
              alt=""
            />
          </div>
        )}
      </div>
    );
  }
}
