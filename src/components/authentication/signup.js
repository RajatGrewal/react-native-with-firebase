import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import * as Firebase from 'firebase';

var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: ''
    }
  },
  onSigninPress: function(){
    this.props.navigator.pop();
  },
  onSignUpPress: function(){
    if(this.state.password !== this.state.passwordConfirmation){
      return this.setState({errorMessage: "Your passwords do not match"});
    }
    firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
      return this.setState({errorMessage: error.message});
    }.bind(this));
    this.props.navigator.immediatelyResetRouteStack([{name:'tweets'}]);
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <Text style={styles.label}>Email Address:</Text>
        <View style={styles.input}>
          <TextInput
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Password:</Text>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Password Confirmation:</Text>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={true}
            value={this.state.passwordConfirmation}
            onChangeText={(text) => this.setState({passwordConfirmation: text})}
            style={styles.input}
          />
        </View>
        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Signup'} onPress={this.onSignUpPress} />
        <Button text={'I have an account...'} onPress={this.onSigninPress}/>
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
