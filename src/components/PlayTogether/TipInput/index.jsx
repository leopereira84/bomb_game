import React from "react";
import { Container, Input, InputContainer, TipTitle } from "./styled";

export default function TipInput() {
  return (
    <Container>
      <TipTitle>Dica de Senha:</TipTitle>
      <InputContainer>
        <Input placeholder="Dica para a sua dupla"></Input>
      </InputContainer>
    </Container>
  );
}
