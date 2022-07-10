var module38 = require('./38');

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' !== module38(t) && 'function' != typeof t))
      return {
        default: t,
      };
    var l = v(o);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, s, c);
        else u[s] = t[s];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1118 = require('./1118');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
    return t ? o : n;
  })(t);
}

var b = (function (t) {
  module35.default(v, t);
  var n = module401.default(v);

  function v(t) {
    var l;
    module24.default(this, v);

    (l = n.call(this, t)).onBackAndroid = function () {
      var t = l.props.onBackHandler;

      if ('function' == typeof t) {
        var n = t();
        if (n) l.onClose();
        return n;
      }

      return !!l.state.visible && (l.onClose(), true);
    };

    l.onClose = function () {
      l.setState({
        visible: false,
      });
    };

    l.state = {
      visible: true,
    };
    return l;
  }

  module25.default(v, [
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.props,
          o = n.title,
          l = n.actions,
          u = n.content,
          f = n.onAnimationEnd,
          v = l.map(function (n) {
            var o = n.onPress || function () {};

            n.onPress = function () {
              var n = o();
              if (n && n.then)
                n.then(function () {
                  t.onClose();
                });
              else t.onClose();
            };

            return n;
          });
        return React.default.createElement(
          module1118.default,
          {
            transparent: true,
            title: o,
            visible: this.state.visible,
            footer: v,
            onAnimationEnd: f,
            onRequestClose: this.onBackAndroid,
            bodyStyle: {
              marginTop: 8,
              alignItems: 'center',
            },
          },
          React.default.createElement(ReactNative.ScrollView, null, React.isValidElement(u) ? u : React.default.createElement(ReactNative.Text, null, u))
        );
      },
    },
  ]);
  return v;
})(React.default.Component);

exports.default = b;
