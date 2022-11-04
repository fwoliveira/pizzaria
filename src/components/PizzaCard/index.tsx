import React from 'react';

import { 
    Container,
    Header,
    Title,
    Description,
    
     
} from './styles';



export function HighlightCard() {
  return (
      <Container >
        <Image source={require('../../assets/happy.png')} />
          <Header>
              <Title>Margherita</Title>
              <Description>Mussarela, manjericão fresco,
               parmesão e tomate.
              </Description>
          </Header>
      </Container>
  )
}
