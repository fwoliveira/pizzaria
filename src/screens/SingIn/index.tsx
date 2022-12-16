import React from "react";
import { Button } from "../../components/Form/Button/";
import { Input } from "../../components/Form/Input/";
import {
  Container,
  Title,
  Image,
  RecoveryPassword,
} from "./Styles";
import { useNavigation } from '@react-navigation/native'

export function SignIn() {
  const navigation = useNavigation()

  function openScreen(){
      navigation.navigate('homeAdmin');
  }
  return (
    <Container>
      <Image source={require("../../assets/brand.png")} />
      <Title>Login</Title>
      <Input placeholder="E-mail" />
      <Input secureTextEntry={true} placeholder="Senha" />
      <RecoveryPassword>Esqueci Minha Senha</RecoveryPassword>
      <Button title="Entrar" type="red" onPress={openScreen} />
    </Container>
  );
}