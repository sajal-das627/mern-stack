import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import { render } from '@testing-library/react';
class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
      </div>
      </BrowserRouter>
    );
    
  }
}

export default App;
