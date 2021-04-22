import React, {Component} from 'react';
import './App.css';
import Products from './components/Products'
import Details from './components/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      dataArr: []
    }
    // this.clickPic = this.clickPic.bind(this)
  }

  // clickPic(){
  //   let Pic = this.state.dataArr;
  // }

  render(){
    // console.log(this.state.dataArr)
    return(
      <div className="App">
        <Router>
          <nav>
              <h1><Link to="/">Products</Link></h1>
              {/* <li><Link to="/details/:id">Details</Link></li> */}
          </nav>
      
          <Switch>
            <Route path="/details/:id"><Details /></Route>
            <Route path="/"><Products /></Route>
          </Switch>
        </Router>
    </div>
    );
  }
}

export default App;

//click={this.clickPic}
//render={this.state.dataArr}