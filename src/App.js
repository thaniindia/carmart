import React, { Component } from 'react'
import './App.css'
import Header from './pages/Header'
import Login from './pages/Login'
import CarList from './pages/CarList'

const cars = [
  {
    id: 1,
    brand: 'Audi',
    model: 'A3 Cabriolet',
    specs: '1.4 TFSI tronic (A)',
    price: 187919,
    dealer: 'Premium Automobiles',
    origin: 'Hungary',
    userRating: 4.3
  },
  {
    id: 2,
    brand: 'Audi',
    model: 'A3 Sedan',
    specs: '1.0 TFSI tronic (A)',
    price: 141000,
    dealer: 'Premium Automobiles',
    origin: 'Hungary',
    userRating: 3.7
  },
  {
    id: 3,
    brand: 'BMW',
    model: '1 Series Hatchback Diesel',
    specs: '116d (A)',
    price: 130888,
    dealer: 'Premium Automobiles',
    origin: 'Germany',
    userRating: 4.0
  }
]

class App extends Component {

  constructor() {
    super()
    this.state = {
      sortingMethod: 'sortByPriceDesc'
    }
  }

  sortByPriceAsc(cars) {
    return cars.sort((carA, carB) => (carA.price - carB.price))
  }

  sortByPriceDesc(cars) {
    return cars.sort((carA, carB) => (carB.price - carA.price))
  }

  render() {
    return (
      <div> 
        <div className="App">
          <Header />
        </div>

        <div>
          <CarList
            theList={cars}
            setSortingMethod={(val) => this.setState({ sortingMethod: val })}
            sortCars={this[this.state.sortingMethod]}
            sortingMethod={this.state.sortingMethod}
          />
        </div>
        
      </div>

    );
  }
}
 
export default App;
