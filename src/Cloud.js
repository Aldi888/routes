import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Cardex from './components/Cardex';

const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Cloud</h1>
          <p className="lead">
          <Cardex />
          </p>
          <a class="btn btn-primary btn-lg" href="#" role="button">Saiba mais</a>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;