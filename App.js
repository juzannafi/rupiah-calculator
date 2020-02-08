import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Component from './Component';

export default class App extends React.Component {

  render() {
    return (
      <View>
        <View style={{ padding: 10, backgroundColor: 'red' }}>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>
            Rupiah Calculator
        </Text>
        </View>
        <Component />
      </View>
    )
  }
}
