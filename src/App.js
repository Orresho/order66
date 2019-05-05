import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './routes';

import './App.scss';
import './styles/common.scss';
import './styles/loader.scss';
import './styles/notification.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes &&
            routes.map((route, key) => {
              const { component, path, exact } = route;
              return (
                <Route
                  key={key}
                  exact={exact}
                  path={path}
                  component={component}
                />
              );
            })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
