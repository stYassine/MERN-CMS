import React, { Component } from 'react';
// import '../public/assets/css/style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


/// Public
import PublicComponent from './components/public/PublicComponent';

/// Admin
import MainDashboard from './components/dashboard/MainDashboard';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="App">

          <Switch>
            <Route exact path="/" component={PublicComponent} />
            <Route  path="/admin" component={MainDashboard} />
          </Switch>

          
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
