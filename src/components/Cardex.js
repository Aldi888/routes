import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Cloud Computing"
        subheader="Nossa atualidade"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://routes.focodireto.com/images/cloudcomputing.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Hoje em dia, mais e mais empresas estão migrando para o desenvolvimento e implantação de aplicativos em ambientes baseados em nuvem. Uma das principais motivações da computação em nuvem é que ela evita muitas das problemáticas associadas à configuração e gerenciamento do hardware e software. Isso é feito alugando remotamente recursos de computador disponíveis em centros de dados mantidos por um provedor de nuvem.

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Alguns dos principais provedores de serviços em nuvem são:</Typography>
          <Typography paragraph>
       
Amazon Web Services (AWS)

Microsoft Azure

Google Cloud Platform (GCP)

Todos esses provedores têm suas próprias terminologias para os serviços prestados, mas todos compartilham os mesmos princípios descritos neste artigo.
          </Typography>
          <Typography paragraph>
          Desta forma, empresas e indivíduos podem utilizar remotamente as configurações de hardware e software e fluxos de trabalho fornecidos por diferentes provedores de serviços em nuvem sem ter que se preocupar em comprar o equipamento, configurar diferentes ambientes e mantê-los ao longo do tempo. Usar esse tipo de abordagem, portanto, possibilita que os usuários se concentrem apenas no desenvolvimento e implantação de seus serviços (por exemplo, site, banco de dados, aplicativos, análise de dados) sem ter que pensar em qualquer sobrecarga possível. Em última análise, isso pode levar a um desenvolvimento mais rápido / contínuo e a uma maior satisfação do cliente, de acordo com os princípios comuns de DevOps (operações de desenvolvimento).
          </Typography>
          <Typography paragraph>
          A ideia principal por trás dos serviços em nuvem se assemelha a qualquer outro tipo de utilitário e sistema baseado em assinatura que foi desenvolvido no passado. Por exemplo, hoje em dia, cada um de nós faz uso de serviços como eletricidade / água / gás sem ter que se preocupar com o funcionamento desses sistemas e como nos são entregues.
          </Typography>
          <Typography>
          Os nossos fornecedores devem nos fornecer um serviço confiável onde tenhamos que pagar apenas por quanto usamos e não  por todos esses serviços.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
