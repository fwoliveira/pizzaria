import React from 'react';
import { SearchBar } from '../../components/SearchBar';
import {Container,
        Header,
        Emoji,
        Title,
        Icon,
        AdmInfo,
        SeachBarCard


} from './styles'

export default function HomeAdmin() {
  return (
    <Container>
     <Header> 
      <AdmInfo>  
     <Emoji source={require('../../assets/happy.png')} />
     <Title>Olá,Admin</Title>
     </AdmInfo>
     <Icon name='exit-outline'/>
     </Header>
     <SeachBarCard>
    <SearchBar/>
    </SeachBarCard>
    </Container>
  );
}