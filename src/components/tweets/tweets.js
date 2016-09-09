import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import * as Firebase from 'firebase';

module.exports = React.createClass({
  getInitialState: function(){
    return {
      user: null
    };
  },
  componentWillMount: function() {
    var user = Firebase.auth().currentUser;
    this.setState({user: user.email });
  },
  render: function() {
    if(!this.state.user){
      return (
          <View>
            <Text style={styles.container}>Loading...</Text>
          </View>
      )
    }
    var username = this.state.user;

    return (
      <View style={styles.container}>
        <Text>Welcome back {username}!</Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
