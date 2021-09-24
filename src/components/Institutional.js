import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Institutional.scss";

const Institutional = () => (
  <section className="institutional text-light py-5">
    <Container>
      <Row>
        <Col xs={12} lg={5}></Col>
        <Col xs={12} lg={7}>
          <h2>Já nascemos digital</h2>
          <p>
            A expressão Lorem ipsum em design gráfico e editoração é um texto
            padrão em latim utilizado na produção gráfica para preencher os
            espaços de texto em publicações para testar e ajustar aspectos
            visuais antes de utilizar conteúdo real.
          </p>
          <Button variant="outline-light">Abra sua conta</Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;
