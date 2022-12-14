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
        Hoje em dia, mais e mais empresas est??o migrando para o desenvolvimento e implanta????o de aplicativos em ambientes baseados em nuvem. Uma das principais motiva????es da computa????o em nuvem ?? que ela evita muitas das problem??ticas associadas ?? configura????o e gerenciamento do hardware e software. Isso ?? feito alugando remotamente recursos de computador dispon??veis em centros de dados mantidos por um provedor de nuvem.

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
          <Typography paragraph>Alguns dos principais provedores de servi??os em nuvem s??o:</Typography>
          <Typography paragraph>
       
Amazon Web Services (AWS)

Microsoft Azure

Google Cloud Platform (GCP)

Todos esses provedores t??m suas pr??prias terminologias para os servi??os prestados, mas todos compartilham os mesmos princ??pios descritos neste artigo.
          </Typography>
          <Typography paragraph>
          Desta forma, empresas e indiv??duos podem utilizar remotamente as configura????es de hardware e software e fluxos de trabalho fornecidos por diferentes provedores de servi??os em nuvem sem ter que se preocupar em comprar o equipamento, configurar diferentes ambientes e mant??-los ao longo do tempo. Usar esse tipo de abordagem, portanto, possibilita que os usu??rios se concentrem apenas no desenvolvimento e implanta????o de seus servi??os (por exemplo, site, banco de dados, aplicativos, an??lise de dados) sem ter que pensar em qualquer sobrecarga poss??vel. Em ??ltima an??lise, isso pode levar a um desenvolvimento mais r??pido / cont??nuo e a uma maior satisfa????o do cliente, de acordo com os princ??pios comuns de DevOps (opera????es de desenvolvimento).
          </Typography>
          <Typography paragraph>
          A ideia principal por tr??s dos servi??os em nuvem se assemelha a qualquer outro tipo de utilit??rio e sistema baseado em assinatura que foi desenvolvido no passado. Por exemplo, hoje em dia, cada um de n??s faz uso de servi??os como eletricidade / ??gua / g??s sem ter que se preocupar com o funcionamento desses sistemas e como nos s??o entregues.
          </Typography>
          <Typography>
          Os nossos fornecedores devem nos fornecer um servi??o confi??vel onde tenhamos que pagar apenas por quanto usamos e n??o  por todos esses servi??os.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
