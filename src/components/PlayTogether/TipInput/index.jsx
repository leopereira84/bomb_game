import React from "react";
import { Container, Input, InputContainer, TipText, TipTitle } from "./styled";

export default function TipInput({
  started,
  question,
  setQuestion
}) {

  return (
    <Container>
      <TipTitle>Dica de Senha:</TipTitle>

      {!started ? (
        <InputContainer>
          <Input
            placeholder="Dica para a sua dupla"
            value={question}
            onChangeText={(value) => {
              setQuestion(value);
            }}
          />
        </InputContainer>
      ) : (
        <TipText>{question}</TipText>
      )}

    </Container>
  );
}
