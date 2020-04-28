import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from './pages/index/Index.jsx'

function App() {
  return (
    <Router>
      <div className="App overflow-hidden">
        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
