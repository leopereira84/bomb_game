import React from "react";
import { ImageBackground, Alert } from "react-native";
import { Container, TextTimer, Timer, TipContainer, TipText, TipTitle, Title } from "./styled";

import bombImg from "../../assets/bomba.png"
import PasswordInput from "../../components/PasswordInput";
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function PlayAlone() {
  const navigation = useNavigation();

  function handleStartGame() {
    Alert.alert("Jogo Iniciado");
  }

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  return (
    <Container>
      <Title>Bomb Game Solo</Title>
      <ImageBackground source={bombImg} resizeMode="cover"
        style={{ minHeight: 130, marginTop: 50, alignItems: "center", justifyContent: "center" }}>
          <Timer>
            <TextTimer>
              00 : 05 : 00
            </TextTimer>
          </Timer>
      </ImageBackground>
      <TipContainer>
        <TipTitle>Sua dica:</TipTitle>
        <TipText>Dica vai estar aqui</TipText>
      </TipContainer>

      <PasswordInput />

      <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame} />
      <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
  );
}
