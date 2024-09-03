import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div>
        <Container fluid>
        <Row>
            <Col sm={9}>
            <Row>
                <Col className='col-border' sm={9}>Laufzettel</Col>
                <Col className='col-border' sm={3}>Logo</Col>
            </Row>
            </Col>
            <Col className='col-border' sm={3}>Suchfeld</Col>
        </Row>
        </Container>

    </div>
  );
}

export default App;
