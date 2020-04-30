import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from './pages/index/Index'
import Visit from './pages/visit/Visit'
import Events from './pages/events/Events'

function App() {
  return (
    <Router>
      <div className="App overflow-hidden">
        <Switch>
          <Route path="/visit">
            <Visit />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
