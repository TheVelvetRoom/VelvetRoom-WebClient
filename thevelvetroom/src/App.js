import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { HomePage } from './pages'

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
              <Route exact path='/' render={()=><HomePage />} />
              {/* <Route component={NotFound} /> */}
            </Switch>
        </div>
      </Router>
  );
}

export default App;
