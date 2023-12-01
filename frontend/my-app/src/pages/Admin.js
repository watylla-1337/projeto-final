import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Admin() {
 return (
    <Container>
      <Row>
        <Col>
          <h1>Gestão Administrativa</h1>
          <p>Gerencie seu aplicativo aqui...</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary">Ir para o painel</Button>
        </Col>
      </Row>
    </Container>
 );
}

export default Admin;