import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Folder from "@mui/icons-material/Folder";
import { Container, Row, Col } from 'react-grid-system';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Container>
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" icon={<Folder />} />
      </BottomNavigation>
    </Box>
    
 
    
      <Row>
        <Col sm={4}>
          FocoDireto Cloud Computing
        </Col>
        <Col sm={4}>
          Contato
        </Col>
        <Col sm={4}>
          Soluções
          Temos soluções para você fornecer suporte online e vendas de produtos digitais tais como ebook, programs e outros.
          
        </Col>
      </Row>
    </Container>
  );
}
