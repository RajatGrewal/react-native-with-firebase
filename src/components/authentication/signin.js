import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import * as Firebase from 'firebase';

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
};

const firebaseApp = firebase.initializeApp(config);

var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState:function(){
    return {
      username:'',
      password:'',
      errorMessage: ''
    };
  },
  onPress: function() {
    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(function(firebaseUser) {
        this.props.navigator.immediatelyResetRouteStack([{name:'tweets'}]);
      }.bind(this))
      .catch(function(error) {
        return this.setState({errorMessage: error.message});
      }.bind(this));
  },
  onSignupPress: function(){
    this.props.navigator.push({name:'signup'});
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>

        <Text style={styles.label}>Email Address:</Text>
        <View style={styles.input}>
          <TextInput
          onChangeText={(text) => this.setState({username:text})}
          value={this.state.username}
          style={styles.input} />
        </View>

        <Text style={styles.label}>Password:</Text>
        <View style={styles.input}>
          <TextInput secureTextEntry={true} style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Sign In'} onPress={this.onPress} />
        <Button text={'I need an account...'} onPress={this.onSignupPress} />
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  input: {
    paddingTop: 4,
    paddingBottom: 4,
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
    alignSelf: 'stretch',
  },
  label: {
    fontSize: 18,
    paddingTop: 10
  }
});
