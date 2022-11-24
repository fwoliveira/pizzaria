import React from 'react';
import { Button } from '../../components/Button';
import { PizzaCard } from '../../components/PizzaCard';
import { SearchBar } from '../../components/SearchBar';
import {Container,
        Header,
        Emoji,
        Title,
        Icon,
        AdmInfo,
        SeachBarCard,
        List,
        Form,
        Line


} from './styles'
import { data } from "../../utils/Pizzas";

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
    
    <Form>
      <Line/>
    <List
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PizzaCard data={item} />}
      /> 
      <Button title='Cadastrar pizza'/>
      </Form>
    </Container>
  );
}