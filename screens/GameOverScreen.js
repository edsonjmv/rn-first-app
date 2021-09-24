import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.titleText}>The game is over!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/success.png')}
          /* source={{
            uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/7625/production/_111254203_8d8f9dd1-cecb-4acd-a4d9-9455dffd652d.jpg'
          }} */
          resizeMode="cover"
        />
      </View>
      <Text style={{ ...DefaultStyles.bodyText, ...styles.resultsText }}>
        Your phone needed{' '}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the number:{' '}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </Text>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
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
  },
  resultsText: {
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 20,
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
