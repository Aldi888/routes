import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Card from './components/Card';
const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Sobre a Empresa</h1>
          <p className="lead">
          A Making Tecnologia evoluiu, como uma empresa genuinamente brasileira, e expandiu ao longo dos seus 20 anos, focada em soluções para empresas no segmento da saúde. Hoje atende milhares de beneficiários, guias processadas e milhões de contas faturadas, em todo o país.
Guiada sempre em solucionar e transmitir informações eletrônicas entre empresas com segurança, eficiência, criou uma comunidade virtual de negócios, onde os usuários desta tecnologia adquirem autonomia e independência no seu relacionamento.

Movida pela mudança, confiança, praticidade e resultados, é apaixonada por surpreender e entregar o seu melhor. Cria soluções, automatizadas, que amparam e melhoram as relações das operadoras de saúde com seus prestadores médicos, clínicas, laboratórios e hospitais, que proporcionam tranquilidade e confiança para uma gestão sólida e transparente.
<Card />
          </p>
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;