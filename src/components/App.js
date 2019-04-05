import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import Navbar from './Navbar';
import Planes from './Planes';
import Extras from './Extras';

WebFont.load({
  google: {
    families: ['Roboto:light,regular,medium,bold']
  }
});

const GlobalStyle = createGlobalStyle`
  body {
    all: initial;
    background-color: #fafafa;
    font-family: Roboto, 'sans-serif';
  }
`;

const PageWrapper = styled.div`
  padding: 0 2rem 2rem;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <PageWrapper>
          <Router>
            <Navbar />
              <Switch>
                <Route exact path='/' component={Planes} />
                <Route exact path='/extras' component={Extras} />
              </Switch>
          </Router>
        </PageWrapper>
      </React.Fragment>
    );
  }
}

export default App;
