import React from 'react';
import {Container,
        Header,
        Emoji,
        Title,
        Icon,


} from './styles'

export default function HomeAdmin() {
  return (
    <Container>
     <Header>   
     <Emoji source={require('../../assets/happy.png')} />
     <Title>Olá,Admin</Title>
     <Icon name='exit-outline'/>
     </Header>
    </Container>
  );
}