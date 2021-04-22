import React from 'react';
import './App.css';
//import of specific components can be performed as seen below which can then be passed to the Switch section of the router as seen below, or alternatively separate functions can be written directly into the code here as seen below the App() function
import Home from './components/Home'
import Signup from './components/Signup'
import Details from './components/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/details">Details</Link></li>
          </ul>
        </nav>
      
        <Switch>
          <Route path="/signup"><Signup /></Route>
          <Route path="/details"><Details /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

// function Home(){
//   return <h2>This is the Home page</h2>
// }

// function Signup(){
//   return <h2>This is the Signup page</h2>
// }

// function Details(){
//   return <h2>This is the Details page</h2>
// }

export default App;
