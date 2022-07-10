var module20 = require('./20'),
  module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = S(require('react')),
  ReactNative = require('react-native'),
  module421 = require('./421'),
  module548 = require('./548'),
  module1070 = S(require('./1070')),
  module1071 = require('./1071'),
  module1072 = S(require('./1072')),
  module1076 = require('./1076'),
  module1079 = require('./1079');

function E(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (E = function (t) {
    return t ? l : n;
  })(t);
}

function S(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var l = E(n);
  if (l && l.has(t)) return l.get(t);
  var o = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var s in t)
    if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
      var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
      if (c && (c.get || c.set)) Object.defineProperty(o, s, c);
      else o[s] = t[s];
    }

  o.default = t;
  if (l) l.set(t, o);
  return o;
}

function w() {
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

function H(t) {
  var n = t.isFocused,
    l = t.children,
    o = t.style,
    u = module421.useTheme().colors;
  return (
    <ReactNative.View
      accessibilityElementsHidden={!n}
      importantForAccessibility={n ? 'auto' : 'no-hide-descendants'}
      style={[
        x.content,
        {
          backgroundColor: u.background,
        },
        o,
      ]}
    >
      {l}
    </ReactNative.View>
  );
}

var j = (function (t) {
  module35.default(C, t);

  var E = C,
    S = w(),
    j = function () {
      var t,
        n = module34.default(E);

      if (S) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function C(t) {
    var n;
    module24.default(this, C);

    (n = j.call(this, t)).renderTabBar = function () {
      var t = n.props,
        o = t.tabBar,
        u =
          undefined === o
            ? function (t) {
                return <module1072.default />;
              }
            : o,
        s = t.tabBarOptions,
        c = t.state,
        f = t.navigation,
        p = t.descriptors;
      return u(
        module11.default({}, s, {
          state: c,
          descriptors: p,
          navigation: f,
        })
      );
    };

    n.handleTabBarHeightChange = function (t) {
      n.setState(function (n) {
        return n.tabBarHeight !== t
          ? {
              tabBarHeight: t,
            }
          : null;
      });
    };

    var u = n.props,
      s = u.state,
      c = u.tabBarOptions,
      f = ReactNative.Dimensions.get('window'),
      y = module1072.getTabBarHeight({
        state: s,
        dimensions: f,
        layout: {
          width: f.width,
          height: 0,
        },
        insets: module1070.initialSafeAreaInsets,
        adaptive: null == c ? undefined : c.adaptive,
        labelPosition: null == c ? undefined : c.labelPosition,
        tabStyle: null == c ? undefined : c.tabStyle,
        style: null == c ? undefined : c.style,
      });
    n.state = {
      loaded: [s.routes[s.index].key],
      tabBarHeight: y,
    };
    return n;
  }

  module25.default(
    C,
    [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.state,
            l = t.descriptors,
            o = t.navigation,
            u = t.lazy,
            s = t.detachInactiveScreens,
            c = undefined === s || s,
            f = t.sceneContainerStyle,
            P = n.routes,
            E = this.state,
            S = E.loaded,
            w = E.tabBarHeight,
            j = (null == module548.screensEnabled ? undefined : module548.screensEnabled()) && c;
          return React.createElement(
            module421.NavigationHelpersContext.Provider,
            {
              value: o,
            },
            React.createElement(
              module1070.default,
              null,
              React.createElement(
                module548.ScreenContainer,
                {
                  enabled: j,
                  style: x.container,
                },
                P.map(function (t, o) {
                  var s = l[t.key],
                    c = s.options.unmountOnBlur,
                    y = n.index === o;
                  return c && !y
                    ? null
                    : !u || S.includes(t.key) || y
                    ? React.createElement(
                        module1071.default,
                        {
                          key: t.key,
                          style: ReactNative.StyleSheet.absoluteFill,
                          isVisible: y,
                          enabled: j,
                        },
                        React.createElement(
                          H,
                          {
                            isFocused: y,
                            style: f,
                          },
                          React.createElement(
                            module1079.default.Provider,
                            {
                              value: w,
                            },
                            s.render()
                          )
                        )
                      )
                    : null;
                })
              ),
              React.createElement(
                module1076.default.Provider,
                {
                  value: this.handleTabBarHeightChange,
                },
                this.renderTabBar()
              )
            )
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, l) {
          var o = t.state.routes[t.state.index].key;
          return {
            loaded: l.loaded.includes(o) ? l.loaded : [].concat(module20.default(l.loaded), [o]),
          };
        },
      },
    ]
  );
  return C;
})(React.Component);

exports.default = j;
j.defaultProps = {
  lazy: true,
};
var x = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
  },
});
