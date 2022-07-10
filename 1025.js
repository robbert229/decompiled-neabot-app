var module24 = require('./24'),
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
    var o = w(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module1026 = require('./1026'),
  module1030 = require('./1030');

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (w = function (t) {
    return t ? o : n;
  })(t);
}

function h() {
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

module1030.Navigator.SceneConfigs = module1026.default;

var b = (function (t) {
  module35.default(R, t);

  var PropTypes = R,
    w = h(),
    b = function () {
      var t,
        n = module34.default(PropTypes);

      if (w) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function R() {
    module24.default(this, R);
    return b.apply(this, arguments);
  }

  module25.default(R, [
    {
      key: 'getChildContext',
      value: function () {
        var t = this;
        return {
          navigator: function () {
            return t.navigator;
          },
        };
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.props.rootView;
        return React.default.createElement(
          ReactNative.View,
          {
            style: {
              flex: 1,
              backgroundColor: 'black',
            },
          },
          React.default.createElement(module1030.Navigator, {
            initialRoute: {
              view: n,
              scene: null,
            },
            configureScene: function (t) {
              return t.scene ? t.scene : t.view.props.scene ? t.view.props.scene : module1026.default.PushFromRight;
            },
            renderScene: function (t, n) {
              return React.default.cloneElement(t.view, {
                ref: function (n) {
                  return (t.viewRef = n);
                },
              });
            },
            onDidFocus: function (t) {
              if (t.viewRef && t.viewRef.onDidFocus) t.viewRef.onDidFocus();
            },
            onWillFocus: function (t) {
              if (t.viewRef && t.viewRef.onWillFocus) t.viewRef.onWillFocus();
            },
            sceneStyle: null,
            ref: function (n) {
              return (t.navigator = n);
            },
          })
        );
      },
    },
  ]);
  return R;
})(React.Component);

exports.default = b;
b.propTypes = {
  rootView: PropTypes.default.element,
};
b.defaultProps = {
  rootView: React.default.createElement(
    ReactNative.View,
    {
      style: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    React.default.createElement(
      ReactNative.Text,
      {
        style: {
          fontSize: 36,
          padding: 10,
        },
      },
      'Teaset'
    ),
    React.default.createElement(
      ReactNative.Text,
      {
        style: {
          fontSize: 13,
          padding: 10,
        },
      },
      React.default.createElement(
        ReactNative.Text,
        {
          style: {
            fontWeight: 'bold',
          },
        },
        'Set TeaNavigator.rootView to show main page.',
        '\n\n'
      ),
      React.default.createElement(
        ReactNative.Text,
        {
          style: {
            color: '#ff7800',
          },
        },
        'class'
      ),
      ' ',
      React.default.createElement(
        ReactNative.Text,
        {
          style: {
            color: '#3b5bb5',
          },
        },
        'Application'
      ),
      ' ',
      React.default.createElement(
        ReactNative.Text,
        {
          style: {
            color: '#ff7800',
          },
        },
        'extends'
      ),
      ' Component',
      ' {\n\n',
      '  ',
      React.default.createElement(
        ReactNative.Text,
        {
          style: {
            color: '#3b5bb5',
          },
        },
        'render'
      ),
      '()',
      ' {\n',
      '    ',
      React.default.createElement(
        ReactNative.Text,
        {
          style: {
            color: '#ff7800',
          },
        },
        'return'
      ),
      ' ',
      '<TeaNavigator rootView={YourRootView} />;\n',
      '  }\n\n',
      '}'
    )
  ),
};
b.SceneConfigs = module1026.default;
b.childContextTypes = {
  navigator: PropTypes.default.func,
};
