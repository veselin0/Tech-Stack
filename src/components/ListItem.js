import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    console.log(this.props);
    return (
      <CardSection>
        <Text style={styles.titleStyle}>{this.props.library.item.title}</Text>
      </CardSection>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 16,
  },
});

export default connect(null, actions)(ListItem);
