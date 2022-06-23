import { Component } from "react";
// import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
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
        this.setState(() => {
          return { cars: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { cars, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredCars = cars.filter((car) => {
      return car.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Cars Collection</h1>
        <SearchBox
          className="cars-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search cars"
        />
        <CardList cars={filteredCars} />
      </div>
    );
  }
}

export default App;
