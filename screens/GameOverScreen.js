import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: '#000',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultsText: {
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 20,
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
