import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text>{library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { id, title } = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 16,
  },
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
