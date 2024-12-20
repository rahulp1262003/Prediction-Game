import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreens";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView, View } from "react-native";

export default function App() {
  const [userNumber, setuserNumber] = useState()

  function pickedNumberHandler(pickedNumber) {
    setuserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{ flex:1 }}>
        {screen}
      </View>
    </SafeAreaView>
  );
}