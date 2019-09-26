import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Work } from './Work';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      //https://reactjs.org/docs/fragments.html
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
