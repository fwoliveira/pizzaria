import React from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { 
  Container,

} from './styles';

export function SearchBar(){
  return (
    <Container>
     <Input/> 
    <Button/>
    </Container>
  )
}

