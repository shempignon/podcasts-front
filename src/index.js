import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import client from "./client";
import theme from "./theme";
import * as serviceWorker from "./serviceWorker";
import Router from './router';

ReactDOM.render(
  <ApolloProvider client={ client }>
    <MuiThemeProvider theme={ theme }>
      <CssBaseline/>
      <Router/>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
