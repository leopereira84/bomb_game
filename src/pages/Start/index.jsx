import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Logo, Rules, SubTitle, Title } from "./styled";
import ButtonComponent from "../../components/Buttons";

export default function Start() {
  const navigation = useNavigation();

  function handleNavToPlayAlone () {
    navigation.navigate("PlayAlone")
  }

  function handleNavToPlayTogether () {
    navigation.navigate("PlayTogether")
  }

  function handleNavToRules () {
    navigation.navigate("Rules")
  }

  return (
    <Container>
      <Logo source={require("../../assets/logoDark.png")} style={{ resizeMode: "contain" }} />
      <Title>Bem-vindo ao {"\n"}Bomb Game</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent buttonText={"Jogar Solo"} handlePress={handleNavToPlayAlone} />
      <ButtonComponent buttonText={"Jogar em Dupla"} handlePress={handleNavToPlayTogether} />
      <Rules onPress={handleNavToRules} >Ver as regras do jogo</Rules>
    </Container>
  );
}
