'use strict';
import React, { Component } from 'react'; // 1
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


export default class App extends Component<{}> { 
  render() {
    return (
      <View style={{ flex:1 }} >
        <Header headerText={'Albums'}/>
        <AlbumList />
      </View>
        
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