var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  ReactNative = require('react-native'),
  module522 = require('./522'),
  module810 = require('./810'),
  module1489 = require('./1489'),
  b = ['onPress', 'foreground', 'background'],
  v = React.default.memo(function (o) {
    var v = o.onPress,
      k = o.foreground,
      P = undefined === k || k,
      h = module52.default(o, b),
      p = module1489.default().theme,
      _ = function () {
        ReactNative.InteractionManager.runAfterInteractions(function () {
          if (v) v();
        });
      };

    return module810.isAndroid
      ? React.default.createElement(
          module522.TouchableNativeFeedback,
          module11.default(
            {
              useForeground: P,
              background: module522.TouchableNativeFeedback.Ripple(h.color || p.colors.accent, !h.border),
              onPress: _,
            },
            h
          )
        )
      : React.default.createElement(
          module522.TouchableOpacity,
          module11.default(
            {
              onPress: _,
            },
            h
          )
        );
  });

exports.default = v;
