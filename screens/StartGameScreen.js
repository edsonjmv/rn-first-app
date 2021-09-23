import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={styles.buttonsContainer}>
          <Button title="Reset" color="red"></Button>
          <Button title="Confirm"></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15
  }
});

export default StartGameScreen;
