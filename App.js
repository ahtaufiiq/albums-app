'use strict';
import React, { Component } from 'react'; // 1
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';


export default class App extends Component<{}> { 
  render() {
    return (
        <Header headerText={'albums'}/>
    );
  }
 } // 3

const styles = StyleSheet.create({ 
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
 }); // 4