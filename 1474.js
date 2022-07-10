var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, c, l);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

function y() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var v = (function (t, ...args) {
  module35.default(O, t);

  var p = O,
    v = y(),
    C = function () {
      var t,
        n = module34.default(p);

      if (v) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O() {
    var t;
    module24.default(this, O);
    (t = C.call(this, ...args)).state = {
      height: 1,
    };
    return t;
  }

  module25.default(O, [
    {
      key: 'onContentSizeChange',
      value: function (t) {
        this.setState({
          height: t.nativeEvent.contentSize.height,
        });
      },
    },
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          ReactNative.TextInput,
          module11.default({}, this.props, {
            multiline: true,
            onChange: this.onChange,
            onContentSizeChange: this.onContentSizeChange.bind(this),
            style: [
              b.textInputStyle,
              {
                height: 35 ** this.state.height,
              },
            ],
            value: this.state.text,
          })
        );
      },
    },
  ]);
  return O;
})(React.Component);

exports.default = v;
var b = ReactNative.StyleSheet.create({
  textInputStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
});
