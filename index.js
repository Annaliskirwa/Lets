import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
import PropTypes from 'prop-types';
const InfoView = ({ name, onClick, open }) => (
  <View style={styles.root}>
    <Text style={[
      styles.rootText,
      { opacity: open ? 1 : 0 }
    ]}>
      {name}
    </Text>
    <VrButton
      style={[
        styles.rootButton,
        { backgroundColor: open ? 'red': 'green' },
      ]}
      onClick={onClick}
    />
  </View>
);

InfoView.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default InfoView;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rootText: {
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
  },
  rootButton: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 0,
  }
});
AppRegistry.registerComponent('Info', () => Info);