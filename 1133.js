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
    module35.default(b, t);
    var y = module401.default(b);

    function b() {
      module24.default(this, b);
      return y.apply(this, arguments);
    }

    module25.default(b, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            l = t.style,
            o = t.direction,
            u = t.wrap,
            s = t.justify,
            y = t.align,
            b = t.children,
            w = p(t, ['style', 'direction', 'wrap', 'justify', 'align', 'children']),
            v = [s, y].map(function (t) {
              var n;

              switch (t) {
                case 'start':
                  n = 'flex-start';
                  break;

                case 'end':
                  n = 'flex-end';
                  break;

                case 'between':
                  n = 'space-between';
                  break;

                case 'around':
                  n = 'space-around';
                  break;

                default:
                  n = t;
              }

              return n;
            }),
            O = {
              flexDirection: o,
              flexWrap: u,
              justifyContent: v[0],
              alignItems: v[1],
            },
            h = React.default.createElement(
              ReactNative.View,
              module11.default(
                {
                  style: [O, l],
                },
                w
              ),
              b
            );
          return w.onPress || w.onLongPress || w.onPressIn || w.onPressOut ? React.default.createElement(ReactNative.TouchableWithoutFeedback, module11.default({}, w), h) : h;
        },
      },
    ]);
    return b;
  })(React.default.Component);

exports.default = y;
y.defaultProps = {
  direction: 'row',
  wrap: 'nowrap',
  justify: 'start',
  align: 'center',
};
