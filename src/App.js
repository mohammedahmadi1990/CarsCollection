import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { cars: users };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
  }

  render() {
    const filteredCars = this.state.cars.filter((car) => {
      return car.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search cars"
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredCars.map((car) => {
          return (
            <div key={car.id}>
              <h1>{car.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
