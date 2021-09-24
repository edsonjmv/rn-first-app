import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>The game is over!</Text>
      <Text style={DefaultStyles.bodyText}>
        Number of rounds: {props.roundsNumber}
      </Text>
      <Text style={DefaultStyles.bodyText}>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
