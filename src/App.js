import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import Onboarding from './components/Onboarding'

function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        <header>
          <h1>Wizard</h1>
        </header>
        <Divider variant="middle" />
        <main>
          <Switch>
            <Route path="/onboarding">
              <Onboarding />
            </Route>
          </Switch>
        </main>
      </Router>
    </Container>
  );
}

export default App;
