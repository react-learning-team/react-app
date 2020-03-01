import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent'
import './App.css';
import {DISHES} from './shared/dishes'



class App extends Component {
  constructor(props){
    super(props)
      
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container justify-content-center">
            <NavbarBrand href="/"> Restaurant Con Fusion</NavbarBrand>
          </div>

        </Navbar>
        <Menu  dishes={this.state.dishes}/>
        WellCome to React
    </div>
    );
  }

}
export default App;
