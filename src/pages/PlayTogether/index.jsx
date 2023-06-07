import React, { useEffect, useState } from "react";
import { BombMessage, Container, ScrollContainer, Title } from "./styled";
import { useNavigation } from "@react-navigation/native";

import InputTimer from "../../components/PlayTogether/InputTimer";
import TipInput from "../../components/PlayTogether/TipInput";
import InputPassword from "../../components/PlayTogether/InputPassword";
import ButtonComponent from "../../components/Buttons";

import BombService from "../../services/api/BombApp";

import { Audio } from "expo-av";

export default function PlayTogether() {
  const navigation = useNavigation();

  const [started, setStarted] = useState(false);
  const [pin, setPin] = useState(["", "", ""]);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [message, setMessage] = useState("");

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [intervalId, setIntervalId] = useState();

  const [sound, setSound] = useState();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  async function handleStartBeep() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../assets/bomb-beep.mp3'));
    setSound(sound);

    console.log('Playing Beep');
    sound.setIsLoopingAsync(true);
    await sound.playAsync();
  }

  async function handlePlaySuccess() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../assets/success.mp3'));
    setSound(sound);

    console.log('Playing Success');
    sound.setVolumeAsync(0.5);
    await sound.playAsync();
  }

  async function handlePlayExplosion() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../assets/explosion.mp3'));
    setSound(sound);

    console.log('Playing Explosion');
    sound.setVolumeAsync(0.5);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function handleStartBomb() {

    const diffTime = BombService.getDiffTime({hours, minutes, seconds});

    handleStartBeep();

    BombService.startCountDown({
      setSeconds,
      setMinutes,
      setHours,
      setStarted,
      diffTime,
      setIntervalId,
      intervalId,
      navigation,
      handlePlayExplosion,
    });
  }

  function handleStartGame() {
    BombService.bombActivationTogether({
      question,
      pin,
      hours,
      minutes,
      seconds,
      setMessage,
      setStarted,
      setPin,
      handleStartBomb,
      setAnswer
    });
  }

  function handleDisarmBomb() {
    BombService.bomnDisarmTogether({
      pin,
      answer,
      setStarted,
      intervalId,
      setPin,
      setAnswer,
      navigation,
      handlePlaySuccess,
    })
  }

  function handleGiveUpGame() {
    BombService.giveUpGame({intervalId, navigation, handlePlayExplosion});
  }

  return (
    <ScrollContainer>
      <Container>
        {/*<Title>Bomb Game Dupla</Title> */}

        <Title>Bomb Game</Title>

        <InputTimer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />

        {message ? <BombMessage>{message ? message : null}</BombMessage> : null}

        <TipInput
          started={started}
          question={question}
          setQuestion={setQuestion}
        />

        <InputPassword
          pin={pin}
          setPin={setPin}
        />

        {
          !started ? (
            <>
              <ButtonComponent
                buttonText="Iniciar"
                handlePress={handleStartGame}
              />

              <ButtonComponent
                buttonText="Página Inicial"
                handlePress={handleNavToStart}
              />

            </>
          ) : (
            <>
              <ButtonComponent
                buttonText="Desarmar"
                handlePress={handleDisarmBomb}
              />

              <ButtonComponent
                buttonText="Desistir"
                handlePress={handleGiveUpGame}
              />
            </>
          )
        }

      </Container>
    </ScrollContainer>
  );
}
