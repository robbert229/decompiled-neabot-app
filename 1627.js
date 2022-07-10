require('./820');

var ReactNative = require('react-native'),
  module1628 = require('./1628'),
  c = ReactNative.StyleSheet.create({
    container: {
      flex: 1,
    },
    section: {
      padding: module1628.default.s20,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowSpread: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

exports.default = c;
