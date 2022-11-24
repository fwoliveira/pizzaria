import React from "react";

import {
  Container,
  Image,
  Header,
  TitleInfo,
  Title,
  ButtonIcon,
  Description,
  Line,

  
} from "./styles";
interface Props {
  image: string;
  title: string;
  description: string;
}
interface CardProps {
  data: Props
}

export function PizzaCard({data} : CardProps) {
  return (
    <Container>
        <Image source={data.image} />
      <Header>
        <TitleInfo>
          <Title>{data.title}</Title>
            <ButtonIcon name="right" />
        </TitleInfo>
        <Description>
          {data.description}
        </Description>
        <Line/>
      </Header>
    </Container>
  );
}
