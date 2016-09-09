import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'grey'}
        onPress={this.props.onPress}
        >
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#2196f3',
    borderRadius: 2,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,

  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20,
    color: '#ffff'
  }
});
