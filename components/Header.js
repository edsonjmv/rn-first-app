import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Colors from '../constants/colors';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'ios' ? '#fff' : Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? Colors.primary : '#fff',
    fontSize: 18,
    fontFamily: 'open-sans-bold'
  }
});

export default Header;
