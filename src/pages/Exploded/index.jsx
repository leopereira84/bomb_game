import React, { useEffect } from "react";
import { Container, Logo, SucessImg, Title } from "./styled";

import logoImg from "../../assets/logoLightRed.png";
import sucessImg from "../../assets/bomba_explodiu.png";
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { Vibration } from "react-native";

export default function Exploded() {
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  useEffect(() => {
    Vibration.vibrate(2000);
  }, []);

  return (
    <Container>
      <Logo source={logoImg} style={{ resizeMode: 'contain' }} />
      <Title>Você falhou, a{"\n"}bomba explodiu!!!</Title>
      <SucessImg source={sucessImg} style={{ resizeMode: 'contain' }} />

      <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
  );
}
