import React, { Component } from 'react';
import AppHeadBar from './components/AppHeadbar';
import Resume from './components/Resume';
import HeadJumbotron from './components/HeadJumbotron';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';

import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <AppHeadBar/>
            <Container>
              <HeadJumbotron/>
              <ItemModal/>
              <Resume/>
            </Container>
          </div>
        </Provider>
    );
  }
}

export default App;
