import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [{ name: "Pikachu" }, { name: "Snorlax" }],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api-auth/shoe/")
      .then((res) => res.json())
      .then((data) => this.setState({ pokemon: data }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shoes</h1>
        </header>
        <ul>
          {this.state.pokemon.map((p) => {
            return (
              <li>
                <p>Size: {p.size}</p>
                <p>Brand: {p.brand_name}</p>
                <p>Manufacturer: {p.manufacturer}</p>
                <p>Color: {p.colors}</p>
                <p>Type: {p.shoe_type}</p>
                <p>Fasten: {p.fasten_type}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
