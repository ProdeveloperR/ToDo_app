import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import * as firebase from 'firebase'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }

  }
  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyCM26spKyrQCzYANBB3Ij09p13NU2SzeJQ",
      authDomain: "gitnreact.firebaseapp.com",
      databaseURL: "https://gitnreact.firebaseio.com",
      projectId: "gitnreact",
      storageBucket: "gitnreact.appspot.com",
      messagingSenderId: "694787728663",
      appId: "1:694787728663:web:ecfd799d751ba9ade50352",
      measurementId: "G-8MCSM8LQTJ"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    console.log(firebase.auth())
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text>todo App</Text>
      </SafeAreaView>
    );
  }
}
