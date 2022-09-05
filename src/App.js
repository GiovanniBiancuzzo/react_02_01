import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import scifi from '../src/data/scifi.json';
import BookList from './components/BookList';
import CommentsArea from './components/CommentsArea';
import { Col, Container, Row } from 'react-bootstrap';
import { Component } from 'react';


class App extends Component {

  state = {
    asin: ''
  };


  setAsin = (asin) => {
    this.setState({ asin: asin });
  };

  render () {
    return (
      <div className='App'>

        <WarningSign alert="Alert di React Bootstrap" />
        <MyBadge text="Questo è un badge personalizzato" color="success" />
        <Container fluid>
          <Row>
            <Col><BookList books={scifi} setAsin={this.setAsin} /></Col>
            <Col><CommentsArea asin={this.state.asin} setAsin={this.setAsin} /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
