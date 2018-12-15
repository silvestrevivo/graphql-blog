import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './index.css';
import App from './components/App';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql'
})

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/signin" component={Signin} exact />
      <Route path="/signup" component={Signup} exact />
      <Redirect to="/" />
    </Switch>
  </Router>
)

ReactDOM.render(
  <ApolloProvider client={client}>
    {Root()}
  </ApolloProvider>
  , document.getElementById('root'));
