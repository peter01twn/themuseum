import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/index/Index'
import Visit from './pages/visit/Visit'
import Discovery from './pages/discovery/Discovery'
import ScrollTop from 'utils/ScrollTop'

function App() {
  return (
    <Router>
      <div className="App overflow-hidden">
        <Header />
        <ScrollTop>
          <Switch>
            <Route path="/visit">
              <Visit />
            </Route>
            <Route path="/discovery">
              <Discovery />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </ScrollTop>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
