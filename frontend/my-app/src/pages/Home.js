import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
 return (
    <Container>
      <Row>
        <Col>
          <h1>Página Inicial</h1>
          <p>Bem-vindo(a) ao nosso aplicativo...</p>
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

export default Home;