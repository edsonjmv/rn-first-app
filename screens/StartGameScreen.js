import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.accent}></Button>
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary}></Button>
          </View>
        </View>
      </Card>
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
  },
  button: {
    width: 100
  }
});

export default StartGameScreen;
