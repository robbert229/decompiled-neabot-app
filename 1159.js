var PropTypes = require('prop-types'),
  React = require('react'),
  ReactNative = require('react-native'),
  l = function (o) {
    var t = o.children,
      l = o.elevation,
      c = o.opacity,
      f = o.cornerRadius,
      s = ReactNative.Platform.select({
        ios: function () {
          return ReactNative.StyleSheet.create({
            container: {
              shadowRadius: l,
              shadowOpacity: c,
              shadowOffset: {
                width: 0,
                height: l,
              },
              borderRadius: f,
              backgroundColor: o.backgroundColor,
              width: ReactNative.Dimensions.get('window').width - 40,
            },
          });
        },
        android: function () {
          return ReactNative.StyleSheet.create({
            container: {
              elevation: l,
              borderRadius: f,
              backgroundColor: o.backgroundColor,
              width: ReactNative.Dimensions.get('window').width - 40,
            },
          });
        },
      })();
    return React.default.createElement(
      ReactNative.View,
      {
        style: [s.container, o.style],
      },
      t
    );
  };

l.prototype = {
  backgroundColor: PropTypes.default.string,
  elevation: PropTypes.default.number,
  cornerRadius: PropTypes.default.number,
  opacity: PropTypes.default.number,
};
l.defaultProps = {
  backgroundColor: '#ffffff',
  elevation: 3,
  cornerRadius: 5,
  opacity: 0.5,
};
var c = l;
exports.default = c;
