import React from 'react';

import { 
  Container,
  Input,
  Form,
  Button,
  Icon
} from './styles';

export function SearchBar(){
  return (
    <Container>
    <Input/>
    <Button><Icon name='search'/></Button>
    </Container>
  )
}

