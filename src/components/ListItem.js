import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
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

export default ListItem;
