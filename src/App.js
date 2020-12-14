import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Archive from './components/archive/Archive';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/archive" />
            </Route>
            <Route path="/archive" component={Archive} />
            <Route path="/contests">
              contests
            </Route>
            <Route exact path="/account">
              account
            </Route>
            <Route exact path="/login">
              log in now
            </Route>
            <Route exact path="/signup">
              sign up now
            </Route>
            <Route>
              not found
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
