var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  ReactNative = require('react-native'),
  p = function (t, n) {
    var l = {};

    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && n.indexOf(o) < 0 && (l[o] = t[o]);

    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var u = 0;

      for (o = Object.getOwnPropertySymbols(t); u < o.length; u++) n.indexOf(o[u]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[u]) && (l[o[u]] = t[o[u]]);
    }

    return l;
  },
  y = (function (t) {
    module35.default(O, t);
    var y = module401.default(O);

    function O() {
      module24.default(this, O);
      return y.apply(this, arguments);
    }

    module25.default(O, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            l = t.style,
            o = t.children,
            u = t.flex,
            f = p(t, ['style', 'children', 'flex']),
            y = {
              flex: u || 1,
            },
            O = React.default.createElement(
              ReactNative.View,
              module11.default(
                {
                  style: [y, l],
                },
                f
              ),
              o
            );
          return f.onPress || f.onLongPress || f.onPressIn || f.onPressOut ? React.default.createElement(ReactNative.TouchableWithoutFeedback, module11.default({}, f), O) : O;
        },
      },
    ]);
    return O;
  })(React.default.Component);

exports.default = y;
y.defaultProps = {
  flex: 1,
};
