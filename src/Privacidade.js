import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Papercard from './components/Papercard';
import Card from './components/Card';



const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Privacidade</h1>
          <p className="lead">
          A Foco Cloud Computing  evoluiu, como uma empresa genuinamente brasileira, e expandiu ao longo dos seus 20 anos, focada em soluções para a nuvem.
<Papercard />
<Card />

Movida pela mudança, confiança, praticidade e resultados, é apaixonada por surpreender e entregar o seu melhor. Cria soluções, automatizadas, que amparam e melhoram as relações das operadoras de saúde com seus prestadores médicos, clínicas, laboratórios e hospitais, que proporcionam tranquilidade e confiança para uma gestão sólida e transparente.
          </p>
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
<button class="btn btn-primary" type="submit">Button</button>

        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;