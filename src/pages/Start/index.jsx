import React from "react";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, Rules, SubTitle, Title } from "./styles";

export default function Start (){
  const handleNavToPlayAlone = () => {
    console.log("Teste de play alone");
  }

  const handleNavToPlayTogether = () => {
    console.log("Teste de play together");
  }

  const handleNavToRules = () => {
    console.log("Teste de rules");
  }

  return (
    <Container>
      <Logo source={require("../../assets/logoDark.png")} style={{ resizeMode: "contain" }} />
      <Title>Bem-vindo ao {"\n"} Bomb Game</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent buttonText={"Jogar Solo"} handlePress={handleNavToPlayAlone} />
      <ButtonComponent buttonText={"Jogar em Dupla"} handlePress={handleNavToPlayTogether} />
      <Rules onPress={handleNavToRules} >Ver as regras do jogo</Rules>
    </Container>
  );
}
