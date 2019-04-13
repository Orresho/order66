import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import routes from './routes';

import './App.scss';
import './styles/common.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <div className="App">
          {routes &&
            routes.map((route, key) => {
              const { component, path, exact } = route;
              return <Route key={key} exact={exact} path={path} component={component} />
            })}
          </div>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
