import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.titleText}>The game is over!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // source={require('../assets/success.png')}
          source={{
            uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/7625/production/_111254203_8d8f9dd1-cecb-4acd-a4d9-9455dffd652d.jpg'
          }}
          resizeMode="cover"
        />
      </View>
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
  },
  imageContainer: {
    width: '80%',
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#000',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default GameOverScreen;
